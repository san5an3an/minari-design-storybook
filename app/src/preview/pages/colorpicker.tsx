import * as React from "react";
import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { ColorPickerProps } from "../../systems/props";
import type { PageProps } from "./types";

const SWATCHES = [
  { value: "#1b4ea6", label: "코발트" },
  { value: "#0f7b6c", label: "에메랄드" },
  { value: "#b4342a", label: "엠버" },
  { value: "#8a6d1f", label: "샌드" },
  { value: "#5b3a8c", label: "플럼" },
  { value: "#3f4650", label: "슬레이트" },
];

// 상한 16까지 찬 상태. 담기 버튼 비활성화 및 흐림 표시
const FULL = [
  "#1b4ea6", "#0f7b6c", "#b4342a", "#8a6d1f", "#5b3a8c", "#3f4650", "#2a7f62", "#a8562d",
  "#4b5fa8", "#7a3f5c", "#3d6b8a", "#6b8a3d", "#8a3d6b", "#3d8a7a", "#8a7a3d", "#5c5c5c",
].map((value, i) => ({ value, label: `담아 둔 색 ${i + 1}` }));

function LateParent({ impl: ColorPicker }: { impl: React.ComponentType<ColorPickerProps> }) {
  const [v, setV] = React.useState("#4a7fd4");
  const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  React.useEffect( =>  => clearTimeout(timer.current), []);
  return (
    <div style={{ display: "grid", gap: "0.5rem" }}>
      <ColorPicker
        value={v}
        onValueChange={(next) => {
          if (timer.current) return; // 전송 대기 중인 항목이 이미 있음
          const captured = next; // 현재 값 참조 유지. 콜백 실행 시점엔 이미 옛 값임
          timer.current = setTimeout( => { timer.current = undefined; setV(captured); }, 300);
        }}
      />
      <button type="button" onClick={ => setV("#b4342a")}>밖에서 색 바꾸기</button>
    </div>
  );
}

export function Page({ system }: PageProps) {
  const ColorPicker = impl<ColorPickerProps>(system, "colorpicker");
  const [v, setV] = React.useState(SWATCHES[0].value);

  return (
    <>
      <Master
        note={
          <>
            <b>기본은 접혀 있어요.</b> 자유색은 <b>펼쳐야</b> 나와요. 펼치는 동작 자체가
            “여기서부터는 토큰이 아니다”를 알리는 장치예요.
            <br />
            <b>스와치는 맨 아래이고, 담아야 남아요.</b> 값 행 맨 왼쪽 네모가 지금 색인데,
            그 위에 손을 올리면 <b>+</b> 가 떠요. 누르면 아래에 쌓여요, 한 줄 8개, 두 줄
            <b> 16개</b>가 상한이에요.
            <br />
            <b>이미 담긴 색이면 같은 위치가 <span>−</span> 로 바뀌어요.</b> 담기만 있으면
            열여섯 번째에서 되돌릴 길이 없어져요. 빼도 <b>고른 색은 그대로예요</b> , 뺀 것은
            목록이지 고름이 아니에요.
            <br />
            스와치는 토글 여럿이 아니라 <b>라디오 그룹</b>이에요. Tab 으로 그룹에 들어가고,
            그룹 안에서는 <b>방향키</b>로 움직여요.
          </>
        }
      >
        <div style={{ inlineSize: "16rem" }}>
          <ColorPicker swatches={SWATCHES} value={v} onValueChange={setV} />
        </div>
      </Master>

      <Kids
        axis="state"
        title="State"
        note={
          <>
            고른 것은 <b>색으로만</b> 알리지 않아요. 이 컴포넌트가 다루는 대상이 색이라,
            선택 표시까지 색으로 하면 <b>값과 상태가 같은 축</b>에 얹혀요. 테두리를 굵게
            하고 링을 둘러요.
          </>
        }
      >
        <Kid label="고른 것 있음">
          <div style={{ inlineSize: "16rem" }}>
            <ColorPicker swatches={SWATCHES} defaultValue={SWATCHES[2].value} />
          </div>
        </Kid>
        <Kid label="아직 담은 것 없음" hint="그룹 자체가 렌더링되지 않아요">
          <div style={{ inlineSize: "16rem" }}>
            <ColorPicker defaultValue="#4a7fd4" />
          </div>
        </Kid>
        <Kid label="가득 참" hint="16개가 상한. 하나를 빼야 담겨요">
          <div style={{ inlineSize: "16rem" }}>
            <ColorPicker swatches={FULL} defaultValue="#4a7fd4" />
          </div>
        </Kid>
        <Kid label="이미 담긴 색" hint="같은 위치가 − 로 바뀌어요">
          <div style={{ inlineSize: "16rem" }}>
            <ColorPicker swatches={SWATCHES} defaultValue={SWATCHES[0].value} />
          </div>
        </Kid>
        <Kid label="담아 둔 색 중엔 고른 것이 없음">
          <div style={{ inlineSize: "16rem" }}>
            <ColorPicker swatches={SWATCHES} defaultValue="#4a7fd4" />
          </div>
        </Kid>
        <Kid label="자유색 잠금" hint="allowCustom={false}">
          <div style={{ inlineSize: "16rem" }}>
            <ColorPicker swatches={SWATCHES} defaultValue={SWATCHES[0].value} allowCustom={false} />
          </div>
        </Kid>
      </Kids>

      <Kids
        axis="custom"
        title="Usage"
        note={
          <>
            면은 <b>겹친 그라디언트 둘</b>이에요. 아래에서 위로 검정이 빠지고(명도),
            왼쪽에서 오른쪽으로 흰색이 빠져요(채도). 캔버스가 필요 없어요.
            <br />
            면도 <b>포커스를 받고 방향키로 움직여요.</b> 마우스로만 되는 위치를 남기지 않아요.
          </>
        }
      >
        <Kid label="펼친 모습" hint="‘다른 색…’을 눌러요">
          <div style={{ inlineSize: "16rem" }}>
            <ColorPicker swatches={SWATCHES.slice(0, 4)} defaultValue="#4a7fd4" />
          </div>
        </Kid>
        <Kid label="밖이 늦게 답하는 부모" hint="0.3초 뒤에, 그때 잡아 둔 옛 값으로 답해요">
          <div style={{ inlineSize: "16rem" }}>
            <LateParent impl={ColorPicker} />
          </div>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "고를 색이 정해진 몇 개뿐일 때",
    then: (
      <>
        <b>Segmented</b> 나 <b>Select</b> 예요. 이 컴포넌트가 필요한 이유는{" "}
        <b>고를 것이 목록에 담기지 않기 때문</b>이에요.
      </>
    ),
  },
  {
    when: "토큰 밖으로 나가면 안 될 때",
    then: (
      <>
        <code>allowCustom={"{false}"}</code> 로 잠가요. 그러면 담아 둔 색 밖으로 나갈 길이
        없어요.
      </>
    ),
  },
  {
    when: "값을 어딘가에 옮겨 적어야 할 때",
    then: <>고른 색이 <b>글자로</b> 함께 서요. 색은 말로 옮길 수 없어요.</>,
  },
];
