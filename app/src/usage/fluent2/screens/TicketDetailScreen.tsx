import * as React from "react";
import {
  Avatar, Badge, Body1, Breadcrumb, BreadcrumbButton, BreadcrumbDivider, BreadcrumbItem,
  Button, Card, CardFooter, CardHeader, Caption1, Divider, Field, InfoLabel, InteractionTag,
  InteractionTagPrimary, Link, Menu, MenuItem, MenuList, MenuPopover, MenuTrigger,
  type MenuButtonProps, Persona, PresenceBadge, ProgressBar, Rating, RatingDisplay, Select,
  Switch, Tag, TagGroup, TagPicker, TagPickerControl, TagPickerGroup, TagPickerInput,
  TagPickerList, TagPickerOption, type TagPickerProps, Textarea, Toast, ToastBody, Toaster,
  ToastTitle, SplitButton, useId, useToastController,
} from "@fluentui/react-components";
import { elapsedHours, KB_ARTICLES, SLA_HOURS, TICKETS, type Ticket } from "../data";
import type { ScreenProps } from "../screens";

const STATUS_COLOR: Record<Ticket["status"], "danger" | "warning" | "success"> = {
  열림: "danger",
  "진행 중": "warning",
  해결됨: "success",
};

const LABEL_OPTIONS = ["에스컬레이션 필요", "고객 VIP", "재발 이슈", "장비 교체 필요"];

export function TicketDetailScreen({ selectedId, onNavigate, tickets: ticketsProp }: ScreenProps) {
  // Dashboard의 tickets 사용, 없으면 모듈 상수 TICKETS로 대체하기
  const tickets = ticketsProp ?? TICKETS;
  const ticket = tickets.find((t) => t.id === selectedId);
  const [status, setStatus] = React.useState<Ticket["status"]>(ticket?.status ?? "열림");
  const [reply, setReply] = React.useState("");
  const [notifyRequester, setNotifyRequester] = React.useState(true);
  const [satisfaction, setSatisfaction] = React.useState(0);
  const [escalated, setEscalated] = React.useState(false);
  const [labels, setLabels] = React.useState<string[]>([]);

  const toasterId = useId("ticket-detail-toaster");
  const { dispatchToast } = useToastController(toasterId);

  const onLabelSelect: TagPickerProps["onOptionSelect"] = (_, data) => {
    if (data.value === "no-options") return;
    setLabels(data.selectedOptions);
  };
  const labelChoices = LABEL_OPTIONS.filter((o) => !labels.includes(o));

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

  const target = SLA_HOURS[ticket.priority];
  const elapsed = elapsedHours(ticket.createdLabel);
  const ratio = Math.min(elapsed / target, 1);
  const done = ticket.status === "해결됨";

  const sendReply =  => {
    dispatchToast(
      <Toast>
        <ToastTitle>답장을 보냈어요</ToastTitle>
        <ToastBody>{notifyRequester ? `${ticket.requester}님에게 메일로도 전달했어요.` : "요청자에게 메일은 보내지 않았어요."}</ToastBody>
      </Toast>,
      { intent: "success" },
    );
    setReply("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Toaster toasterId={toasterId} />
      <Breadcrumb aria-label="티켓 위치">
        <BreadcrumbItem>
          <BreadcrumbButton onClick={ => onNavigate?.("tickets")}>티켓</BreadcrumbButton>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem>
          <BreadcrumbButton>{ticket.category}</BreadcrumbButton>
        </BreadcrumbItem>
        <BreadcrumbDivider />
        <BreadcrumbItem>
          <BreadcrumbButton current>{ticket.subject}</BreadcrumbButton>
        </BreadcrumbItem>
      </Breadcrumb>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 2, minWidth: "280px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Body1 style={{ fontWeight: 600, fontSize: "18px" }}>{ticket.subject}</Body1>
              <Badge color={STATUS_COLOR[ticket.status]} appearance="filled">{ticket.status}</Badge>
            </div>
            <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>
              {ticket.requester} · {ticket.category} · {ticket.createdLabel}
            </Caption1>
          </div>

          <div style={{ border: "1px solid var(--colorNeutralStroke2)", borderRadius: "8px", padding: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              {/* InfoLabel, Link로 SLA 설명 도움말 제공하기 */}
              <InfoLabel
                info={
                  <>
                    우선순위별 목표 응답시간이에요.{" "}
                    <Link href="https://react.fluentui.dev" target="_blank">더 알아보기</Link>
                  </>
                }
              >
                <Caption1 style={{ fontWeight: 600 }}>SLA, {ticket.priority} 우선순위 목표 {target}시간</Caption1>
              </InfoLabel>
              <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>
                {done ? "완료" : ratio >= 1 ? "목표 초과" : `${elapsed}시간 경과`}
              </Caption1>
            </div>
            <ProgressBar value={done ? 1 : ratio} color={done ? "success" : ratio >= 1 ? "error" : ratio >= 0.7 ? "warning" : "brand"} />
          </div>

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
          <Switch
            checked={notifyRequester}
            onChange={(_, data) => setNotifyRequester(Boolean(data.checked))}
            label="답장을 요청자에게 메일로도 보내기"
          />

          {/* 답장 보내기와 임시 저장 SplitButton으로 배치 */}
          <Menu positioning="below-end">
            <MenuTrigger disableButtonEnhancement>
              {(triggerProps: MenuButtonProps) => (
                <SplitButton
                  appearance="primary"
                  menuButton={triggerProps}
                  primaryActionButton={{ onClick: sendReply }}
                  style={{ alignSelf: "flex-start" }}
                >
                  답장 보내기
                </SplitButton>
              )}
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem onClick={ => setReply((r) => r)}>임시 저장</MenuItem>
                <MenuItem onClick={ => setStatus("해결됨")}>답장하고 티켓 종료</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1, minWidth: "220px" }}>
          <Card>
            <CardHeader
              image={<PresenceBadge status="available" outOfOffice={false} />}
              header={<Persona name={ticket.requester} secondaryText="요청자 · 접속 중" avatar={{ color: "colorful" }} size="medium" />}
            />
            <TagGroup aria-label="티켓 분류 태그">
              <Tag shape="circular">{ticket.category}</Tag>
              <Tag shape="circular" appearance={ticket.priority === "긴급" ? "brand" : "outline"}>{ticket.priority}</Tag>
            </TagGroup>

            {/* InteractionTag로 단일 상태 토글 태그 구현하기 */}
            <InteractionTag selected={escalated} onClick={ => setEscalated((v) => !v)} shape="circular">
              <InteractionTagPrimary>{escalated ? "에스컬레이션됨" : "에스컬레이션 표시"}</InteractionTagPrimary>
            </InteractionTag>

            <Divider />
            <div>
              <Caption1 style={{ color: "var(--colorNeutralForeground3)", display: "block", marginBottom: "4px" }}>
                라벨
              </Caption1>
              {/* 여러 라벨 TagPicker로 자동완성 선택 */}
              <TagPicker onOptionSelect={onLabelSelect} selectedOptions={labels}>
                <TagPickerControl>
                  <TagPickerGroup aria-label="선택된 라벨">
                    {labels.map((l) => (
                      <Tag key={l} shape="rounded" value={l} size="small">{l}</Tag>
                    ))}
                  </TagPickerGroup>
                  <TagPickerInput aria-label="라벨 추가" />
                </TagPickerControl>
                <TagPickerList>
                  {labelChoices.length > 0 ? (
                    labelChoices.map((o) => (
                      <TagPickerOption key={o} value={o}>{o}</TagPickerOption>
                    ))
                  ) : (
                    <TagPickerOption value="no-options">더 고를 라벨이 없어요</TagPickerOption>
                  )}
                </TagPickerList>
              </TagPicker>
            </div>
            <Divider />
            <div>
              <Caption1 style={{ color: "var(--colorNeutralForeground3)", display: "block", marginBottom: "4px" }}>
                고객 만족도 기록
              </Caption1>
              <Rating
                value={satisfaction}
                onChange={(_, data) => setSatisfaction(data.value)}
                aria-label="고객 만족도"
              />
              <div style={{ marginTop: "6px", display: "flex", alignItems: "center", gap: "6px" }}>
                <RatingDisplay value={4.2} count={18} compact />
                <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>이 카테고리 평균</Caption1>
              </div>
            </div>
            <CardFooter>
              <Button size="small" appearance="outline">고객에게 만족도 조사 보내기</Button>
            </CardFooter>
          </Card>

          {relatedArticles.length > 0 ? (
            <Card style={{ padding: "14px" }}>
              <Caption1 style={{ color: "var(--colorNeutralForeground3)", display: "block", marginBottom: "8px" }}>
                관련 지식베이스 문서
              </Caption1>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {relatedArticles.map((a) => (
                  <div key={a.id}>
                    <Link onClick={ => onNavigate?.("kb")}>{a.title}</Link>
                    <Caption1 style={{ color: "var(--colorNeutralForeground3)", display: "block" }}>{a.summary}</Caption1>
                  </div>
                ))}
              </div>
            </Card>
          ) : null}

          <Card style={{ padding: "14px" }}>
            <Caption1 style={{ color: "var(--colorNeutralForeground3)", display: "block", marginBottom: "8px" }}>
              같은 요청자의 다른 티켓
            </Caption1>
            {tickets.filter((t) => t.requester === ticket.requester && t.id !== ticket.id).length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {tickets.filter((t) => t.requester === ticket.requester && t.id !== ticket.id).map((t) => (
                  <Caption1 key={t.id}>{t.subject}</Caption1>
                ))}
              </div>
            ) : (
              <Caption1 style={{ color: "var(--colorNeutralForeground3)" }}>다른 티켓이 없어요.</Caption1>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
