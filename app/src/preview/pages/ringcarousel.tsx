import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { RingcarouselProps } from "../../systems/props";
import type { PageProps } from "./types";

const ITEMS = [
  { id: "aurora", label: "Aurora" },
  { id: "basalt", label: "Basalt" },
  { id: "cinder", label: "Cinder" },
  { id: "dune", label: "Dune" },
  { id: "ember", label: "Ember" },
  { id: "flint", label: "Flint" },
  { id: "glacier", label: "Glacier" },
  { id: "harbor", label: "Harbor" },
];

export function Page({ system }: PageProps) {
  const Ring = impl<RingcarouselProps>(system, "ringcarousel");

  return (
    <>
      <Master
        note={
          <>
            굴리거나 끌어서 돌려요. 손을 떼면 가장 가까운 셀에 앉아요. 커서를 가져가면 그
            아래 표면이 <b>물러져요.</b>
          </>
        }
      >
        <div style={{ blockSize: "22rem", inlineSize: "100%" }}>
          <Ring items={ITEMS} />
        </div>
      </Master>

      <Kids
        axis="viscosity"
        title="점성"
        note={
          <>
            <code>--component-ringcarousel-viscosity</code> <b>하나가 이 컴포넌트의 정체예요.</b>{" "}
            0 이면 카드가 그냥 가까워졌다 멀어지고, 키우면 <b>붙었다 실을 끌며</b> 떨어져요.
            같은 코드에 이 값만 다르게 준 거예요.
          </>
        }
      >
        {[
          ["0rem", "없음", "그냥 도는 사각형이에요"],
          ["0.875rem", "기본", undefined],
          ["2rem", "진하게", "떨어지지 않고 계속 엉겨요"],
        ].map(([v, label, hint]) => (
          <Kid key={v} label={label!} hint={hint}>
            <div
              style={{
                blockSize: "12rem",
                inlineSize: "100%",
                ["--component-ringcarousel-viscosity" as string]: v,
              }}
            >
              <Ring items={ITEMS.slice(0, 6)} />
            </div>
          </Kid>
        ))}
      </Kids>

      <Kids
        axis="color"
        title="색"
        note={
          <>
            셰이더에 색을 <b>박지 않았어요.</b> <code>getComputedStyle</code> 로 토큰을 읽어
            유니폼에 넣고, <code>data-theme</code> 이 바뀌면 다시 읽어요. 그래서 <b>색 20종 ×
            라이트/다크</b>가 그대로 따라와요. 아래는 같은 컴포넌트에 토큰만 덮어쓴 거예요.
          </>
        }
      >
        <Kid label="시스템 값" hint="기본">
          <div style={{ blockSize: "12rem", inlineSize: "100%" }}>
            <Ring items={ITEMS.slice(0, 6)} />
          </div>
        </Kid>
        <Kid label="뒤집기" hint="page ↔ plane">
          <div
            style={{
              blockSize: "12rem",
              inlineSize: "100%",
              ["--component-ringcarousel-page" as string]:
                "var(--component-ringcarousel-plane)",
              ["--component-ringcarousel-plane" as string]:
                "var(--semantic-bg-neutral-subtlest)",
            }}
          >
            <Ring items={ITEMS.slice(0, 6)} />
          </div>
        </Kid>
        <Kid label="브랜드" hint="패널만 브랜드색으로">
          <div
            style={{
              blockSize: "12rem",
              inlineSize: "100%",
              ["--component-ringcarousel-plane" as string]:
                "var(--semantic-bg-brand-default)",
            }}
          >
            <Ring items={ITEMS.slice(0, 6)} />
          </div>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "내용을 넘겨 보여주고 싶을 때",
    then: (
      <>
        링이 아니라 <b>Carousel</b> 이에요. 여기서 일어나는 일은 <b>덩어리가 갈라지는 것</b>
        이지 다음 항목을 알리는 게 아니에요. 읽을 것이 있으면 버튼이 있는 쪽을 쓰세요.
      </>
    ),
  },
  {
    when: "여기서만 볼 수 있는 정보를 넣고 싶을 때",
    then: (
      <>
        넣지 마세요. 링은 <b>순전히 그림</b>이라 WebGL 이 없거나 모션을 줄인 사용자에게는
        목록으로 대신 렌더링돼요. 그 목록에 담기지 않는 것은 <b>그 사람에게는 없는 것</b>이에요.
      </>
    ),
  },
  {
    when: "셰이더에 색을 직접 쓰고 싶을 때",
    then: (
      <>
        토큰을 읽으세요. 색을 박으면 <b>20종 중 19종이 거짓</b>이 되고, 다크 모드에서 배경과
        패널이 같은 색이 돼요.
      </>
    ),
  },
  {
    when: "항목이 아주 많을 때",
    then: (
      <>
        <b>16개까지</b>예요. 셰이더 유니폼 배열의 한계예요. 그보다 많으면 카드가 겹쳐서
        어차피 하나의 덩어리로 보여요.
      </>
    ),
  },
];
