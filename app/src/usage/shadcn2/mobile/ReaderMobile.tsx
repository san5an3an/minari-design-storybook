"use client";
import * as React from "react";
import { BookmarkCheck, Clock, MessageCircle, Paperclip, Send } from "lucide-react";
import { Attachment } from "../../../bases/shadcn/Attachment";
import { Badge } from "../../../bases/shadcn/Badge";
import { Bubble } from "../../../bases/shadcn/Bubble";
import { Inputgroup } from "../../../bases/shadcn/Inputgroup";
import { Marker } from "../../../bases/shadcn/Marker";
import { Message } from "../../../bases/shadcn/Message";
import { Messagescroller } from "../../../bases/shadcn/Messagescroller";
import { Prose } from "../../../bases/shadcn/Prose";
import { Questionnaire } from "../../../bases/shadcn/Questionnaire";
import { Slider } from "../../../bases/shadcn/Slider";
import { ARTICLES, TAG_IMAGE, TAG_TONE } from "../data";
import { COMMENTS } from "../screens/ReaderScreen";
import type { ScreenProps } from "../screens";

const META = { fontSize: "var(--semantic-text-body-sm)", color: "var(--semantic-fg-neutral-subtle)" } as const;

export function ReaderMobile({ itemId }: ScreenProps) {
  const article = ARTICLES.find((a) => a.id === itemId) ?? ARTICLES[0];
  const [fontScale, setFontScale] = React.useState(1);
  const [surveyDone, setSurveyDone] = React.useState(false);

  return (
    <div className="flex flex-col gap-(--semantic-space-lg)">
      {/* 태그별 표지 사진 표시. 목록, 컬렉션과 같은 사진을 사용함 */}
      <img
        src={TAG_IMAGE[article.tag]}
        alt=""
        aria-hidden
        className="w-full object-cover"
        style={{ height: "11rem", borderRadius: "var(--semantic-radius-container)" }}
      />

      <div className="flex flex-col gap-(--semantic-space-sm)">
        <div className="flex flex-wrap items-center gap-x-(--semantic-space-sm) gap-y-(--semantic-space-xs)">
          <Badge variant="subtle" tone={TAG_TONE[article.tag] ?? "neutral"}>{article.tag}</Badge>
          <span className="flex items-center gap-(--semantic-space-xs)" style={META}>
            <Clock size={14} aria-hidden />
            {article.minutes}분 · {article.source}
          </span>
        </div>
        <h2
          style={{
            margin: 0,
            color: "var(--semantic-fg-neutral-default)",
            fontSize: "var(--semantic-text-heading)",
            letterSpacing: "var(--semantic-tracking-heading-lg)",
            lineHeight: "var(--semantic-line-height-tight)",
          }}
        >
          {article.title}
        </h2>
      </div>

      {/* 글자 크기 라벨과 Slider 한 줄 배치. 이 줄 안에서만 손잡이 누름 범위를 44px 로 확대 */}
      <div className="flex min-h-11 items-center gap-(--semantic-space-md) [&_[data-slot=slider]>div]:min-h-11 [&_[data-slot=slider-thumb]]:after:-inset-4">
        <span className="shrink-0" style={META}>글자 크기</span>
        <Slider
          aria-label="글자 크기"
          value={[fontScale]}
          onValueChange={(v) => setFontScale(Array.isArray(v) ? v[0] : v)}
          min={0.85}
          max={1.3}
          step={0.05}
          className="w-full"
        />
      </div>

      <Prose>
        {article.body.map((p, i) => (
          <React.Fragment key={i}>
            <p
              style={{
                color: "var(--semantic-fg-neutral-default)",
                fontSize: `calc(var(--semantic-text-body) * ${fontScale})`,
                lineHeight: "var(--semantic-line-height-relaxed)",
              }}
            >
              {p}
            </p>
            {i === 0 ? (
              <Marker>
                <Marker.Icon><BookmarkCheck size={14} aria-hidden /></Marker.Icon>
                <Marker.Content>여기까지 읽었어요 · 3분 전</Marker.Content>
              </Marker>
            ) : null}
          </React.Fragment>
        ))}
      </Prose>

      {/* 내 노트 카드를 본문 아래에 배치. 데스크탑의 옆 칸을 세로로 쌓기 위함 */}
      <div
        className="flex flex-col gap-(--semantic-space-xs)"
        style={{
          background: "var(--semantic-bg-brand-subtle)",
          border: "var(--semantic-border-width-default) solid var(--semantic-border-brand-subtle)",
          borderRadius: "var(--semantic-radius-container)",
          padding: "var(--component-card-padding)",
        }}
      >
        <span style={{ ...META, color: "var(--semantic-fg-brand-default)" }}>내 노트</span>
        <p style={{ margin: 0, color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-body-sm)" }}>
          다음에 다시 읽을 때 이 글의 결론부터 비교해 볼 것.
        </p>
      </div>

      {/* 독자 만족도는 한 문항이라 제출 버튼만 배치 */}
      {surveyDone ? (
        <p style={{ margin: 0, color: "var(--semantic-fg-success-default)", fontSize: "var(--semantic-text-body-sm)" }}>
          응답 고마워요.
        </p>
      ) : (
        <Questionnaire onSubmit={(e) => { e.preventDefault(); setSurveyDone(true); }}>
          <Questionnaire.Item name="helpful" required>
            <Questionnaire.Title>이 글이 도움이 됐나요?</Questionnaire.Title>
            <Questionnaire.Choices>
              <Questionnaire.Choice value="yes">도움이 됐어요</Questionnaire.Choice>
              <Questionnaire.Choice value="no">아니요</Questionnaire.Choice>
            </Questionnaire.Choices>
            <Questionnaire.Actions>
              <Questionnaire.Submit>보내기</Questionnaire.Submit>
            </Questionnaire.Actions>
          </Questionnaire.Item>
        </Questionnaire>
      )}

      {/* 댓글 목록을 Messagescroller 안에 배치. 댓글이 늘어나도 읽던 위치를 유지하기 위함 */}
      <div className="flex flex-col gap-(--semantic-space-sm)">
        <h3 style={{ margin: 0, fontSize: "var(--semantic-text-body)", color: "var(--semantic-fg-neutral-default)" }}>
          댓글 {COMMENTS.length}
        </h3>
        <Messagescroller.Provider>
          <Messagescroller className="relative h-60 rounded-[var(--semantic-radius-container)] border border-[var(--semantic-border-neutral-subtle)]">
            <Messagescroller.Viewport>
              <Messagescroller.Content className="flex flex-col gap-(--semantic-space-sm) p-(--semantic-space-sm)">
                {COMMENTS.map((c) => (
                  <Messagescroller.Item key={c.id} messageId={c.id}>
                    <Message.Group>
                      <Message>
                        <Message.Avatar>
                          <img
                            src={c.avatar}
                            alt=""
                            aria-hidden
                            className="size-7 object-cover"
                            style={{ borderRadius: "var(--semantic-radius-pill)" }}
                          />
                        </Message.Avatar>
                        <Message.Header className="w-fit whitespace-nowrap">{c.name} · {c.at}</Message.Header>
                        <Message.Content>
                          {"text" in c ? (
                            <Bubble align="start">
                              <Bubble.Content>{c.text}</Bubble.Content>
                            </Bubble>
                          ) : (
                            <Attachment state="done" size="sm" style={{ width: "16rem", maxWidth: "100%" }}>
                              <Attachment.Media variant="icon"><Paperclip size={14} aria-hidden /></Attachment.Media>
                              <Attachment.Content>
                                <Attachment.Title>{c.file}</Attachment.Title>
                                <Attachment.Description>{c.size}</Attachment.Description>
                              </Attachment.Content>
                            </Attachment>
                          )}
                        </Message.Content>
                      </Message>
                    </Message.Group>
                  </Messagescroller.Item>
                ))}
              </Messagescroller.Content>
            </Messagescroller.Viewport>
            <Messagescroller.Button
              direction="end"
              className="absolute bottom-2 end-2 rounded-full bg-[var(--semantic-bg-neutral-surface)]"
            >
              ↓
            </Messagescroller.Button>
          </Messagescroller>
        </Messagescroller.Provider>

        <Inputgroup
          prefix={<MessageCircle size={14} aria-hidden />}
          suffix={
            <Inputgroup.Button aria-label="댓글 보내기">
              <Send size={14} aria-hidden />
            </Inputgroup.Button>
          }
          placeholder="댓글을 남겨보세요"
        />
      </div>
    </div>
  );
}
