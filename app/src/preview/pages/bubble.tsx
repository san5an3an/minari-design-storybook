import { Kid, Kids, Master, compound } from "../Doc";
import type { Condition } from "../PropsTable";
import type { BubbleImpl } from "../../systems/props";
import type { PageProps } from "./types";

const VARIANTS = [
  "default", "secondary", "muted", "tinted", "outline", "ghost", "destructive",
] as const;

export function Page({ system }: PageProps) {
  const Bubble = compound<BubbleImpl>(system, "bubble");
  return (
    <>
      {/* 공식 BubbleDemo, 내 메시지 default/end, 상대 그룹 muted, 반응 */}
      <Master note="보낸 쪽은 default + align=end, 받은 쪽은 muted 예요. 색이 아니라 정렬이 보낸 이를 갈라요.">
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", width: "100%" }}>
          <Bubble align="end">
            <Bubble.Content>안녕하세요, 잘 지내셨어요?</Bubble.Content>
          </Bubble>
          <Bubble.Group>
            <Bubble variant="muted">
              <Bubble.Content>네! 말풍선 한번 보실래요?</Bubble.Content>
            </Bubble>
            <Bubble variant="muted">
              <Bubble.Content>
                묶을 수도 있고 좌우를 바꿀 수도 있어서 대화 전체를 훑기 쉬워요.
              </Bubble.Content>
              <Bubble.Reactions role="img" aria-label="반응: 좋아요">
                <span>👍</span>
              </Bubble.Reactions>
            </Bubble>
          </Bubble.Group>
          <Bubble align="end">
            <Bubble.Content>좋아요. 제일 잘 나온 걸로 보여 주세요.</Bubble.Content>
          </Bubble>
          <Bubble variant="muted">
            <Bubble.Content>지금 보고 계신 게 바로 그거예요.</Bubble.Content>
            <Bubble.Reactions role="img" aria-label="반응: 좋아요, 불꽃, 눈, 외 2개">
              <span>👍</span>
              <span>🔥</span>
              <span>👀</span>
              <span>+2</span>
            </Bubble.Reactions>
          </Bubble>
        </div>
      </Master>

      <Kids
        axis="variant"
        note="색을 고르는 게 아니라 말이 얼마나 앞에 드러나는지를 골라요. ghost 는 상자를 버리고 폭 상한도 풀려요(max-w-full)."
      >
        {VARIANTS.map((v) => (
          <Kid key={v} label={v}>
            <Bubble variant={v}>
              <Bubble.Content>이만큼 앞에 서요</Bubble.Content>
            </Bubble>
          </Kid>
        ))}
      </Kids>

      <Kids axis="align" note="보낸 이를 가르는 건 색이 아니라 이 축이에요.">
        <Kid label="start" hint="기본">
          <Bubble variant="muted" align="start">
            <Bubble.Content>받은 말이에요</Bubble.Content>
          </Bubble>
        </Kid>
        <Kid label="end">
          <Bubble align="end">
            <Bubble.Content>보낸 말이에요</Bubble.Content>
          </Bubble>
        </Kid>
      </Kids>

      <Kids
        axis="parts"
        title="Reactions"
        note="흐름 안에 있지 않아요. 말풍선 변에 겹쳐 놓이고, 뒤를 도려내는 고리(ring)로 떨어져 보여요."
      >
        <Kid label="side=bottom" hint="align=end · 기본">
          <div style={{ paddingBlock: "1rem" }}>
            <Bubble variant="muted">
              <Bubble.Content>이번 주 안에 마무리해요.</Bubble.Content>
              <Bubble.Reactions role="img" aria-label="반응: 좋아요 3명">
                <span>👍 3</span>
              </Bubble.Reactions>
            </Bubble>
          </div>
        </Kid>
        <Kid label="side=top" hint="align=start">
          <div style={{ paddingBlock: "1rem" }}>
            <Bubble variant="muted">
              <Bubble.Content>위쪽에도 걸 수 있어요.</Bubble.Content>
              <Bubble.Reactions side="top" align="start" role="img" aria-label="반응: 눈">
                <span>👀</span>
              </Bubble.Reactions>
            </Bubble>
          </div>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "보낸 이를 나눌 때", then: <>색만으로 하지 마세요. <b>align</b> 과 이름이 함께 있어야 해요.</> },
  { when: "반응을 붙일 때", then: <>이름을 <b>위치 자체</b>에 붙여요. 그림 문자 하나하나가 아니라요.</> },
  { when: "같은 사람이 잇달아 말할 때", then: <><b>Group</b> 으로 묶고 이름·시각은 한 번만 적어요.</> },
  { when: "누가 언제 말했는지가 필요할 때", then: <>이게 아니라 <b>Message</b> 예요.</> },
];
