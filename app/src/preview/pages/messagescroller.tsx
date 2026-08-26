import type { ReactNode } from "react";
import {
  ArrowUp, Globe, Image as ImageIcon, Paperclip, Plus, RotateCw, Telescope,
} from "lucide-react";
import { Kid, Kids, Master, compound } from "../Doc";
import type { Condition } from "../PropsTable";
import type {
  AvatarImpl, BubbleImpl, InputgroupImpl, MenuProps, MessageImpl,
  MessagescrollerImpl,
} from "../../systems/props";
import type { PageProps } from "./types";

// 높이 고정 영역 지정. 없으면 미리보기가 컴포넌트를 표시할 수 없음
function Frame({ height, children }: { height: string; children: ReactNode }) {
  return <div style={{ height, width: "100%", minWidth: 0 }}>{children}</div>;
}

const THREAD = [
  { id: "m1", me: true, text: "대화 스크롤이 자꾸 튀어서요. 답이 올 때마다 화면이 흔들려요." },
  { id: "m2", me: false, text: "이미 맨 아래에 있을 때만 따라가게 돼 있어요. 위를 읽는 중이면 그대로 둬요." },
  { id: "m3", me: true, text: "새 메시지를 보낼 때도 화면이 통째로 다시 그려지는 느낌이에요." },
  { id: "m4", me: false, text: "그건 차례에 닻을 걸어서 풀어요. 앞 차례가 조금 보이게 남겨 두고요." },
  { id: "m5", me: true, text: "위로 올려서 예전 답을 다시 읽는 중이면요?" },
  { id: "m6", me: false, text: "끌어내리지 않아요. 맨 아래에 있을 때만 따라가니까요." },
];

export function Page({ system }: PageProps) {
  const MessageScroller = compound<MessagescrollerImpl>(system, "messagescroller");
  const Message = compound<MessageImpl>(system, "message");
  const Bubble = compound<BubbleImpl>(system, "bubble");
  const Avatar = compound<AvatarImpl>(system, "avatar");
  const InputGroup = compound<InputgroupImpl>(system, "inputgroup");
  const Menu = system.impl.menu as React.ComponentType<MenuProps>;
  const Card = system.impl.card;
  const Button = system.impl.button;

  const thread = THREAD.map((m) => (
    <MessageScroller.Item key={m.id} messageId={m.id} scrollAnchor={m.me}>
      <Message align={m.me ? "end" : "start"}>
        <Message.Avatar>
          <Avatar fallback={m.me ? "나" : "하"} alt={m.me ? "나" : "하늘"} />
        </Message.Avatar>
        <Message.Content>
          <Bubble variant={m.me ? undefined : "muted"} align={m.me ? "end" : "start"}>
            <Bubble.Content>{m.text}</Bubble.Content>
          </Bubble>
        </Message.Content>
      </Message>
    </MessageScroller.Item>
  ));

  // 작성 행. CardFooter 구현 방식 재사용
  const composer = (
    <form className="w-full" onSubmit={(e) => e.preventDefault}>
      <InputGroup
        multiline
        placeholder="무엇이든 물어보세요"
        aria-label="메시지"
        blockEnd={
          <>
            <Menu
              side="top"
              align="start"
              trigger={
                <InputGroup.Button
                  type="button"
                  size="icon-sm"
                  variant="outline"
                  aria-label="파일 추가"
                >
                  <Plus />
                </InputGroup.Button>
              }
              items={[
                { label: <><Paperclip /> 사진·파일 추가</> },
                { separator: true },
                { label: <><ImageIcon /> 이미지 만들기</> },
                { label: <><Telescope /> 깊이 조사</> },
                { label: <><Globe /> 웹 검색</> },
              ]}
            />
            <InputGroup.Button
              type="submit"
              size="icon-sm"
              variant="default"
              className="ml-auto"
              aria-label="보내기"
            >
              <ArrowUp />
            </InputGroup.Button>
          </>
        }
      />
    </form>
  );

  const scroller = (
    height: string,
    provider?: { autoScroll?: boolean; defaultScrollPosition?: "start" | "end" | "last-anchor" },
    direction?: "start" | "end",
  ) => (
    <Frame height={height}>
      <MessageScroller.Provider {...provider}>
        <MessageScroller>
          <MessageScroller.Viewport>
            <MessageScroller.Content>{thread}</MessageScroller.Content>
          </MessageScroller.Viewport>
          <MessageScroller.Button direction={direction} />
        </MessageScroller>
      </MessageScroller.Provider>
    </Frame>
  );

  return (
    <>
      <Master note="공식 데모 그대로예요. 스크롤 컨테이너만이 아니라 작성 줄(입력·첨부·보내기)까지 한 벌이에요. 첨부 메뉴는 위로 열려요. 아래로 열면 화면 밖으로 나가거든요.">
        <MessageScroller.Provider>
          <Card
            className="w-full max-w-md"
            title="새 대화"
            description="무엇을 도와드릴까요?"
            action={
              <Button variant="outline" size="sm" aria-label="대화 초기화">
                <RotateCw />
              </Button>
            }
            footer={composer}
          >
            <Frame height="19rem">
              <MessageScroller>
                <MessageScroller.Viewport>
                  <MessageScroller.Content>{thread}</MessageScroller.Content>
                </MessageScroller.Viewport>
                <MessageScroller.Button />
              </MessageScroller>
            </Frame>
          </Card>
        </MessageScroller.Provider>
      </Master>

      <Kids
        axis="parts"
        title="작성 줄"
        note="입력은 여러 줄(InputGroupTextarea)이에요. 위아래로 붙는 부분은 한 줄을 통째로 쓰기 때문에 한 줄짜리 필드에선 위치가 안 나와요."
      >
        <Kid label="InputGroup" hint="blockEnd 에 첨부·보내기">
          <div className="w-full max-w-md">{composer}</div>
        </Kid>
      </Kids>

      <Kids
        axis="autoScroll"
        note="이미 맨 아래에 있을 때만 따라가요. 위를 읽는 중에 끌어내리면 읽던 줄을 빼앗는 거예요."
      >
        <Kid label="false" hint="기본">{scroller("13rem")}</Kid>
        <Kid label="true" hint="맨 아래일 때만">{scroller("13rem", { autoScroll: true })}</Kid>
      </Kids>

      <Kids
        axis="defaultScrollPosition"
        note="처음 열었을 때 어디를 보여 줄지예요. 저장해 둔 대화는 마지막 차례의 첫 줄부터 보여 주는 게 읽기 쉬워요."
      >
        {(["end", "start", "last-anchor"] as const).map((pos) => (
          <Kid key={pos} label={pos} hint={pos === "end" ? "기본" : undefined}>
            {scroller("11rem", { defaultScrollPosition: pos })}
          </Kid>
        ))}
      </Kids>

      <Kids
        axis="parts"
        title="Button"
        note="가로 가운데에 서요. 방향에 따라 위나 아래에 붙고, 갈 곳이 없으면 지워지는 게 아니라 눌리지 않게 되고 작아지며 투명해져요."
      >
        <Kid label="direction=end" hint="기본, 아래에">{scroller("11rem", undefined, "end")}</Kid>
        <Kid label="direction=start" hint="위에 · 화살표가 뒤집혀요">
          {scroller("11rem", { defaultScrollPosition: "start" }, "start")}
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "굴림틀만 놓을 때", then: <>작성 줄이 없으면 무엇을 위한 틀인지 알 수 없어요. 공식 데모는 한 벌이에요.</> },
  { when: "첨부 메뉴를 열 때", then: <><b>위로</b> 열어요(<code>side=&quot;top&quot;</code>). 아래로 열면 화면 밖이에요.</> },
  { when: "새 말이 붙을 때", then: <><b>이미 맨 아래일 때만</b> 따라가요. 위를 읽는 중이면 그대로 둬요.</> },
  { when: "사람이 움직였을 때", then: <>따라가기를 <b>놓아요</b>. 바퀴·손가락·키보드·직접 이동 모두요.</> },
  { when: "버튼이 갈 곳이 없을 때", then: <>지우지 마세요. 눌리지 않게만 해요. 지우면 전환이 사라져 툭 튀어나와요.</> },
  { when: "부모 높이가 없을 때", then: <>내용만큼 늘어나 넘어갈 위치가 사라져요. 이 컴포넌트가 할 일이 없어져요.</> },
];
