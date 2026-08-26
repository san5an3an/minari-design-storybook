import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { ProseProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Prose = impl<ProseProps>(system, "prose");
  return (
    <>
      <Master note="안의 태그는 그대로 둬요. 컨테이너가 크기와 간격만 정해요. 본문 폭은 읽을 수 있는 한계까지만 넓혀요.">
        <Prose>
          <h2>토큰은 왜 세 층인가</h2>
          <p>
            값을 한 층에 두면 색 하나를 바꿀 때 그 색을 쓰는 위치를 전부 찾아야 함.
            층을 나누면 <code>bg.neutral.subtle</code> 이 무엇을 가리키는지만 바꾸면 됨.
          </p>
          <blockquote>이름이 값을 가리키게 하라. 값이 이름을 가리키게 하지 말고.</blockquote>
          <p>
            자세한 것은 <a href="#"></a> 에 있음.
          </p>
        </Prose>
      </Master>

      <Kids axis="usage" title="Usage" note="줄 길이가 길수록 다음 줄 첫 글자를 찾기 어려워져요. 폭을 넓히는 대신 글자를 키워요.">
        <Kid label="문단 + 목록">
          <Prose>
            <p>다음 셋을 지킴.</p>
            <ul>
              <li>값이 아니라 이름을 참조함</li>
              <li>층을 건너뛰지 않음</li>
              <li>예외는 이유를 적음</li>
            </ul>
          </Prose>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "입력란의 이름일 때", then: <><b>Label</b> 이에요. 이름은 컨트롤에 묶이고 글은 홀로 서요.</> },
  { when: "UI 문구일 때", then: <>쓰지 마세요. 이건 <b>읽는 글</b>의 바탕이에요.</> },
  { when: "표가 들어갈 때", then: <><b>Table</b> 을 안에 넣으세요. 컨테이너가 간격만 맡아요.</> },
];
