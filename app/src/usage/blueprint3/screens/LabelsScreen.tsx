import * as React from "react";
import {
  Alert, Button, Card, CardList, Dialog, DialogBody, DialogFooter, FormGroup, HTMLSelect,
  InputGroup, Menu, MenuItem, NonIdealState, Popover, Section, SectionCard, Tag,
} from "@blueprintjs/core";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ISSUES, LABELS, type Label } from "../data";

const INTENT_OPTIONS: { value: Label["intent"]; label: string }[] = [
  { value: "danger", label: "위험(danger)" },
  { value: "warning", label: "주의(warning)" },
  { value: "primary", label: "브랜드(primary)" },
  { value: "none", label: "중립(none)" },
];

// 일 숫자만 추출해 내림차순 정렬
function dayOf(createdLabel: string): number {
  const m = /(\d+)일/.exec(createdLabel);
  return m ? Number(m[1]) : 0;
}

function issuesFor(labelName: string) {
  return ISSUES.filter((i) => i.labels.includes(labelName)).sort((a, b) => dayOf(b.createdLabel) - dayOf(a.createdLabel));
}

interface LabelFormValues {
  name: string;
  intent: Label["intent"];
  description: string;
}

function LabelFormDialog({
  isOpen, initial, onClose, onSubmit,
}: {
  isOpen: boolean;
  initial: Label | null;
  onClose:  => void;
  onSubmit: (values: LabelFormValues) => void;
}) {
  const [name, setName] = React.useState(initial?.name ?? "");
  const [intent, setIntent] = React.useState<Label["intent"]>(initial?.intent ?? "primary");
  const [description, setDescription] = React.useState(initial?.description ?? "");

  // isOpen true 시 initial로 값 초기화. 재마운트 안 돼 편집값 남음
  React.useEffect( => {
    if (isOpen) {
      setName(initial?.name ?? "");
      setIntent(initial?.intent ?? "primary");
      setDescription(initial?.description ?? "");
    }
  }, [isOpen, initial]);

  const canSubmit = name.trim.length > 0;

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title={initial ? "라벨 편집" : "새 라벨"} icon={initial ? "edit" : "add"}>
      <DialogBody>
        <FormGroup label="라벨 이름" labelInfo="(필수)">
          <InputGroup value={name} onChange={(e) => setName(e.currentTarget.value)} placeholder="예: 성능" autoFocus />
        </FormGroup>
        <FormGroup label="색(intent)">
          <HTMLSelect
            fill
            value={intent}
            onChange={(e) => setIntent(e.currentTarget.value as Label["intent"])}
            options={INTENT_OPTIONS}
          />
        </FormGroup>
        <FormGroup label="설명">
          <InputGroup
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
            placeholder="이 라벨을 언제 붙이는지"
          />
        </FormGroup>
      </DialogBody>
      <DialogFooter
        actions={
          <Button
            intent="primary"
            text={initial ? "저장" : "라벨 추가"}
            disabled={!canSubmit}
            onClick={ => onSubmit({ name: name.trim, intent, description: description.trim })}
          />
        }
      />
    </Dialog>
  );
}

export function LabelsScreen {
  const [labels, setLabels] = React.useState<Label[]>( => [...LABELS]);
  const [query, setQuery] = React.useState("");
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [editing, setEditing] = React.useState<Label | null>(null);
  const [deleting, setDeleting] = React.useState<Label | null>(null);

  const q = query.trim;
  const filtered = q ? labels.filter((l) => l.name.includes(q) || l.description.includes(q)) : labels;
  const chartData = filtered.map((l) => ({ name: l.name, value: issuesFor(l.name).length }));
  const totalAttachments = filtered.reduce((sum, l) => sum + issuesFor(l.name).length, 0);
  const topLabel = [...filtered].sort((a, b) => issuesFor(b.name).length - issuesFor(a.name).length)[0];

  const openCreate =  => { setEditing(null); setDialogOpen(true); };
  const openEdit = (label: Label) => { setEditing(label); setDialogOpen(true); };

  const submit = (values: LabelFormValues) => {
    setLabels((prev) => {
      if (editing) return prev.map((l) => (l.name === editing.name ? { ...l, ...values } : l));
      return [...prev, { ...values, count: 0 }];
    });
    setDialogOpen(false);
  };

  const confirmDelete =  => {
    if (!deleting) return;
    setLabels((prev) => prev.filter((l) => l.name !== deleting.name));
    setDeleting(null);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3" style={{ flexWrap: "wrap" }}>
        <InputGroup
          leftIcon="search"
          placeholder="라벨 이름·설명 검색"
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
          style={{ minWidth: "12rem" }}
        />
        <Button icon="add" text="새 라벨" className="ms-auto" onClick={openCreate} />
      </div>

      {/* 통계카드로 여백 채우기. 가장 많이 쓰인 라벨 추가 */}
      <div className="grid grid-cols-3 gap-3">
        <Card className="flex flex-col items-center gap-1 p-3 text-center">
          <span className="text-xs opacity-70">전체 라벨</span>
          <span className="text-lg font-semibold">{filtered.length}개</span>
        </Card>
        <Card className="flex flex-col items-center gap-1 p-3 text-center">
          <span className="text-xs opacity-70">라벨 부착 수</span>
          <span className="text-lg font-semibold">{totalAttachments}건</span>
        </Card>
        <Card className="flex flex-col items-center gap-1 p-3 text-center">
          <span className="text-xs opacity-70">가장 많이 쓰인 라벨</span>
          <span className="text-lg font-semibold">{topLabel ? topLabel.name : "—"}</span>
        </Card>
      </div>

      {filtered.length === 0 ? (
        <NonIdealState icon="search" title="검색 결과가 없습니다" description={`"${query}"와 일치하는 라벨이 없어요.`} />
      ) : (
        <>
          <div className="flex flex-col gap-2">
            {filtered.map((label) => (
              <Card key={label.name} className="flex items-center gap-3" style={{ display: "flex" }}>
                <Tag intent={label.intent} minimal>{label.name}</Tag>
                <span style={{ flex: 1, fontSize: "0.8125rem", opacity: 0.7 }}>{label.description || "설명 없음"}</span>
                <span style={{ fontSize: "0.75rem", opacity: 0.6 }}>{issuesFor(label.name).length}개</span>
                <Popover
                  content={
                    <Menu>
                      <MenuItem icon="edit" text="이름 편집" onClick={ => openEdit(label)} />
                      <MenuItem icon="trash" text="삭제" intent="danger" onClick={ => setDeleting(label)} />
                    </Menu>
                  }
                  placement="bottom-end"
                >
                  <span aria-label="라벨 메뉴" style={{ cursor: "pointer", opacity: 0.6 }}>⋯</span>
                </Popover>
              </Card>
            ))}
          </div>

          {/* 라벨별 이슈 수 비교. 여백 채우기, 단일 시리즈라 series-1 사용 */}
          <Card>
            <span className="text-sm font-medium">라벨별 이슈 수</span>
            <div style={{ inlineSize: "100%", blockSize: 120, marginBlockStart: 8 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical" margin={{ left: 8 }}>
                  <XAxis type="number" hide allowDecimals={false} />
                  <YAxis type="category" dataKey="name" tickLine={false} axisLine={false} width={64} tick={{ style: { fontSize: 11 } }} />
                  <Tooltip />
                  <Bar dataKey="value" fill="var(--component-chart-series-1)" radius={[0, 4, 4, 0]} isAnimationActive={false} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* 라벨별 최근 이슈 표시. 라벨과 IssuesScreen 연결하는 참조 */}
          <Section title="라벨별 최근 이슈">
            {filtered.map((label) => {
              const recent = issuesFor(label.name).slice(0, 2);
              return (
                <SectionCard key={label.name} padded={false}>
                  <div className="flex items-center gap-2 px-3 pt-2">
                    <Tag intent={label.intent} minimal>{label.name}</Tag>
                  </div>
                  {recent.length === 0 ? (
                    <div style={{ padding: "0.5rem 0.75rem 0.75rem", fontSize: "0.75rem", opacity: 0.6 }}>
                      이 라벨이 붙은 이슈가 없어요.
                    </div>
                  ) : (
                    <CardList bordered={false}>
                      {recent.map((issue) => (
                        <Card key={issue.id} style={{ display: "flex", justifyContent: "space-between", gap: "0.5rem" }}>
                          <div className="flex min-w-0 items-center gap-2">
                            <code style={{ opacity: 0.6, fontSize: "0.75rem" }}>{issue.key}</code>
                            <span className="truncate">{issue.title}</span>
                          </div>
                          <span style={{ fontSize: "0.75rem", opacity: 0.6, flexShrink: 0 }}>{issue.createdLabel}</span>
                        </Card>
                      ))}
                    </CardList>
                  )}
                </SectionCard>
              );
            })}
          </Section>
        </>
      )}

      <LabelFormDialog isOpen={dialogOpen} initial={editing} onClose={ => setDialogOpen(false)} onSubmit={submit} />
      <Alert
        isOpen={deleting != null}
        intent="danger"
        icon="trash"
        confirmButtonText="삭제"
        cancelButtonText="취소"
        onConfirm={confirmDelete}
        onCancel={ => setDeleting(null)}
      >
        {deleting ? `"${deleting.name}" 라벨을 삭제할까요?` : ""} 되돌릴 수 없어요.
      </Alert>
    </div>
  );
}
