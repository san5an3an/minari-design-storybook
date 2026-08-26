import { Kid, Kids, Master, impl, valuesOf } from "../Doc";
import type { Condition } from "../PropsTable";
import type { AspectratioProps } from "../../systems/props";
import type { PageProps } from "./types";

// 가로로 긴 3:2 풍경 이미지 한 장. 인라인 SVG를 data URI로 삽입
const SRC = "data:image/svg+xml;utf8," + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="160">
     <defs><linearGradient id="s" x1="0" y1="0" x2="0" y2="1">
       <stop offset="0" stop-color="#7aa7d9"/><stop offset="1" stop-color="#cfe0f0"/>
     </linearGradient></defs>
     <rect width="240" height="160" fill="url(#s)"/>
     <circle cx="188" cy="38" r="17" fill="#ffd88a"/>
     <path d="M0 120 L62 66 L108 120 Z" fill="#6f8f70"/>
     <path d="M84 120 L142 58 L200 120 Z" fill="#557a58"/>
     <rect y="118" width="240" height="42" fill="#3f5c45"/>
   </svg>`);

function Shot {
  // 영역 채우고 자르기 처리. contain은 여백 생기고 fill은 찌그러지는 차이 있음
  return (
    <img
      src={SRC}
      alt=""
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
    />
  );
}

export function Page({ system }: PageProps) {
  const AR = impl<AspectratioProps>(system, "aspectratio");
  const ratios = valuesOf(system, "aspectratio", "ratio");
  return (
    <>
      <Master note="비율은 위치의 성질이지 이미지의 성질이 아니에요. 원본이 어떻든 이 위치는 같은 비율로 렌더링돼요.">
        <div style={{ width: "16rem" }}><AR ratio={16 / 9}><Shot /></AR></div>
      </Master>

      {/* Usage 16/9, Square 1/1, Portrait 9/16 비율 그대로 적용 */}
      <Kids axis="ratio" title="Anatomy" note="같은 그림 한 장을 세 비율에 그대로 넣었어요. 잘리는 곳이 달라지는 게 이 컴포넌트가 하는 일이에요.">
        {ratios.map((r) => (
          <Kid key={r} label={r} hint={r === "video" ? "기본" : undefined}>
            <div style={{ width: "8rem" }}><AR ratio={r}><Shot /></AR></div>
          </Kid>
        ))}
      </Kids>

      <Kids axis="ratio" title="Number" note="이름 대신 숫자도 받아요. 공식 API 가 숫자예요. 이름은 정적 CSS 를 위해 이 프로젝트가 덧붙인 거예요.">
        <Kid label="16 / 9"><div style={{ width: "9rem" }}><AR ratio={16 / 9}><Shot /></AR></div></Kid>
        <Kid label="4 / 3"><div style={{ width: "9rem" }}><AR ratio={4 / 3}><Shot /></AR></div></Kid>
        <Kid label="1 / 1"><div style={{ width: "9rem" }}><AR ratio={1 / 1}><Shot /></AR></div></Kid>
      </Kids>

      {/* 토큰 생존 표시용 빈 영역 */}
      <Kids axis="ratio" title="Part" note="아직 아무것도 안 왔을 때예요. 바탕·테두리·모서리가 위치를 지켜서, 이미지가 뜨는 순간 아래가 밀리지 않아요.">
        <Kid label="비어 있을 때"><div style={{ width: "9rem" }}><AR ratio={16 / 9} /></div></Kid>
      </Kids>

      <Kids axis="grid" title="Usage" note="격자에서 특히 값어치가 있어요. 한 셀만 높이가 달라도 줄 전체가 어긋나요.">
        <Kid label="3열">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: ".5rem", width: "22rem" }}>
            <AR ratio="square"><Shot /></AR>
            <AR ratio="square"><Shot /></AR>
            <AR ratio="square"><Shot /></AR>
          </div>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "안의 것이 비율과 다를 때", then: <>위치를 채우고 <b>잘려요</b>. 늘이면 찌그러지고 맞추면 여백이 생겨요.</> },
  { when: "올 것의 모양까지 보여 주고 싶을 때", then: <><b>Skeleton</b> 이에요. 이건 위치만 잡아요.</> },
];
