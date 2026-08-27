import { Accordion } from "../../../bases/shadcn/Accordion";
import { Attachment } from "../../../bases/shadcn/Attachment";
import { Button } from "../../../bases/shadcn/Button";
import { Card } from "../../../bases/shadcn/Card";
import { Collapsible } from "../../../bases/shadcn/Collapsible";
import { Kbd } from "../../../bases/shadcn/Kbd";
import { Prose } from "../../../bases/shadcn/Prose";
import { Questionnaire } from "../../../bases/shadcn/Questionnaire";
import { Resizable } from "../../../bases/shadcn/Resizable";
import { Spinner } from "../../../bases/shadcn/Spinner";

const FAQ = [
  {
    value: "export",
    title: "내보낸 파일은 어디서 여나요?",
    body: "HTML 은 브라우저에서 바로 열리고, Next 컴포넌트는 짝인 styles.css 와 함께 두면 됩니다.",
  },
  {
    value: "theme",
    title: "테마를 바꾸면 내보낸 것도 바뀌나요?",
    body: "아니요. 내보낸 순간의 색이 파일 안에 박힙니다. 다른 색이 필요하면 그 색에서 다시 내보냅니다.",
  },
  {
    value: "base",
    title: "베이스를 바꾸면 산출물이 달라지나요?",
    body: "HTML 은 언제나 이 시스템 ods-* 입니다. 베이스는 어느 화면에서 눌렀는가를 남기는 출처일 뿐입니다.",
  },
];

export function Content {
  return (
    <div className="flex flex-col gap-6">
      {/* 긴 글 배경 컨테이너, 태그 유지한 채 간격만 지정 */}
      <Card title="문서" description="안의 태그는 그대로 두고 컨테이너가 간격만 지정">
        <div className="mt-2">
          <Prose>
            <h3>내보내기는 무엇을 하나</h3>
            <p>
              고른 테마의 고른 컴포넌트를 <strong>HTML</strong> 또는{" "}
              <strong>Next 컴포넌트</strong>로 만들어 받습니다. 축 하나가 파일 하나가 되고,
              그 파일 안에서는 그 축만 변합니다.
            </p>
            <ul>
              <li>나머지 축은 선언의 기본값으로 고정합니다.</li>
              <li>조합을 곱하지 않습니다. 곱하면 축별로 나눈 뜻이 사라집니다.</li>
            </ul>
            <p>
              내보내기 창은 <Kbd.Group keys={["Meta", "E"]} /> 로도 열 수 있습니다.
            </p>
          </Prose>
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* 접히는 두 항목 */}
        <Card title="접히는 것" description="하나면 Collapsible, 여러 종류면 Accordion">
          <div className="mt-2 flex flex-col gap-5">
            <Collapsible defaultOpen>
              <Collapsible.Trigger>고급 설정</Collapsible.Trigger>
              <Collapsible.Content>
                <p
                  style={{
                    color: "var(--semantic-fg-neutral-subtle)",
                    fontSize: "var(--semantic-text-body-sm)",
                  }}
                >
                  기본값으로 두어도 됩니다. 바꾸면 이 작업공간에만 적용됩니다.
                </p>
              </Collapsible.Content>
            </Collapsible>

            <Accordion items={FAQ} defaultValue={["export"]} />
          </div>
        </Card>

        <Card title="파일" description="상태가 곧 그 파일이 지금 어디에 있는지임">
          <div className="mt-2 flex flex-col gap-3">
            <Attachment state="done">
              <Attachment.Content>
                <Attachment.Title>2026-08 매출 요약.xlsx</Attachment.Title>
                <Attachment.Description>2.4 MB · 올림 완료</Attachment.Description>
              </Attachment.Content>
            </Attachment>

            <Attachment state="uploading">
              <Attachment.Content>
                <Attachment.Title>지역별 원장.csv</Attachment.Title>
                <Attachment.Description>812 KB · 올리는 중</Attachment.Description>
              </Attachment.Content>
            </Attachment>

            <Attachment state="error">
              <Attachment.Content>
                <Attachment.Title>분기 보고.pdf</Attachment.Title>
                <Attachment.Description>5.1 MB · 크기 한도를 넘었습니다</Attachment.Description>
              </Attachment.Content>
              <Attachment.Actions>
                <Button variant="plain" size="sm">다시 시도</Button>
              </Attachment.Actions>
            </Attachment>

            <div className="flex items-center gap-2 pt-1">
              <Spinner label="동기화 중" />
              <span
                style={{
                  color: "var(--semantic-fg-neutral-subtle)",
                  fontSize: "var(--semantic-text-body-sm)",
                }}
              >
                동기화 중…
              </span>
            </div>
          </div>
        </Card>
      </div>

      {/* 위치 분할 사용 여부 */}
      <Card title="나눠 쓰기" description="가운데를 끌어 넓이 조정">
        <div className="mt-2 h-56">
          <Resizable
            withHandle
            defaultSize={38}
            start={
              <div className="flex h-full items-center justify-center p-4"
                style={{ color: "var(--semantic-fg-neutral-subtle)",
                         fontSize: "var(--semantic-text-body-sm)" }}>
                목록
              </div>
            }
            end={
              <div className="flex h-full items-center justify-center p-4"
                style={{ color: "var(--semantic-fg-neutral-subtle)",
                         fontSize: "var(--semantic-text-body-sm)" }}>
                내용
              </div>
            }
          />
        </div>
      </Card>

      {/* 한 번에 하나씩 묻는 폼 */}
      <Card title="묻기" description="한 번에 하나씩 묻기, 긴 폼을 나누는 방식">
        <div className="mt-2">
          <Questionnaire
            items={[
              { name: "role", required: true, choices: [{ value: "pm" }, { value: "design" }, { value: "dev" }] },
              { name: "size", required: true, choices: [{ value: "1-9" }, { value: "10-49" }, { value: "50+" }] },
            ]}
          >
            <Questionnaire.Progress />

            <Questionnaire.Item name="role">
              <Questionnaire.Title>어떤 일을 하시나요?</Questionnaire.Title>
              <Questionnaire.Description>맞는 첫 화면을 골라 드립니다.</Questionnaire.Description>
              <Questionnaire.Choices>
                <Questionnaire.Choice value="pm">기획</Questionnaire.Choice>
                <Questionnaire.Choice value="design">디자인</Questionnaire.Choice>
                <Questionnaire.Choice value="dev">개발</Questionnaire.Choice>
              </Questionnaire.Choices>
              <Questionnaire.Error />
            </Questionnaire.Item>

            <Questionnaire.Item name="size">
              <Questionnaire.Title>팀 규모는 어떻게 되나요?</Questionnaire.Title>
              <Questionnaire.Choices>
                <Questionnaire.Choice value="1-9">1~9명</Questionnaire.Choice>
                <Questionnaire.Choice value="10-49">10~49명</Questionnaire.Choice>
                <Questionnaire.Choice value="50+">50명 이상</Questionnaire.Choice>
              </Questionnaire.Choices>
              <Questionnaire.Error />
            </Questionnaire.Item>

            {/* 이동 버튼 4개 항상 렌더링. 조건부로 하면 포커스 위치를 잃음 */}
            <Questionnaire.Actions>
              <Questionnaire.Previous />
              <Questionnaire.Skip />
              <Questionnaire.Next />
              <Questionnaire.Submit />
            </Questionnaire.Actions>
          </Questionnaire>
        </div>
      </Card>
    </div>
  );
}
