import * as React from "react";
import {
  Badge, Body1, CompoundButton, Card, Caption1, CounterBadge, Dropdown, Field, Input, Option,
  Persona, ProgressBar, SpinButton, Spinner, Toast, ToastBody, Toaster, ToastTitle, useId,
  useToastController,
} from "@fluentui/react-components";
import { ASSETS, REQUESTS, type AssetRequest } from "../data";

const STATUS_COLOR: Record<AssetRequest["status"], "warning" | "success" | "danger"> = {
  대기: "warning",
  승인: "success",
  반려: "danger",
};

const CATEGORIES = [...new Set(ASSETS.map((a) => a.category))];

type StatTone = "warning" | "success" | "danger";

// 통계 카드 4요소: 색점, 라벨, 숫자, 진행바. ratio는 요청 대비 비중으로 계산
function RequestStatCard({ label, value, tone, ratio }: { label: string; value: string; tone: StatTone; ratio: number }) {
  const TONE_VAR: Record<StatTone, string> = {
    warning: "var(--colorPaletteYellowBackground3)",
    success: "var(--colorPaletteGreenBackground3)",
    danger: "var(--colorPaletteRedBackground3)",
  };
  const PROGRESS_COLOR: Record<StatTone, "warning" | "success" | "error"> = {
    warning: "warning", success: "success", danger: "error",
  };
  return (
    <Card style={{ padding: "12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
        <span aria-hidden style={{ width: 10, height: 10, borderRadius: "50%", background: TONE_VAR[tone], flexShrink: 0 }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{label}</Caption1>
          <Body1 style={{ fontSize: "16px", fontWeight: 600 }}>{value}</Body1>
        </div>
      </div>
      <ProgressBar value={ratio} thickness="medium" color={PROGRESS_COLOR[tone]} />
    </Card>
  );
}

export function RequestsScreen {
  const [requests, setRequests] = React.useState<AssetRequest[]>(REQUESTS);
  const [statusFilter, setStatusFilter] = React.useState("전체");
  const [requester, setRequester] = React.useState("");
  const [reason, setReason] = React.useState("");
  const [category, setCategory] = React.useState<string>(CATEGORIES[0] ?? "");
  const [quantity, setQuantity] = React.useState(1);
  const [submitting, setSubmitting] = React.useState(false);

  const toasterId = useId("requests-toaster");
  const { dispatchToast } = useToastController(toasterId);

  const rows = statusFilter === "전체" ? requests : requests.filter((r) => r.status === statusFilter);
  const counts = {
    대기: requests.filter((r) => r.status === "대기").length,
    승인: requests.filter((r) => r.status === "승인").length,
    반려: requests.filter((r) => r.status === "반려").length,
  };

  const submit =  => {
    if (!requester.trim || !reason.trim) return;
    setSubmitting(true);
    // 제출 중 상태 500ms 동안 Spinner로 표시
    setTimeout( => {
      setRequests((prev) => [
        {
          id: `rq${prev.length + 1}`, requester: requester.trim, assetCategory: category,
          reason: `${reason.trim}${quantity > 1 ? ` (${quantity}개)` : ""}`, status: "대기", requestedLabel: "방금",
        },
        ...prev,
      ]);
      setSubmitting(false);
      setRequester("");
      setReason("");
      setQuantity(1);
      dispatchToast(
        <Toast>
          <ToastTitle>요청을 등록했어요</ToastTitle>
          <ToastBody>담당자가 확인하는 대로 처리해요.</ToastBody>
        </Toast>,
        { intent: "success" },
      );
    }, 500);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Toaster toasterId={toasterId} />
      <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}>
        <RequestStatCard label="대기 중" value={`${counts.대기}건`} tone="warning" ratio={counts.대기 / requests.length} />
        <RequestStatCard label="승인됨" value={`${counts.승인}건`} tone="success" ratio={counts.승인 / requests.length} />
        <RequestStatCard label="반려됨" value={`${counts.반려}건`} tone="danger" ratio={counts.반려 / requests.length} />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 2, minWidth: "260px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Dropdown
              value={statusFilter}
              selectedOptions={[statusFilter]}
              onOptionSelect={(_, data) => setStatusFilter(data.optionValue ?? "전체")}
              style={{ maxWidth: "160px" }}
              aria-label="상태 거르기"
            >
              {["전체", "대기", "승인", "반려"].map((s) => (
                <Option key={s} value={s}>{s}</Option>
              ))}
            </Dropdown>
            {/* CounterBadge로 대기 건수 배지 표시 */}
            {counts.대기 > 0 ? <CounterBadge count={counts.대기} color="important" /> : null}
          </div>
          {rows.map((r) => (
            <Card key={r.id} style={{ padding: "12px 14px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Persona name={r.requester} secondaryText={r.assetCategory} avatar={{ color: "colorful" }} size="small" />
                <div style={{ display: "flex", flexDirection: "column", gap: "2px", flex: 1, minWidth: 0 }}>
                  <Body1 style={{ fontWeight: 600 }}>{r.reason}</Body1>
                  <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>{r.requestedLabel}</Caption1>
                </div>
                <Badge color={STATUS_COLOR[r.status]} appearance="filled">{r.status}</Badge>
              </div>
            </Card>
          ))}
          {rows.length === 0 ? (
            <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>조건에 맞는 요청이 없어요.</Caption1>
          ) : null}
        </div>

        {/* 새 요청 작성은 Field+Input+Dropdown+SpinButton으로 실제 목록에 추가 */}
        <div style={{ border: "1px solid var(--colorNeutralStroke2)", borderRadius: "8px", padding: "14px", flex: 1, minWidth: "220px", alignSelf: "flex-start" }}>
          <Body1 style={{ fontWeight: 600, marginBottom: "8px" }}>새 요청 작성</Body1>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Field label="신청자">
              <Input value={requester} onChange={(_, data) => setRequester(data.value)} placeholder="이름" />
            </Field>
            <Field label="자산 분류">
              {/* minWidth:0 지정. Fluent Dropdown min-width 250px 고정임 */}
              <Dropdown
                value={category}
                selectedOptions={[category]}
                onOptionSelect={(_, data) => setCategory(data.optionValue ?? CATEGORIES[0])}
                style={{ minWidth: 0 }}
              >
                {CATEGORIES.map((c) => (
                  <Option key={c} value={c}>{c}</Option>
                ))}
              </Dropdown>
            </Field>
            <Field label="수량">
              <SpinButton
                value={quantity}
                min={1}
                max={10}
                onChange={(_, data) => setQuantity(data.value ?? (data.displayValue ? Number(data.displayValue) : quantity))}
              />
            </Field>
            <Field label="사유">
              <Input value={reason} onChange={(_, data) => setReason(data.value)} placeholder="예: 배터리 노후화" />
            </Field>
            {submitting ? (
              <Spinner size="small" label="등록하는 중…" />
            ) : (
              <CompoundButton
                appearance="primary"
                secondaryContent={`${category} · ${quantity}개`}
                onClick={submit}
              >
                요청 등록
              </CompoundButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
