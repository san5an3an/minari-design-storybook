import * as React from "react";
import {
  Avatar, Badge, Body1, Button, Caption1, Divider, Field, ProgressBar, Select, Textarea,
} from "@fluentui/react-components";
import { KB_ARTICLES, TICKETS, type Ticket } from "../data";
import type { ScreenProps } from "../screens";

const STATUS_COLOR: Record<Ticket["status"], "danger" | "warning" | "success"> = {
  열림: "danger",
  "진행 중": "warning",
  해결됨: "success",
};

const SLA_HOURS: Record<Ticket["priority"], number> = { 긴급: 4, 보통: 24, 낮음: 72 };

function elapsedHours(createdLabel: string): number {
  const hourMatch = /(\d+)시간 전/.exec(createdLabel);
  if (hourMatch) return Number(hourMatch[1]);
  const dayMatch = /(\d+)일 전/.exec(createdLabel);
  if (dayMatch) return Number(dayMatch[1]) * 24;
  if (createdLabel === "어제") return 24;
  return 0;
}

export function TicketDetailScreen({ selectedId, onNavigate }: ScreenProps) {
  const ticket = TICKETS.find((t) => t.id === selectedId);
  const [status, setStatus] = React.useState<Ticket["status"]>(ticket?.status ?? "열림");
  const [reply, setReply] = React.useState("");

  const relatedArticles = ticket ? KB_ARTICLES.filter((a) => a.category === ticket.category) : [];

  if (!ticket) {
    return (
      <div style={{ border: "1px dashed var(--colorNeutralStroke2)", borderRadius: "8px", padding: "32px", textAlign: "center" }}>
        <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>
          티켓을 먼저 골라 주세요. "티켓" 탭에서 항목을 눌러 보세요.
        </Caption1>
        <div style={{ marginTop: "12px" }}>
          <Button size="small" onClick={ => onNavigate?.("tickets")}>티켓 목록으로</Button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Body1 style={{ fontWeight: 600, fontSize: "18px" }}>{ticket.subject}</Body1>
          <Badge color={STATUS_COLOR[ticket.status]} appearance="filled">{ticket.status}</Badge>
        </div>
        <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>
          {ticket.requester} · {ticket.category} · {ticket.createdLabel}
        </Caption1>
      </div>

      {( => {
        const target = SLA_HOURS[ticket.priority];
        const elapsed = elapsedHours(ticket.createdLabel);
        const ratio = Math.min(elapsed / target, 1);
        const done = ticket.status === "해결됨";
        return (
          <div style={{ border: "1px solid var(--colorNeutralStroke2)", borderRadius: "8px", padding: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              <Caption1 style={{ fontWeight: 600 }}>SLA, {ticket.priority} 우선순위 목표 {target}시간</Caption1>
              <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>
                {done ? "완료" : ratio >= 1 ? "목표 초과" : `${elapsed}시간 경과`}
              </Caption1>
            </div>
            <ProgressBar value={done ? 1 : ratio} color={done ? "success" : ratio >= 1 ? "error" : ratio >= 0.7 ? "warning" : "brand"} />
          </div>
        );
      })}

      <Divider />
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {ticket.messages.map((m, i) => (
          <div key={i} style={{ display: "flex", gap: "8px" }}>
            <Avatar name={m.author} size={24} />
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <Caption1 style={{ fontWeight: 600 }}>{m.author} · {m.timeLabel}</Caption1>
              <Body1>{m.text}</Body1>
            </div>
          </div>
        ))}
      </div>
      <Divider />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        <Field label="상태" style={{ minWidth: "140px" }}>
          <Select value={status} onChange={(e) => setStatus(e.target.value as Ticket["status"])}>
            <option value="열림">열림</option>
            <option value="진행 중">진행 중</option>
            <option value="해결됨">해결됨</option>
          </Select>
        </Field>
        <Field label="답장" style={{ flex: 1, minWidth: "200px" }}>
          <Textarea
            value={reply}
            onChange={(_, data) => setReply(data.value)}
            placeholder="요청자에게 보낼 답변을 입력하세요"
            resize="vertical"
          />
        </Field>
      </div>
      <Button appearance="primary" style={{ alignSelf: "flex-start" }}>답장 보내기</Button>

      {relatedArticles.length > 0 ? (
        <>
          <Divider />
          <div>
            <Caption1 style={{ color: "var(--colorNeutralForeground3)", display: "block", marginBottom: "6px" }}>
              관련 지식베이스 문서
            </Caption1>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {relatedArticles.map((a) => (
                <div
                  key={a.id}
                  style={{ cursor: "pointer" }}
                  onClick={ => onNavigate?.("kb")}
                >
                  <Body1 style={{ color: "var(--colorBrandForegroundLink)" }}>{a.title}</Body1>
                  <Caption1 style={{ color: "var(--colorNeutralForeground3)", display: "block" }}>{a.summary}</Caption1>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
