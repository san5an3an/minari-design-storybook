import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { PageHeaderProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const PageHeader = impl<PageHeaderProps>(system, "pageheader");
  const Button = impl<{ variant?: string; tone?: string; children?: React.ReactNode }>(
    system, "button",
  );
  const Badge = impl<{ variant?: string; tone?: string; children?: React.ReactNode }>(
    system, "badge",
  );

  return (
    <>
      <Master note="화면에 h1 은 하나예요. 머리말이 그 자리를 가져요.">
        <div style={{ width: "100%" }}>
          <PageHeader
            title="결제 수단"
            lede="등록한 카드와 계좌를 관리해요. 기본 수단은 하나만 둘 수 있어요."
            meta={<Badge tone="success">인증됨</Badge>}
            actions={
              <Button variant="solid" tone="brand">
                카드 추가
              </Button>
            }
          />
        </div>
      </Master>

      <Kids axis="parts" title="Parts">
        <Kid label="title 만">
          <div style={{ flex: 1 }}>
            <PageHeader title="결제 수단" />
          </div>
        </Kid>
        <Kid label="+ lede">
          <div style={{ flex: 1 }}>
            <PageHeader title="결제 수단" lede="등록한 카드와 계좌를 관리해요." />
          </div>
        </Kid>
        <Kid label="+ actions">
          <div style={{ flex: 1 }}>
            <PageHeader
              title="결제 수단"
              actions={
                <Button variant="solid" tone="brand">
                  카드 추가
                </Button>
              }
            />
          </div>
        </Kid>
        <Kid label="+ meta">
          <div style={{ flex: 1 }}>
            <PageHeader title="결제 수단" meta={<Badge tone="success">인증됨</Badge>} />
          </div>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "동작이 주인공일 때",
    then: (
      <>
        <b>Toolbar</b> 예요. 툴바는 제목이 없어도 서요.
      </>
    ),
  },
  {
    when: "한 화면에 둘 이상 둘 때",
    then: <>두지 않아요. h1 이 둘이 되면 화면의 주인공이 사라져요.</>,
  },
  {
    when: "동작이 셋을 넘을 때",
    then: (
      <>
        주된 것 하나만 남기고 나머지는 <b>Menu</b> 로 접어요.
      </>
    ),
  },
];
