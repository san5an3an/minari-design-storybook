import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { CardProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Card = impl<CardProps>(system, "card");
  const Button = system.impl.button;

  return (
    <>
      <Master note="컨테이너 하나예요. 모서리·그림자·여백이 전부 이 시스템의 기준에서 나와요.">
        <div style={{ width: "20rem" }}>
          <Card title="이번 달 사용량">
            지난달보다 12% 늘었어요. 자세한 내역은 사용량 화면에서 볼 수 있어요.
          </Card>
        </div>
      </Master>

      <Kids
        axis="interactive"
        note={
          <>
            누를 수 있는 카드는 <b>포커스를 받을 수 있어야</b> 해요. 커서만 바꾸면 마우스를 쓰는
            사람에게만 보여요.
          </>
        }
      >
        <Kid label="false" hint="기본">
          <div style={{ width: "16rem" }}>
            <Card title="읽는 카드">눌러도 아무 일도 안 일어나요.</Card>
          </div>
        </Kid>
        <Kid label="true">
          <div style={{ width: "16rem" }}>
            <Card title="누르는 카드" interactive>
              Tab 키로 포커스가 와요.
            </Card>
          </div>
        </Kid>
      </Kids>

      <Kids axis="parts" title="Parts">
        <Kid label="Title + Body">
          <div style={{ width: "16rem" }}>
            <Card title="제목">본문</Card>
          </div>
        </Kid>
        <Kid label="Body 만">
          <div style={{ width: "16rem" }}>
            <Card>제목 없이 본문만 둘 수도 있어요.</Card>
          </div>
        </Kid>
        <Kid label="+ description">
          <div style={{ width: "16rem" }}>
            <Card title="이번 달 사용량" description="8월 1일부터 지금까지예요.">120,000원</Card>
          </div>
        </Kid>
        <Kid label="+ action" hint="머리 오른쪽">
          <div style={{ width: "16rem" }}>
            <Card title="알림" description="새 글이 오면 알려드려요." action={<Button variant="outline">설정</Button>}>
              지금은 켜져 있어요.
            </Card>
          </div>
        </Kid>
        <Kid label="+ footer">
          <div style={{ width: "16rem" }}>
            <Card title="초대" footer={<Button>보낼게요</Button>}>함께 일할 사람을 부를 수 있어요.</Card>
          </div>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "확인 / 취소 버튼을 붙이고 싶을 때",
    then: (
      <>
        그 쌍은 <b>Dialog</b> 의 것이에요. 카드에 붙이면 흐름을 멈추는 창으로 오인돼요.
      </>
    ),
  },
  {
    when: "카드 전체가 눌리는 링크일 때",
    then: (
      <>
        안에 또 다른 버튼을 넣지 않아요. 겹쳐 놓으면 어느 쪽이 눌렸는지 알 수 없어요.
      </>
    ),
  },
];
