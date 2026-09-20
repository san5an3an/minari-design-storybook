"use client";

import * as React from "react";
import {
  Alert, Button, Card, ControlGroup, Dialog, DialogBody, DialogFooter, FormGroup,
  HTMLSelect, InputGroup, NumericInput, OverlayToaster, Radio, RadioGroup, Switch, Tag,
} from "@blueprintjs/core";
import type { Intent, Toaster } from "@blueprintjs/core";

interface Rule {
  id: string;
  name: string;
  hint: string;
  severity: "danger" | "warning" | "none";
  defaultOn: boolean;
}

const SEVERITY_INTENT: Record<Rule["severity"], Intent> = {
  danger: "danger",
  warning: "warning",
  none: "none",
};

const SEVERITY_LABEL: Record<Rule["severity"], string> = { danger: "위험", warning: "주의", none: "정보" };
const SEVERITY_FROM_LABEL: Record<string, Rule["severity"]> = { 위험: "danger", 주의: "warning", 정보: "none" };
const CHANNEL_LABEL: Record<string, string> = { email: "이메일", slack: "슬랙", sms: "문자" };

const INITIAL_RULES: Rule[] = [
  { id: "5xx", name: "5xx 오류율 5% 초과", hint: "5분 평균 기준", severity: "danger", defaultOn: true },
  { id: "latency", name: "결제 지연 2초 초과", hint: "p95 기준", severity: "warning", defaultOn: true },
  { id: "sync", name: "재고 동기화 지연 30초 초과", hint: "", severity: "warning", defaultOn: false },
  { id: "login", name: "로그인 실패 급증", hint: "1분 내 20회 이상", severity: "none", defaultOn: true },
  { id: "queue", name: "알림 발송 큐 적체", hint: "대기 500건 초과", severity: "warning", defaultOn: true },
  { id: "search-latency", name: "검색 응답 지연 300ms 초과", hint: "p99 기준", severity: "warning", defaultOn: false },
  { id: "disk", name: "디스크 사용률 85% 초과", hint: "인프라 노드 기준", severity: "danger", defaultOn: true },
  { id: "signup", name: "신규 가입 급증", hint: "10분 내 100건 이상", severity: "none", defaultOn: false },
];

// OverlayToaster 하나만 지연 생성해 재사용. 매번 생성 시 토스트 겹쳐 쌓임
let toasterPromise: Promise<Toaster> | null = null;
function getToaster: Promise<Toaster> {
  if (!toasterPromise) toasterPromise = OverlayToaster.createAsync({ position: "top" });
  return toasterPromise;
}
async function notify(message: string, intent: Intent = "success") {
  const toaster = await getToaster;
  toaster.show({ message, intent, icon: intent === "danger" ? "trash" : "tick", timeout: 2200 });
}

interface RuleFormValues {
  name: string;
  hint: string;
  severity: Rule["severity"];
}

// 규칙 추가, 편집 Dialog
function RuleFormDialog({
  isOpen, editing, onClose, onSubmit,
}: {
  isOpen: boolean;
  editing: Rule | null;
  onClose:  => void;
  onSubmit: (values: RuleFormValues) => void;
}) {
  const [name, setName] = React.useState("");
  const [metric, setMetric] = React.useState("오류율");
  const [operator, setOperator] = React.useState(">");
  const [threshold, setThreshold] = React.useState<number | undefined>(undefined);
  const [severityLabel, setSeverityLabel] = React.useState("주의");
  const [channel, setChannel] = React.useState("email");
  const [editHint, setEditHint] = React.useState("");

  React.useEffect( => {
    if (!isOpen) return;
    if (editing) {
      setName(editing.name);
      setSeverityLabel(SEVERITY_LABEL[editing.severity]);
      setEditHint(editing.hint);
      setChannel("email");
    } else {
      setName(""); setMetric("오류율"); setOperator(">"); setThreshold(undefined);
      setSeverityLabel("주의"); setChannel("email");
    }
  }, [isOpen, editing]);

  const canSubmit = name.trim.length > 0 && (editing || (threshold ?? 0) > 0);

  const submit =  => {
    const severity = SEVERITY_FROM_LABEL[severityLabel] ?? "none";
    if (editing) {
      onSubmit({ name: name.trim, hint: editHint.trim, severity });
    } else {
      const hint = `${metric} ${operator} ${threshold}${metric === "지연시간" ? "ms" : metric === "요청 수" ? "건" : "%"} 기준 · ${CHANNEL_LABEL[channel]}로 전달`;
      onSubmit({ name: name.trim, hint, severity });
    }
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title={editing ? "알림 규칙 편집" : "새 알림 규칙"} icon={editing ? "edit" : "notifications-add"}>
      <DialogBody>
        <FormGroup label="규칙 이름" labelInfo="(필수)">
          <InputGroup placeholder="예: 결제 실패율 급증" value={name} onChange={(e) => setName(e.currentTarget.value)} autoFocus />
        </FormGroup>
        {editing ? (
          <FormGroup label="설명">
            <InputGroup placeholder="예: 5분 평균 기준" value={editHint} onChange={(e) => setEditHint(e.currentTarget.value)} />
          </FormGroup>
        ) : (
          <FormGroup label="조건">
            <ControlGroup fill>
              <HTMLSelect value={metric} onChange={(e) => setMetric(e.currentTarget.value)} options={["오류율", "지연시간", "요청 수"]} />
              <HTMLSelect value={operator} onChange={(e) => setOperator(e.currentTarget.value)} options={[">", ">=", "<", "<="]} style={{ maxInlineSize: "4rem" }} />
              {/* NumericInput 으로 임계값 숫자 전용 입력 적용 */}
              <NumericInput
                placeholder="임계값"
                value={threshold}
                onValueChange={(n) => setThreshold(Number.isNaN(n) ? undefined : n)}
                buttonPosition="right"
                style={{ maxInlineSize: "6rem" }}
              />
            </ControlGroup>
          </FormGroup>
        )}
        <FormGroup label="심각도">
          <HTMLSelect fill value={severityLabel} onChange={(e) => setSeverityLabel(e.currentTarget.value)} options={["정보", "주의", "위험"]} />
        </FormGroup>
        {/* RadioGroup/Radio로 알림 방식 지정 */}
        <FormGroup label="알림 방식">
          <RadioGroup inline selectedValue={channel} onChange={(e) => setChannel(e.currentTarget.value)}>
            <Radio label="이메일" value="email" />
            <Radio label="슬랙" value="slack" />
            <Radio label="문자" value="sms" />
          </RadioGroup>
        </FormGroup>
      </DialogBody>
      <DialogFooter actions={<Button intent="primary" text={editing ? "저장" : "규칙 추가"} disabled={!canSubmit} onClick={submit} />} />
    </Dialog>
  );
}

export function RulesScreen {
  const [rules, setRules] = React.useState<Rule[]>(INITIAL_RULES);
  const [on, setOn] = React.useState<Record<string, boolean>>(
     => Object.fromEntries(INITIAL_RULES.map((r) => [r.id, r.defaultOn])),
  );
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [editing, setEditing] = React.useState<Rule | null>(null);
  const [deleting, setDeleting] = React.useState<Rule | null>(null);

  const openCreate =  => { setEditing(null); setDialogOpen(true); };
  const openEdit = (rule: Rule) => { setEditing(rule); setDialogOpen(true); };

  const submit = (values: RuleFormValues) => {
    if (editing) {
      setRules((prev) => prev.map((r) => (r.id === editing.id ? { ...r, ...values } : r)));
      notify(`"${values.name}" 규칙을 저장했어요.`);
    } else {
      const id = `${values.name.replace(/\s+/g, "-").toLowerCase}-${Date.now.toString(36)}`;
      setRules((prev) => [...prev, { id, ...values, defaultOn: true }]);
      setOn((prev) => ({ ...prev, [id]: true }));
      notify(`"${values.name}" 규칙을 추가했어요.`);
    }
    setDialogOpen(false);
  };

  const confirmDelete =  => {
    if (!deleting) return;
    setRules((prev) => prev.filter((r) => r.id !== deleting.id));
    setOn((prev) => { const next = { ...prev }; delete next[deleting.id]; return next; });
    notify(`"${deleting.name}" 규칙을 삭제했어요.`, "danger");
    setDeleting(null);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <Tag minimal>{Object.values(on).filter(Boolean).length}/{rules.length}개 켜짐</Tag>
        <Button icon="add" text="새 규칙" onClick={openCreate} />
      </div>
      <Card className="gap-0 divide-y p-0">
        {rules.map((rule) => (
          <div key={rule.id} className="flex items-center justify-between gap-3 px-4 py-3">
            <div className="flex items-center gap-2">
              <Tag intent={SEVERITY_INTENT[rule.severity]} minimal>
                {SEVERITY_LABEL[rule.severity]}
              </Tag>
              <div className="flex flex-col">
                <span>{rule.name}</span>
                {rule.hint ? (
                  <span style={{ fontSize: "0.75rem", opacity: 0.6 }}>{rule.hint}</span>
                ) : null}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Switch
                checked={on[rule.id] ?? false}
                label={on[rule.id] ? "켜짐" : "꺼짐"}
                onChange={ => setOn((prev) => ({ ...prev, [rule.id]: !prev[rule.id] }))}
              />
              <Button icon="edit" minimal small onClick={ => openEdit(rule)} aria-label="규칙 편집" />
              <Button icon="trash" minimal small onClick={ => setDeleting(rule)} aria-label="규칙 삭제" />
            </div>
          </div>
        ))}
      </Card>
      <RuleFormDialog isOpen={dialogOpen} editing={editing} onClose={ => setDialogOpen(false)} onSubmit={submit} />
      {/* 베이스에 없는 Alert로 삭제 확인 처리 */}
      <Alert
        isOpen={deleting != null}
        intent="danger"
        icon="trash"
        confirmButtonText="삭제"
        cancelButtonText="취소"
        onConfirm={confirmDelete}
        onCancel={ => setDeleting(null)}
      >
        {deleting ? deleting.name : ""} 규칙을 삭제할까요? 되돌릴 수 없어요.
      </Alert>
    </div>
  );
}
