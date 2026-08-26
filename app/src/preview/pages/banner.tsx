import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { BannerProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Banner = impl<BannerProps>(system, "banner");
  const Button = impl<{ variant?: string; tone?: string; children?: React.ReactNode }>(
    system, "button",
  );

  return (
    <>
      <Master note="화면 전체에 걸리는 알림이에요. 그래서 한 번에 하나만 둬요.">
        <div style={{ width: "100%" }}>
          <Banner
            title="점검 예정"
            actions={
              <Button variant="subtle" tone="neutral">
                자세히
              </Button>
            }
          >
            8월 21일 새벽 2시부터 4시까지 서비스를 쓸 수 없어요.
          </Banner>
        </div>
      </Master>

      <Kids
        axis="soft"
        note="soft 는 배경을 낮춰요. 급하지 않은 소식에 써요. 급한 것을 낮추면 묻혀요."
      >
        <Kid label="false" hint="기본">
          <div style={{ flex: 1 }}>
            <Banner title="점검 예정">8월 21일 새벽에 점검이 있어요.</Banner>
          </div>
        </Kid>
        <Kid label="true">
          <div style={{ flex: 1 }}>
            <Banner soft title="새 기능">보고서를 내려받을 수 있게 됐어요.</Banner>
          </div>
        </Kid>
      </Kids>

      <Kids axis="parts" title="Parts">
        <Kid label="title 없음">
          <div style={{ flex: 1 }}>
            <Banner soft>제목 없이 한 줄만 둘 수도 있어요.</Banner>
          </div>
        </Kid>
        <Kid label="actions">
          <div style={{ flex: 1 }}>
            <Banner
              soft
              actions={
                <Button variant="subtle" tone="neutral">
                  다시 안 보기
                </Button>
              }
            >
              동작을 붙일 수 있어요.
            </Banner>
          </div>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "관련된 내용 옆에 붙일 때",
    then: (
      <>
        <b>Alert</b> 예요. 배너는 화면 전체에 걸리는 소식이에요.
      </>
    ),
  },
  {
    when: "한 화면에 둘 이상 필요할 때",
    then: <>하나로 합쳐요. 둘이 겹치면 어느 것이 더 급한지 알 수 없어요.</>,
  },
];
