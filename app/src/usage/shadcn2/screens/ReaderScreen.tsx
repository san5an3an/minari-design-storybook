import * as React from "react";
import {
  ArrowLeft, Bookmark, BookmarkCheck, Clock, MessageCircle, Paperclip, Send,
} from "lucide-react";
import { Attachment } from "../../../bases/shadcn/Attachment";
import { Badge } from "../../../bases/shadcn/Badge";
import { Bubble } from "../../../bases/shadcn/Bubble";
import { Button } from "../../../bases/shadcn/Button";
import { Inputgroup } from "../../../bases/shadcn/Inputgroup";
import { Marker } from "../../../bases/shadcn/Marker";
import { Message } from "../../../bases/shadcn/Message";
import { Messagescroller } from "../../../bases/shadcn/Messagescroller";
import { Prose } from "../../../bases/shadcn/Prose";
import { Questionnaire } from "../../../bases/shadcn/Questionnaire";
import { Resizable } from "../../../bases/shadcn/Resizable";
import { Slider } from "../../../bases/shadcn/Slider";
import { Toggle } from "../../../bases/shadcn/Toggle";
import { Tooltip } from "../../../bases/shadcn/Tooltip";
import { ARTICLES, TAG_IMAGE, TAG_TONE } from "../data";
import type { ScreenProps } from "../screens";

const COMMENTS = [
  {
    id: "cm1",
    name: "민서",
    at: "1시간 전",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=60",
    text: "이 글 덕분에 습관을 바꿨어요, 도움이 많이 됐어요.",
  },
  {
    id: "cm2",
    name: "도윤",
    at: "30분 전",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=80&q=60",
    file: "관련 연구노트.pdf",
    size: "128KB",
  },
] as const;

export function ReaderScreen({ itemId, onOpen }: ScreenProps) {
  const article = ARTICLES.find((a) => a.id === itemId) ?? ARTICLES[0];
  const [fontScale, setFontScale] = React.useState(1);
  const [bookmarked, setBookmarked] = React.useState(true);
  const [surveyDone, setSurveyDone] = React.useState(false);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between gap-3">
        <Tooltip content="목록으로 돌아가기">
          <Button variant="plain" onClick={ => onOpen?.("list", "")}>
            <ArrowLeft size={14} aria-hidden />
            목록으로
          </Button>
        </Tooltip>
        <Toggle pressed={bookmarked} onPressedChange={setBookmarked} aria-label="북마크">
          <Bookmark size={14} fill={bookmarked ? "currentColor" : "none"} />
        </Toggle>
      </div>

      <div className="flex items-center gap-3">
        <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>
          글자 크기
        </span>
        <Slider
          value={[fontScale]}
          onValueChange={(v) => setFontScale(Array.isArray(v) ? v[0] : v)}
          min={0.85}
          max={1.3}
          step={0.05}
          className="max-w-40"
        />
      </div>

      {/* 표지 사진. 태그별로 다른 이미지 사용, 목록과 컬렉션도 동일 사진으로 태그 소속 확인 */}
      <img
        src={TAG_IMAGE[article.tag]}
        alt=""
        aria-hidden
        className="w-full object-cover"
        style={{ height: "10rem", borderRadius: "var(--semantic-radius-container)" }}
      />

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Badge variant="subtle" tone={TAG_TONE[article.tag] ?? "neutral"}>{article.tag}</Badge>
          <span
            className="flex items-center gap-1"
            style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}
          >
            <Clock size={12} aria-hidden />
            {article.minutes}분 · {article.source}
          </span>
        </div>
        <h2
          style={{
            color: "var(--semantic-fg-neutral-default)",
            fontSize: "var(--semantic-text-heading-lg)",
            letterSpacing: "var(--semantic-tracking-heading-lg)",
            lineHeight: "var(--semantic-line-height-tight)",
          }}
        >
          {article.title}
        </h2>
      </div>

      {/* 본문, 노트 영역 경계 드래그로 크기 조정 */}
      <Resizable
        orientation="horizontal"
        defaultSize={70}
        minSize={500}
        style={{ height: "18rem" }}
        start={
          <div className="h-full overflow-y-auto pe-3">
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
          </div>
        }
        end={
          <div className="flex h-full flex-col gap-2 overflow-y-auto ps-3">
            <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>
              내 노트
            </span>
            <p style={{ color: "var(--semantic-fg-neutral-default)", fontSize: "var(--semantic-text-body-sm)" }}>
              다음에 다시 읽을 때 이 글의 결론부터 비교해 볼 것.
            </p>
          </div>
        }
      />

      {/* 독자 만족도 조사. 질문이 하나뿐이라 이전, 다음 이동 없이 제출 버튼만 배치 */}
      {surveyDone ? (
        <p style={{ color: "var(--semantic-fg-success-default)", fontSize: "var(--semantic-text-body-sm)" }}>
          응답 고마워요.
        </p>
      ) : (
        <Questionnaire
          onSubmit={(e) => { e.preventDefault; setSurveyDone(true); }}
        >
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

      {/* 댓글. 목록이 늘어나는 동안 스크롤 위치를 유지하는 Messagescroller 안에 배치 */}
      <div className="flex flex-col gap-2">
        <span style={{ color: "var(--semantic-fg-neutral-subtle)", fontSize: "var(--semantic-text-caption)" }}>
          댓글 {COMMENTS.length}
        </span>
        <Messagescroller.Provider>
          <Messagescroller className="relative h-56 rounded-[var(--semantic-radius-container)] border border-[var(--semantic-border-neutral-subtle)]">
            <Messagescroller.Viewport>
              <Messagescroller.Content className="flex flex-col gap-3 p-3">
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
                            <Attachment state="done" size="sm" style={{ width: "16rem" }}>
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
