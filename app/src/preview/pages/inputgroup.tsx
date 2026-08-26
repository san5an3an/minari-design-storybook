import { Kid, Kids, Master, compound } from "../Doc";
import type { Condition } from "../PropsTable";
import type { InputgroupImpl } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const G = compound<InputgroupImpl>(system, "inputgroup");
  const w = { width: "16rem" };
  return (
    <>
      <Master note="부분과 필드가 한 상자예요. 옆에 따로 두면 테두리가 둘이 되고, 초점이 잡힐 때 필드만 빛나요.">
        <G style={w} prefix={<G.Text>₩</G.Text>} placeholder="0" />
      </Master>

      <Kids
        axis="align"
        title="Anatomy"
        note="좌우는 같은 줄에 서요. 위아래는 한 줄을 통째로 쓰니까 여러 줄 입력에서만 뜻이 있어요."
      >
        <Kid label="inline-start" hint="기본">
          <G style={w} prefix={<G.Text>https://</G.Text>} placeholder="example.com" />
        </Kid>
        <Kid label="inline-end">
          <G style={w} suffix={<G.Text>원</G.Text>} placeholder="0" />
        </Kid>
      </Kids>

      <Kids axis="parts" title="Parts" note="부분 안의 버튼은 자기 테두리를 갖지 않아요. 상자 안에 상자가 생기면 어느 걸 누르는지 흐려져요.">
        <Kid label="Button">
          <G style={w} defaultValue="검색어" suffix={<G.Button>지우기</G.Button>} />
        </Kid>
        <Kid label="Text">
          <G style={w} prefix={<G.Text>@</G.Text>} placeholder="username" />
        </Kid>
      </Kids>

      <Kids axis="aria-invalid" title="Invalid" note="오류도 바깥 상자가 그려요. 안쪽 필드만 붉히면 부분은 멀쩡해 보여요.">
        <Kid label="오류">
          <G style={w} aria-invalid="true" prefix={<G.Text>@</G.Text>} defaultValue="you@" />
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "테두리를 그릴 때", then: <><b>바깥 상자만</b> 그려요. 안쪽 필드는 배경도 테두리도 없어요.</> },
  { when: "위아래로 부분을 붙일 때", then: <>한 줄을 통째로 써요. <b>여러 줄 입력</b>에서만 써요.</> },
  { when: "설명을 붙이고 싶을 때", then: <><b>Field</b> 예요. 부분은 상자 안, 설명은 상자 밖이에요.</> },
];
