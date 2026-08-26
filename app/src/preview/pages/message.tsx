import { Kid, Kids, Master, compound } from "../Doc";
import type { Condition } from "../PropsTable";
import type { AvatarImpl, BubbleImpl, MarkerImpl, MessageImpl } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Message = compound<MessageImpl>(system, "message");
  const Bubble = compound<BubbleImpl>(system, "bubble");
  const Avatar = compound<AvatarImpl>(system, "avatar");
  const Marker = system.impl.marker
    ? compound<MarkerImpl>(system, "marker")
    : null;

  const face = (who: string) => (
    <Message.Avatar>
      <Avatar fallback={who} alt={who} />
    </Message.Avatar>
  );

  return (
    <>
      <Master note="말풍선만 있으면 Bubble 이고, 얼굴·시각·상태가 붙으면 Message 예요. 얼굴 자리 안에는 공식 Avatar 를 넣어요. 사진을 직접 그리면 불러오기 실패가 빈 칸이 돼요.">
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", width: "100%" }}>
          <Message align="end">
            {face("나")}
            <Message.Content>
              <Bubble>
                <Bubble.Content>잠깐 배포 좀 할게요.</Bubble.Content>
              </Bubble>
            </Message.Content>
          </Message>
          <Message>
            {face("하")}
            <Message.Content>
              <Bubble variant="muted">
                <Bubble.Content>지금 금요일 오후 4시 55분이에요.</Bubble.Content>
              </Bubble>
            </Message.Content>
          </Message>
          <Message align="end">
            {face("나")}
            <Message.Content>
              <Bubble>
                <Bubble.Content>한 줄짜리 수정이라서요.</Bubble.Content>
              </Bubble>
              <Message.Footer>전달됨</Message.Footer>
            </Message.Content>
          </Message>
          <Message>
            {face("하")}
            <Message.Content>
              <Bubble.Group>
                <Bubble variant="muted">
                  <Bubble.Content>늘 한 줄짜리 수정이죠 😭</Bubble.Content>
                </Bubble>
                <Bubble variant="muted">
                  <Bubble.Content>알겠어요, 제가 볼게요.</Bubble.Content>
                  <Bubble.Reactions role="img" aria-label="반응: 좋아요">
                    <span>👍</span>
                  </Bubble.Reactions>
                </Bubble>
              </Bubble.Group>
            </Message.Content>
          </Message>
          {Marker ? (
            <Marker role="status">
              <Marker.Content>배포를 준비하고 있어요</Marker.Content>
            </Marker>
          ) : null}
        </div>
      </Master>

      <Kids
        axis="align"
        note="end 면 줄이 뒤집히고(flex-row-reverse) 내용 안의 조각들도 끝쪽으로 몰려요. 머리도 함께 가요. 공식 문서 산문과 달리 설치본은 그렇게 동작해요."
      >
        <Kid label="start">
          <Message align="start">
            {face("하")}
            <Message.Content>
              <Message.Header>김하늘</Message.Header>
              <Bubble variant="muted">
                <Bubble.Content>받은 말이에요</Bubble.Content>
              </Bubble>
            </Message.Content>
          </Message>
        </Kid>
        <Kid label="end">
          <Message align="end">
            {face("나")}
            <Message.Content>
              <Message.Header>나</Message.Header>
              <Bubble>
                <Bubble.Content>보낸 말이에요</Bubble.Content>
              </Bubble>
              <Message.Footer>읽음</Message.Footer>
            </Message.Content>
          </Message>
        </Kid>
      </Kids>

      <Kids
        axis="parts"
        title="Footer"
        note="바닥이 붙으면 얼굴이 2rem 올라가요. 그래야 얼굴이 상태 줄이 아니라 말풍선 면에 렌더링돼요. 이것도 그쪽이 하는 일이에요."
      >
        <Kid label="바닥 없음">
          <Message>
            {face("하")}
            <Message.Content>
              <Bubble variant="muted">
                <Bubble.Content>얼굴이 말풍선 아래에 서요</Bubble.Content>
              </Bubble>
            </Message.Content>
          </Message>
        </Kid>
        <Kid label="바닥 있음" hint="얼굴이 올라가요">
          <Message>
            {face("하")}
            <Message.Content>
              <Bubble variant="muted">
                <Bubble.Content>얼굴이 상태 줄을 피해 올라가요</Bubble.Content>
              </Bubble>
              <Message.Footer>오후 2:16</Message.Footer>
            </Message.Content>
          </Message>
        </Kid>
      </Kids>

      <Kids
        axis="parts"
        title="Group"
        note="같은 사람이 잇달아 한 말은 묶어요. 공식 데모는 Message 안에서 Bubble.Group 으로 묶어요. 얼굴과 줄은 하나이고 말만 여럿이에요."
      >
        <Kid label="Bubble.Group" hint="얼굴은 하나">
          <Message>
            {face("하")}
            <Message.Content>
              <Bubble.Group>
                <Bubble variant="muted">
                  <Bubble.Content>자료 정리했어요</Bubble.Content>
                </Bubble>
                <Bubble variant="muted">
                  <Bubble.Content>표는 두 장으로 나눴고요</Bubble.Content>
                </Bubble>
              </Bubble.Group>
            </Message.Content>
          </Message>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "얼굴을 넣을 때", then: <>위치 안에 <b>Avatar</b> 를 넣어요. <code>&lt;img&gt;</code> 로 직접 그리면 실패가 빈 필드가 돼요.</> },
  { when: "바닥이 있을 때", then: <>얼굴이 <b>2rem</b> 올라가요. 그쪽이 하는 일이라 이 프로젝트가 또 맞추지 않아요.</> },
  { when: "align=end", then: <>줄이 뒤집히고 내용 조각들도 끝쪽으로 가요. <b>머리도 함께</b> 가요.</> },
  { when: "잇달아 말할 때", then: <>Message 안에서 <b>Bubble.Group</b> 으로 묶어요. 줄과 얼굴은 하나예요.</> },
  { when: "말만 필요할 때", then: <>이게 아니라 <b>Bubble</b> 이에요.</> },
];
