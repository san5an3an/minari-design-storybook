import { Kid, Kids, Master, compound } from "../Doc";
import type { Condition } from "../PropsTable";
import type { CarouselImpl } from "../../systems/props";
import type { PageProps } from "./types";

const TILES = [1, 2, 3, 4, 5];

export function Page({ system }: PageProps) {
  const Carousel = compound<CarouselImpl>(system, "carousel");
  const Card = system.impl.card;

  const items = (basis: string) =>
    TILES.map((n) => (
      <Carousel.Item
        key={n}
        className={basis}
        aria-label={`${n}번째, 모두 ${TILES.length}개`}
      >
        <Card>
          <div style={{ display: "flex", alignItems: "center",
            justifyContent: "center", minHeight: "5rem" }}>{n}</div>
        </Card>
      </Carousel.Item>
    ));

  return (
    <>
      <Master note="이걸 고르는 이유는 모양이 아니라 다음 것이 있다는 사실을 알려야 하기 때문이에요. 그냥 넘치기만 하면 ScrollArea 예요.">
        <div style={{ width: "min(100%, 18rem)", marginInline: "3rem" }}>
          <Carousel>
            <Carousel.Content>{items("basis-full")}</Carousel.Content>
            <Carousel.Previous />
            <Carousel.Next />
          </Carousel>
        </div>
      </Master>

      <Kids
        axis="basis"
        note="한 번에 몇 개를 보일지는 셀의 basis 로 정해요. 캐러셀이 정하는 게 아니에요. 셀이 자기 폭을 말해요."
      >
        <Kid label="basis-full" hint="한 개씩">
          <div style={{ width: "min(100%, 14rem)", marginInline: "3rem" }}>
            <Carousel>
              <Carousel.Content>{items("basis-full")}</Carousel.Content>
              <Carousel.Previous />
              <Carousel.Next />
            </Carousel>
          </div>
        </Kid>
        <Kid label="basis-1/2" hint="두 개씩">
          <div style={{ width: "min(100%, 14rem)", marginInline: "3rem" }}>
            <Carousel>
              <Carousel.Content>{items("basis-1/2")}</Carousel.Content>
              <Carousel.Previous />
              <Carousel.Next />
            </Carousel>
          </div>
        </Kid>
      </Kids>

      <Kids
        axis="orientation"
        note="세로로 미는 건 페이지 굴림과 부딪혀요. 페이지가 세로로 긴 위치에선 쓰지 마세요."
      >
        <Kid label="horizontal" hint="기본">
          <div style={{ width: "min(100%, 12rem)", marginInline: "3rem" }}>
            <Carousel orientation="horizontal">
              <Carousel.Content>{items("basis-full")}</Carousel.Content>
              <Carousel.Previous />
              <Carousel.Next />
            </Carousel>
          </div>
        </Kid>
        <Kid label="vertical">
          <div style={{ width: "min(100%, 12rem)", margin: "3rem auto" }}>
            <Carousel orientation="vertical">
              <Carousel.Content className="h-[9rem]">
                {items("basis-full")}
              </Carousel.Content>
              <Carousel.Previous />
              <Carousel.Next />
            </Carousel>
          </div>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "자동으로 넘기고 싶을 때", then: <>하지 마세요. 읽던 걸 빼앗고, 손이 느린 사람은 목표를 놓쳐요.</> },
  { when: "끝에 닿았을 때", then: <>버튼이 스스로 꺼져요. 다시 판단하지 마세요.</> },
  { when: "영역에 이름을 붙일 때", then: <>몇 번째인지 넣어요. 안 그러면 안 보이는 영역은 없는 게 돼요.</> },
  { when: "꼭 봐야 하는 것", then: <>여기 숨기지 마세요. 첫 영역 말곤 대부분 안 보여요.</> },
  { when: "다음 걸 알릴 필요가 없을 때", then: <>이게 아니라 <b>ScrollArea</b> 예요.</> },
];
