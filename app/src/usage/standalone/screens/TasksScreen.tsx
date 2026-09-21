import * as React from "react";
import { CheckCircle2, ClipboardList, Clock, ListTodo, Plus, Search, SearchX } from "lucide-react";
import { Table } from "../../../bases/standalone/Table";
import { Badge } from "../../../bases/standalone/Badge";
import { Pagination } from "../../../bases/standalone/Pagination";
import { Card } from "../../../bases/standalone/Card";
import { Button } from "../../../bases/standalone/Button";
import { Segmented } from "../../../bases/standalone/Segmented";
import { Checkbox } from "../../../bases/standalone/Checkbox";
import { Nativeselect } from "../../../bases/standalone/Nativeselect";
import { Label } from "../../../bases/standalone/Label";
import { Input } from "../../../bases/standalone/Input";
import { Dialog } from "../../../bases/standalone/Dialog";
import { Toast } from "../../../bases/standalone/Toast";
import { Stat } from "../../../bases/standalone/Stat";
import { Empty } from "../../../bases/standalone/Empty";

interface Task {
  id: string;
  title: string;
  project: string;
  owner: string;
  due: string;
  status: "할 일" | "진행 중" | "완료";
  desc: string;
}

const TASKS: Task[] = [
  { id: "t1", title: "결제 API 연동 테스트", project: "결제 시스템 마이그레이션", owner: "김도현", due: "09-19", status: "진행 중", desc: "레거시 결제 게이트웨이와 신규 API 간 트랜잭션 정합성을 검증." },
  { id: "t2", title: "디자인 QA", project: "고객 포털 v2", owner: "이서아", due: "09-19", status: "할 일", desc: "피그마 최종본과 실제 화면 간 픽셀 단위 차이를 점검한다." },
  { id: "t3", title: "스테이징 배포", project: "결제 시스템 마이그레이션", owner: "박준서", due: "09-20", status: "진행 중", desc: "스테이징 환경에 최신 브랜치를 배포하고 스모크 테스트를 돌린다." },
  { id: "t4", title: "접근성 점검", project: "고객 포털 v2", owner: "최유나", due: "09-22", status: "할 일", desc: "WCAG 2.2 AA 기준으로 키보드 내비게이션과 스크린리더 흐름을 점검한다." },
  { id: "t5", title: "API 응답 스키마 문서화", project: "내부 대시보드 개편", owner: "정하은", due: "09-18", status: "완료", desc: "신규 엔드포인트 응답 형식을 OpenAPI 스펙으로 정리했다." },
  { id: "t6", title: "온보딩 플로우 개선", project: "Cobalt 모바일 앱 리뉴얼", owner: "한지우", due: "09-23", status: "할 일", desc: "첫 실행 시 튜토리얼 이탈률을 낮추기 위한 단계 축소안." },
  { id: "t7", title: "다크모드 대응", project: "Cobalt 모바일 앱 리뉴얼", owner: "오세준", due: "09-24", status: "진행 중", desc: "전 화면 색 토큰을 다크 팔레트로 매핑하고 대비를 재검증한다." },
  { id: "t8", title: "결제 실패 알림 로직", project: "결제 시스템 마이그레이션", owner: "윤새별", due: "09-21", status: "할 일", desc: "결제 실패 시 사용자·운영팀 양쪽에 알림을 보내는 로직을 구현한다." },
  { id: "t9", title: "대시보드 위젯 재배치", project: "내부 대시보드 개편", owner: "송민재", due: "09-25", status: "할 일", desc: "사용 빈도 데이터를 기반으로 위젯 기본 배치를 다시 정한다." },
  { id: "t10", title: "고객 지원 챗봇 연동", project: "고객 포털 v2", owner: "임도현", due: "09-26", status: "할 일", desc: "기존 헬프데스크 API 를 챗봇 위젯에 연결한다." },
  { id: "t11", title: "성능 프로파일링", project: "Cobalt 모바일 앱 리뉴얼", owner: "김도현", due: "09-20", status: "완료", desc: "초기 로딩 3초를 1.2초로 줄인 결과를 문서화했다." },
  { id: "t12", title: "결제 영수증 PDF 생성", project: "결제 시스템 마이그레이션", owner: "박준서", due: "09-27", status: "할 일", desc: "결제 완료 후 영수증을 PDF 로 생성해 이메일로 발송한다." },
];

const PROJECT_NAMES = Array.from(new Set(TASKS.map((t) => t.project)));
const STATUS_LIST: readonly Task["status"][] = ["할 일", "진행 중", "완료"];
const STATUS_TONE: Record<Task["status"], string> = {
  "할 일": "neutral",
  "진행 중": "brand",
  완료: "success",
};
const PAGE_SIZE = 6;

interface Draft {
  title: string;
  project: string;
  owner: string;
  due: string;
}
const EMPTY_DRAFT: Draft = { title: "", project: PROJECT_NAMES[0], owner: "", due: "" };

export function TasksScreen {
  const [tasks, setTasks] = React.useState<readonly Task[]>(TASKS);
  const [query, setQuery] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<string[]>(["전체"]);
  const [selectedRowIds, setSelectedRowIds] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(1);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [composing, setComposing] = React.useState(false);
  const [draft, setDraft] = React.useState<Draft>(EMPTY_DRAFT);

  const activeFilter = statusFilter[0] ?? "전체";
  const filtered = tasks
    .filter((t) => activeFilter === "전체" || t.status === activeFilter)
    .filter((t) => {
      const q = query.trim;
      return q === "" || t.title.includes(q) || t.project.includes(q) || t.owner.includes(q);
    });
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  // 필터 결과 감소 시 page가 pageCount를 초과할 수 있어 렌더마다 clamp 처리
  const safePage = Math.min(page, pageCount);
  const shown = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  const counts = {
    전체: tasks.length,
    "할 일": tasks.filter((t) => t.status === "할 일").length,
    "진행 중": tasks.filter((t) => t.status === "진행 중").length,
    완료: tasks.filter((t) => t.status === "완료").length,
  };

  const STATS = [
    { label: "전체 작업", value: String(counts["전체"]), icon: ClipboardList, tone: "brand" },
    { label: "할 일", value: String(counts["할 일"]), icon: ListTodo, tone: "neutral" },
    { label: "진행 중", value: String(counts["진행 중"]), icon: Clock, tone: "brand" },
    { label: "완료", value: String(counts["완료"]), icon: CheckCircle2, tone: "success" },
  ] as const;

  const changeFilter = (v: string[]) => { setStatusFilter(v); setPage(1); setSelectedRowIds([]); };
  const changePage = (p: number) => { setPage(p); setSelectedRowIds([]); };

  const toggleAllShown = (checked: boolean) =>
    setSelectedRowIds(checked ? shown.map((t) => t.id) : []);
  const toggleRow = (id: string, checked: boolean) =>
    setSelectedRowIds((prev) => (checked ? [...prev, id] : prev.filter((x) => x !== id)));

  const markSelectedDone =  => {
    const n = selectedRowIds.length;
    setTasks((prev) => prev.map((t) => (selectedRowIds.includes(t.id) ? { ...t, status: "완료" as const } : t)));
    setSelectedRowIds([]);
    Toast.show({ title: `${n}건을 완료로 표시했어요`, type: "success" });
  };

  const closeComposer =  => { setComposing(false); setDraft(EMPTY_DRAFT); };
  const canSubmit = draft.title.trim !== "" && draft.owner.trim !== "" && draft.due.trim !== "";
  const submitDraft =  => {
    const next: Task = {
      id: `t-new-${Date.now}`,
      title: draft.title.trim,
      project: draft.project,
      owner: draft.owner.trim,
      due: draft.due.trim,
      status: "할 일",
      desc: `${draft.title.trim} 작업을 진행해요.`,
    };
    setTasks((prev) => [next, ...prev]);
    setComposing(false);
    setDraft(EMPTY_DRAFT);
    Toast.show({ title: "새 작업을 만들었어요", description: `${next.title} · ${next.owner} 담당`, type: "success" });
  };

  const changeStatus = (id: string, status: Task["status"]) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
    Toast.show({ title: `상태를 "${status}"(으)로 바꿨어요`, type: "info" });
  };

  const selected = tasks.find((t) => t.id === selectedId);

  if (selected) {
    const related = tasks.filter((t) => t.project === selected.project && t.id !== selected.id).slice(0, 3);
    return (
      <Card
        title={selected.title}
        description={`${selected.project} · ${selected.owner} 담당 · 마감 ${selected.due}`}
        action={<Badge tone={STATUS_TONE[selected.status]}>{selected.status}</Badge>}
      >
        <Button variant="plain" tone="brand" size="sm" onClick={ => setSelectedId(null)} style={{ marginBottom: "0.75rem", padding: 0 }}>
          ← 목록으로
        </Button>
        <p>{selected.desc}</p>

        <div className="ods-field" style={{ maxWidth: "14rem", marginTop: "0.9rem" }}>
          <Label htmlFor="tk-status">상태 변경</Label>
          <Nativeselect
            id="tk-status"
            value={selected.status}
            onChange={(e) => changeStatus(selected.id, e.target.value as Task["status"])}
          >
            {STATUS_LIST.map((s) => (
              <Nativeselect.Option key={s} value={s}>{s}</Nativeselect.Option>
            ))}
          </Nativeselect>
        </div>

        {related.length > 0 && (
          <div style={{ marginTop: "1.1rem" }}>
            <div style={{ fontWeight: 600, fontSize: "0.8125rem", marginBottom: "0.5rem" }}>같은 프로젝트의 다른 작업</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
              {related.map((t) => (
                <div key={t.id} style={{ display: "flex", justifyContent: "space-between", gap: "0.5rem", fontSize: "0.8125rem" }}>
                  <span style={{ minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{t.title}</span>
                  <Badge tone={STATUS_TONE[t.status]}>{t.status}</Badge>
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
      <style>{`
        .sa1-tk-stats { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.75rem; }
        @container sa1 (min-width: 40rem) { .sa1-tk-stats { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
      `}</style>

      <div className="sa1-tk-stats">
        {STATS.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} style={{ border: "1px solid var(--semantic-border-neutral-subtle)", borderRadius: "var(--semantic-radius-container)", padding: "0.9rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "1.75rem", height: "1.75rem", borderRadius: "var(--semantic-radius-control)", background: `var(--semantic-bg-${s.tone}-subtle)`, color: `var(--semantic-fg-${s.tone}-default)` }}>
                  <Icon size={14} aria-hidden />
                </span>
              </div>
              <Stat label={s.label} value={s.value} />
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.625rem" }}>
        <Segmented value={statusFilter} onValueChange={changeFilter}>
          {(["전체", ...STATUS_LIST] as const).map((s) => (
            <Segmented.Item key={s} value={s}>{s} ({counts[s]})</Segmented.Item>
          ))}
        </Segmented>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span className="ods-nativeselect-wrapper" style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
            <Search size={13} aria-hidden style={{ position: "absolute", left: "0.6rem", color: "var(--semantic-fg-neutral-subtle)", pointerEvents: "none" }} />
            <input
              className="ods-input"
              style={{ paddingInlineStart: "1.9rem", width: "11rem" }}
              placeholder="작업·프로젝트·담당자 검색"
              aria-label="작업 검색"
              value={query}
              onChange={(e) => {
                const v = e.target.value;
                setQuery(v);
                setPage(1);
              }}
            />
          </span>
          <Button variant="solid" tone="brand" size="sm" onClick={ => setComposing(true)}>
            <Plus size={14} aria-hidden /> 새 작업
          </Button>
        </div>
      </div>

      {selectedRowIds.length > 0 && (
        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.5rem 0.75rem", background: "var(--semantic-bg-brand-subtlest)", borderRadius: "var(--semantic-radius-control)" }}>
          <span style={{ fontSize: "0.8125rem" }}>{selectedRowIds.length}건 선택됨</span>
          <Button size="sm" variant="solid" tone="success" onClick={markSelectedDone}>완료로 표시</Button>
          <Button size="sm" variant="subtle" tone="neutral" onClick={ => setSelectedRowIds([])}>선택 해제</Button>
        </div>
      )}

      {filtered.length === 0 ? (
        <Empty>
          <Empty.Header>
            <Empty.Media><SearchX size={22} aria-hidden /></Empty.Media>
            <Empty.Title>조건에 맞는 작업이 없어요</Empty.Title>
            <Empty.Description>검색어나 상태 필터를 바꿔 보세요.</Empty.Description>
          </Empty.Header>
          <Empty.Content>
            <Button size="sm" variant="subtle" onClick={ => { setQuery(""); changeFilter(["전체"]); }}>필터 초기화</Button>
          </Empty.Content>
        </Empty>
      ) : (
        <>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.Head>
                  {/* 체크박스 라벨 sr-only로 숨김 처리. 표 열 폭 확장 방지 목적임 */}
                  <Checkbox
                    checked={shown.length > 0 && selectedRowIds.length === shown.length}
                    indeterminate={selectedRowIds.length > 0 && selectedRowIds.length < shown.length}
                    onCheckedChange={toggleAllShown}
                  >
                    <span className="sr-only">전체 선택</span>
                  </Checkbox>
                </Table.Head>
                <Table.Head>작업</Table.Head>
                <Table.Head>프로젝트</Table.Head>
                <Table.Head>담당자</Table.Head>
                <Table.Head>마감</Table.Head>
                <Table.Head>상태</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {shown.map((t) => (
                <Table.Row key={t.id}>
                  <Table.Cell>
                    <Checkbox
                      checked={selectedRowIds.includes(t.id)}
                      onCheckedChange={(checked) => toggleRow(t.id, checked)}
                    >
                      <span className="sr-only">{t.title} 선택</span>
                    </Checkbox>
                  </Table.Cell>
                  <Table.Cell>
                    <Button variant="plain" tone="brand" size="sm" onClick={ => setSelectedId(t.id)} style={{ padding: 0, height: "auto" }}>
                      {t.title}
                    </Button>
                  </Table.Cell>
                  <Table.Cell>{t.project}</Table.Cell>
                  <Table.Cell>{t.owner}</Table.Cell>
                  <Table.Cell>{t.due}</Table.Cell>
                  <Table.Cell>
                    <Badge tone={STATUS_TONE[t.status]}>{t.status}</Badge>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--semantic-fg-neutral-subtle)" }}>{filtered.length}건 중 {shown.length}건 표시</span>
            <Pagination page={safePage} total={pageCount} onPage={changePage} />
          </div>
        </>
      )}

      <Dialog
        open={composing}
        onClose={closeComposer}
        title="새 작업 만들기"
        actions={
          <>
            <Button variant="subtle" tone="neutral" onClick={closeComposer}>취소</Button>
            <Button variant="solid" tone="brand" disabled={!canSubmit} onClick={submitDraft}>만들기</Button>
          </>
        }
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", minWidth: "16rem" }}>
          <div className="ods-field">
            <Label htmlFor="tk-new-title" required>제목</Label>
            <input
              id="tk-new-title"
              className="ods-input"
              placeholder="예: 결제 실패 알림 로직"
              value={draft.title}
              onChange={(e) => {
                const v = e.target.value;
                setDraft((d) => ({ ...d, title: v }));
              }}
            />
          </div>
          <div className="ods-field">
            <Label htmlFor="tk-new-project">프로젝트</Label>
            <Nativeselect
              id="tk-new-project"
              value={draft.project}
              onChange={(e) => {
                const v = e.target.value;
                setDraft((d) => ({ ...d, project: v }));
              }}
            >
              {PROJECT_NAMES.map((p) => (
                <Nativeselect.Option key={p} value={p}>{p}</Nativeselect.Option>
              ))}
            </Nativeselect>
          </div>
          <div className="ods-field">
            <Label htmlFor="tk-new-owner" required>담당자</Label>
            <input
              id="tk-new-owner"
              className="ods-input"
              placeholder="예: 김도현"
              value={draft.owner}
              onChange={(e) => {
                const v = e.target.value;
                setDraft((d) => ({ ...d, owner: v }));
              }}
            />
          </div>
          <div className="ods-field">
            <Label htmlFor="tk-new-due" required>마감일</Label>
            <input
              id="tk-new-due"
              className="ods-input"
              placeholder="예: 09-30"
              value={draft.due}
              onChange={(e) => {
                const v = e.target.value;
                setDraft((d) => ({ ...d, due: v }));
              }}
            />
          </div>
          {/* 비제어 Input 사용 */}
          <Input label="설명 (선택)" multiline placeholder="메모를 남겨도 좋아요" />
        </div>
      </Dialog>
    </div>
  );
}
