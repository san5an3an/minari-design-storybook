import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { DrawerProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Drawer = impl<DrawerProps>(system, "drawer");
  const Button = system.impl.button;
  return (
    <>
      <Master note="끄는 동작 자체가 조작이에요. 잡을 지점이 보여야 끌 수 있다는 걸 알아요.">
        <Drawer
          trigger={<Button variant="outline">정렬 바꾸기</Button>}
          title="정렬 방식"
          description="무엇을 먼저 볼지 골라요."
          footer={<Button>이걸로 할게요</Button>}
        />
      </Master>

      <Kids axis="usage" title="Usage" note="맺는 버튼을 아래쪽에 둬요. 위로 올리면 한 손으로 잡은 사람은 손을 바꿔 쥐어야 해요.">
        <Kid label="고르기">
          <Drawer
            trigger={<Button variant="outline">공유</Button>}
            title="공유"
            description="어디로 보낼지 골라요."
            footer={<Button>보낼게요</Button>}
          />
        </Kid>
        <Kid label="글만">
          <Drawer trigger={<Button variant="outline">안내</Button>} title="안내" description="아래에서 올라와요." />
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "마우스만 있을 때", then: <>끌기 말고 <b>눌러서도 닫히는 위치</b>를 함께 둬요.</> },
  { when: "밀려 나오기만 할 때", then: <><b>Sheet</b> 예요. 드로어는 끌어서 여닫아요.</> },
  { when: "잡을 지점", then: <>반드시 보여요. 끌기는 화면에 흔적을 남기지 않는 조작이에요.</> },
];
