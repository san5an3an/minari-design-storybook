import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { SpinnerProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Spinner = impl<SpinnerProps>(system, "spinner");

  return (
    <>
      <Master note="글자를 안 붙이면 읽어 줄 말이 없어요. 그때는 aria-label 이 대신 들어가요.">
        <Spinner />
      </Master>

      <Kids
        axis="onFill"
        note="색 채운 바탕 위에서는 색이 달라져요. 브랜드 배경 위에 브랜드색 스피너를 올리면 보이지 않아요."
      >
        <Kid label="false" hint="기본">
          <Spinner label="불러오는 중" />
        </Kid>
        <Kid label="true">
          <span
            style={{
              display: "inline-flex",
              padding: ".6rem .9rem",
              borderRadius: ".5rem",
              background: "var(--semantic-bg-brand-default)",
            }}
          >
            <Spinner onFill />
          </span>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "몇 초를 넘길 일일 때",
    then: (
      <>
        <b>Progress</b> 를 봐요. 스피너는 남은 양을 끝내 말하지 않아요.
      </>
    ),
  },
  {
    when: "올 것의 모양을 아는 경우일 때",
    then: (
      <>
        <b>Skeleton</b> 이에요. 공간을 미리 잡아 두면 화면이 튀지 않아요.
      </>
    ),
  },
  {
    when: "글자 없이 둘 때",
    then: (
      <>
        <code>aria-label</code> 이 필수예요. 도는 그림만으로는 무엇을 기다리는지 알 수 없어요.
      </>
    ),
  },
];
