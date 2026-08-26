import { Kid, Kids, Master, defaultOf, impl, valuesOf } from "../Doc";
import type { Condition } from "../PropsTable";
import type { AlertProps } from "../../systems/props";
import type { PageProps } from "./types";

const SAY: Record<string, string> = {
  neutral: "예정된 점검이 있어요.",
  brand: "새 기능이 열렸어요.",
  danger: "결제에 실패했어요.",
  success: "저장했어요.",
  warning: "곧 만료돼요.",
};

export function Page({ system }: PageProps) {
  const Alert = impl<AlertProps>(system, "alert");
  const Button = system.impl.button;
  const tones = valuesOf(system, "alert", "tone");
  const d = defaultOf(system, "alert", "tone") ?? tones[0];

  return (
    <>
      <Master note="이 알림은 사라지지 않아요. 놓치면 곤란한 것은 여기 둬요.">
        <Alert title="예정된 점검">{SAY.neutral}</Alert>
      </Master>

      <Kids
        axis="tone"
        note={
          <>
            tone 은 이 시스템의 팔레트 구성과 <b>1:1</b> 이에요, {tones.length}종이에요.
          </>
        }
      >
        {tones.map((t) => (
          <Kid key={t} label={t} hint={t === d ? "기본" : undefined}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <Alert tone={t} title={t}>
                {SAY[t] ?? "알림 내용이 들어가요."}
              </Alert>
            </div>
          </Kid>
        ))}
      </Kids>

      <Kids axis="title" title="Title">
        <Kid label="제목 있음">
          <div style={{ flex: 1 }}>
            <Alert tone="warning" title="곧 만료돼요">
              7일 뒤에 구독이 끝나요.
            </Alert>
          </div>
        </Kid>
        <Kid label="제목 없음">
          <div style={{ flex: 1 }}>
            <Alert tone="warning">7일 뒤에 구독이 끝나요.</Alert>
          </div>
        </Kid>
      </Kids>
      <Kids
        axis="icon"
        title="Type Marker"
        note={
          <>
            종류가 있으면 <b>기본으로 켜져요</b> . 색만으로 알리면 색을 구별하기 어려운 사람에게
            전해지지 않으니까요. <b>Toast 와 같은 표시</b>을 써요: 같은 뜻에 다른 그림을 주면 두
            사건으로 읽혀요.
          </>
        }
      >
        <Kid label="켬" hint="기본">
          <Alert tone="danger" title="저장하지 못했어요">
            잠시 뒤 다시 시도해 주세요.
          </Alert>
        </Kid>
        <Kid label="끔">
          <Alert tone="danger" icon={false} title="저장하지 못했어요">
            잠시 뒤 다시 시도해 주세요.
          </Alert>
        </Kid>
      </Kids>

      <Kids
        axis="action"
        title="Action"
        note={
          <>
            <b>하나까지</b>예요. 둘을 두면 무엇이 기본인지 알 수 없고, Alert 는 흐름 안에 머무는
            것이라 결정을 받는 위치가 아니에요. 결정을 받아야 하면 <b>Dialog</b> 예요.
          </>
        }
      >
        <Kid label="없음" hint="기본">
          <Alert tone="warning" title="용량이 거의 찼어요">
            80% 를 넘었어요.
          </Alert>
        </Kid>
        <Kid label="있음">
          <Alert
            tone="warning"
            title="용량이 거의 찼어요"
            // 공식 예제의 Enable도 밑줄 텍스트 아닌 버튼임
            action={<Button variant="outline" size="sm">정리하기</Button>}
          >
            80% 를 넘었어요.
          </Alert>
        </Kid>
      </Kids>

    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "놓쳐도 괜찮은 알림일 때",
    then: (
      <>
        <b>Toast</b> 예요. 사라진다는 것은 <b>놓칠 수 있다</b>는 뜻이라, 놓치면 곤란한 것만 여기
        둬요.
      </>
    ),
  },
  {
    when: "danger tone 을 쓸 때",
    then: <>무엇을 해야 하는지 함께 적어요. 문제만 알리고 다음 수를 안 주면 막다른 길이에요.</>,
  },
];
