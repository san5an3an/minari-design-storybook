import * as React from "react";
import {
  Avatar, Badge, Breadcrumb, BreadcrumbItem, Button, FloatingLabel, ListGroup, ListGroupItem, Toast,
} from "flowbite-react";
import { CheckCircle2, MapPin, Phone, Video } from "lucide-react";
import { CUSTOMERS, DEAL_ACTIVITY, REVIEWS, UPCOMING_MEETINGS, type CustomerItem } from "../data";
import type { ScreenProps } from "../screens";

const STATUS_BADGE: Record<CustomerItem["status"], { color: string; label: string }> = {
  active: { color: "success", label: "활성" },
  trial: { color: "info", label: "체험" },
  churned: { color: "gray", label: "해지" },
};

const won = (n: number) => (n === 0 ? "-" : `${n.toLocaleString("ko-KR")}원`);

const CHANNEL_ICON = { 화상: Video, 방문: MapPin, 전화: Phone } as const;

export function CustomerDetailScreen({ selectedId, onNavigate, customers: customersProp }: ScreenProps) {
  // Dashboard 고객 목록을 기준으로 사용, 없으면 정적 CUSTOMERS로 대체하기
  const customers = customersProp ?? CUSTOMERS;
  const customer = customers.find((c) => c.id === selectedId) ?? customers[0];
  const [memo, setMemo] = React.useState("");
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  const notify = (message: string) => {
    setToastMessage(message);
    window.setTimeout( => setToastMessage(null), 2500);
  };

  React.useEffect( => { setMemo(""); }, [selectedId]);

  if (!customer) {
    return (
      <div style={{ border: "1px dashed var(--color-gray-300)", borderRadius: "8px", padding: "32px", textAlign: "center" }}>
        <span style={{ color: "var(--color-gray-500)", fontSize: "14px" }}>
          고객을 먼저 골라 주세요. "고객" 탭에서 표의 행을 눌러 보세요.
        </span>
        <div style={{ marginTop: "12px" }}>
          <Button size="sm" onClick={ => onNavigate?.("customers")}>고객 목록으로</Button>
        </div>
      </div>
    );
  }

  const badge = STATUS_BADGE[customer.status];
  const relatedReviews = REVIEWS.filter((r) => r.customer.includes(customer.name) || r.customer.includes(customer.company));
  const relatedMeetings = UPCOMING_MEETINGS.filter((m) => m.customer === customer.company);
  const relatedActivity = DEAL_ACTIVITY.filter((d) => d.customer === customer.company);
  const related = customers.filter((c) => c.plan === customer.plan && c.id !== customer.id);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Breadcrumb>
        <BreadcrumbItem onClick={ => onNavigate?.("customers")} className="cursor-pointer">고객</BreadcrumbItem>
        <BreadcrumbItem>{customer.name}</BreadcrumbItem>
      </Breadcrumb>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Avatar rounded size="md" placeholderInitials={customer.name[0]} />
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontWeight: 600, fontSize: "18px" }}>{customer.name}</span>
            <Badge color={badge.color}>{badge.label}</Badge>
          </div>
          <span style={{ fontSize: "14px", color: "var(--color-gray-500)" }}>{customer.company} · {customer.plan}</span>
        </div>
      </div>

      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))" }}>
        <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "14px" }}>
          <span style={{ fontSize: "12px", color: "var(--color-gray-500)" }}>월 매출</span>
          <div style={{ fontSize: "18px", fontWeight: 600 }}>{won(customer.mrr)}</div>
        </div>
        <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "14px" }}>
          <span style={{ fontSize: "12px", color: "var(--color-gray-500)" }}>예정된 미팅</span>
          <div style={{ fontSize: "18px", fontWeight: 600 }}>{relatedMeetings.length}건</div>
        </div>
        <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "14px" }}>
          <span style={{ fontSize: "12px", color: "var(--color-gray-500)" }}>남긴 리뷰</span>
          <div style={{ fontSize: "18px", fontWeight: 600 }}>{relatedReviews.length}건</div>
        </div>
        <div style={{ border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "14px" }}>
          <span style={{ fontSize: "12px", color: "var(--color-gray-500)" }}>딜 이동 이력</span>
          <div style={{ fontSize: "18px", fontWeight: 600 }}>{relatedActivity.length}건</div>
        </div>
      </div>

      {/* FloatingLabel, Toast로 메모 저장 처리 */}
      <div>
        <FloatingLabel
          variant="outlined"
          label="관리자 메모"
          sizing="sm"
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
        />
        <div style={{ marginTop: "8px" }}>
          <Button size="xs" disabled={!memo.trim} onClick={ => notify("메모가 저장됐어요.")}>메모 저장</Button>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:flex-row">
        <div style={{ flex: 1, minWidth: 0, border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "14px" }}>
          <span style={{ fontSize: "13px", fontWeight: 600 }}>다가오는 미팅</span>
          {relatedMeetings.length === 0 ? (
            <span style={{ fontSize: "13px", color: "var(--color-gray-500)", display: "block", marginTop: "8px" }}>예정된 미팅 없음</span>
          ) : (
            <div className="mt-2 flex flex-col gap-2">
              {relatedMeetings.map((m) => {
                const Icon = CHANNEL_ICON[m.channel];
                return (
                  <div key={m.id} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Icon size={13} color="var(--color-primary-600)" aria-hidden />
                    <span style={{ fontSize: "13px", flex: 1 }}>{m.topic}</span>
                    <span style={{ fontSize: "12px", color: "var(--color-gray-500)" }}>{m.timeLabel}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div style={{ flex: 1, minWidth: 0, border: "1px solid var(--color-gray-200)", borderRadius: "8px", padding: "14px" }}>
          <span style={{ fontSize: "13px", fontWeight: 600 }}>같은 요금제({customer.plan})의 다른 고객</span>
          {related.length === 0 ? (
            <span style={{ fontSize: "13px", color: "var(--color-gray-500)", display: "block", marginTop: "8px" }}>없음</span>
          ) : (
            <div className="mt-2 flex flex-col gap-2">
              {related.map((c) => (
                <div key={c.id} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Avatar rounded size="xs" placeholderInitials={c.name[0]} />
                  <span style={{ fontSize: "13px", flex: 1 }}>{c.name} · {c.company}</span>
                  <Badge color={STATUS_BADGE[c.status].color}>{STATUS_BADGE[c.status].label}</Badge>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div>
        <span style={{ fontSize: "13px", fontWeight: 600, marginBottom: "8px", display: "block" }}>남긴 리뷰</span>
        {relatedReviews.length === 0 ? (
          <span style={{ fontSize: "13px", color: "var(--color-gray-500)" }}>아직 리뷰가 없어요.</span>
        ) : (
          <ListGroup>
            {relatedReviews.map((r) => (
              <ListGroupItem key={r.id}>
                <span className="flex w-full items-center justify-between">
                  <span style={{ fontSize: "13px" }}>{r.comment}</span>
                  <span style={{ fontSize: "11px", color: "var(--color-gray-500)", flexShrink: 0, marginLeft: "8px" }}>{r.score}점 · {r.dateLabel}</span>
                </span>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </div>

      {toastMessage && (
        <div style={{ position: "fixed", right: "20px", bottom: "20px", zIndex: 30 }}>
          <Toast>
            <span
              style={{
                display: "inline-flex", height: "32px", width: "32px", flexShrink: 0, alignItems: "center",
                justifyContent: "center", borderRadius: "8px", background: "var(--color-green-100)", color: "var(--color-green-600)",
              }}
            >
              <CheckCircle2 size={16} />
            </span>
            <div className="ml-3 text-sm font-normal">{toastMessage}</div>
          </Toast>
        </div>
      )}
    </div>
  );
}
