import { Kid, Kids, Master, compound, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { ToastImpl } from "../../systems/props";
import type { PageProps } from "./types";

// 라이브러리가 아는 다섯 가지 값. 표시는 이 값을 라이브러리가 지정
const TYPES = ["success", "info", "warning", "error", "loading"] as const;

export function Page({ system }: PageProps) {
  const Toast = compound<ToastImpl>(system, "toast");
  const Button = impl<{ variant?: string; onClick?:  => void; children?: React.ReactNode }>(
    system, "button",
  );

  return (
    <>
      {/* 토스트 표시 위치, 화면당 한 번만 배치. 중복 배치 시 토스트 중복 표시 문제 있음 */}
      <Toast.Region />

      <Master note="눌러서 띄워 보세요. 몇 초 뒤 스스로 사라지고, 밀어서 닫을 수도 있어요.">
        <Button
          onClick={ =>
            Toast.show({ title: "저장했어요", description: "8월 20일 오후 6시" })
          }
        >
          띄우기
        </Button>
      </Master>

      <Kids
        axis="type"
        title="Variants"
        note={
          <>
            <b>type</b> 을 주면 표시가 함께 붙어요. 색만으로 알리지 않으려는 거예요. 아는 값은
            다섯이고, 이 시스템이 말하는 <b>danger</b> 는 여기서 <b>error</b> 예요.
          </>
        }
      >
        {TYPES.map((t) => (
          <Kid key={t} label={t}>
            <Button
              variant="outline"
              onClick={ => Toast.show({ title: `${t} 상태예요`, type: t })}
            >
              {t}
            </Button>
          </Kid>
        ))}
      </Kids>

      <Kids
        axis="action"
        title="Action"
        note={
          <>
            동작은 <b>actionProps</b> 로 줘요. 버튼 props 를 통째로 넘기는 위치예요.
            되돌릴 수 있는 일이라면 물어보는 창 대신 여기에 <b>되돌리기</b>를 두는 게 나아요.
          </>
        }
      >
        <Kid label="되돌리기">
          <Button
            variant="outline"
            onClick={ =>
              Toast.show({
                title: "보관함으로 옮겼어요",
                actionProps: { children: "되돌릴게요" },
              })
            }
          >
            옮기고 되돌리기
          </Button>
        </Kid>
        <Kid label="설명까지">
          <Button
            variant="outline"
            onClick={ =>
              Toast.show({
                title: "초대를 보냈어요",
                description: "받는 사람이 수락하면 알려드려요.",
                type: "success",
                actionProps: { children: "취소할게요" },
              })
            }
          >
            초대 보내기
          </Button>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "놓치면 곤란할 때", then: <><b>Alert</b> 예요. 사라진다는 건 놓칠 수 있다는 뜻이에요.</> },
  { when: "결정을 받아야 할 때", then: <><b>Dialog</b> 예요. 토스트는 흐름을 멈추지 않아요.</> },
  { when: "표시", then: <><b>type</b> 으로 그쪽이 붙여요. 따로 아이콘을 끼우지 않아요.</> },
];
