import * as React from "react";
import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { ColorPickerProps } from "../../systems/props";
import type { PageProps } from "./types";

const SWATCHES = [
  { value: "#1B4EA6", label: "코발트" },
  { value: "#0F7B6C", label: "에메랄드" },
  { value: "#B4342A", label: "엠버" },
  { value: "#8A6D1F", label: "샌드" },
];

// 상한 10까지 찬 상태. 담기 버튼 비활성화 및 흐림 표시
const FULL = [
  "#1B4EA6", "#0F7B6C", "#B4342A", "#8A6D1F", "#5B3A8C",
  "#3F4650", "#2A7F62", "#A8562D", "#4B5FA8", "#7A3F5C",
].map((value, i) => ({ value, label: `담아 둔 색 ${i + 1}` }));

function LateParent({ impl: ColorPicker }: { impl: React.ComponentType<ColorPickerProps> }) {
  const [v, setV] = React.useState("#4A7FD4");
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
      <button type="button" onClick={ => setV("#B4342A")}>밖에서 색 바꾸기</button>
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
            <b>늘 열려 있어요.</b> 앞선 패널은 접혀 있다가 “다른 색…”을 눌러야 펼쳐졌는데,
            토큰 밖으로 나간다는 경계는 <b>담아 둔 색이 비어서 시작해요</b>는 사실이 이미
            말하고 있어요.
            <br />
            <b>담아야 남아요.</b> 지금 색 위에 손을 올리면 <b>+</b> 가 떠요. 누르면 아래에
            쌓이고 <b>10개</b>가 상한이에요. 몇 개까지 담기는지는 <b>글자로</b> 말해요
            (<code>3/10</code>). 흐르는 배치라 줄 수로는 상한을 보일 수 없거든요.
            <br />
            <b>담아 둔 색은 누르면 빠져요.</b> 손을 올리면 <b>×</b> 가 뜨고, 그 버튼이
            스와치를 통째로 덮고 있어요. 이 위치에서 일어나는 일이 <b>빼기뿐</b>이에요.
            <br />
            <b>담아 둔 색을 다시 고르는 길은 없어요.</b> 예제에 그 동작이 없어서 그대로
            맞췄고, 그래서 선택 표시·라디오 그룹·방향키 이동도 함께 빠졌어요. 되돌리려면
            그 결정을 먼저 뒤집어야 해요.
          </>
        }
      >
        <div style={{ inlineSize: "25rem" }}>
          <ColorPicker swatches={SWATCHES} value={v} onValueChange={setV} />
        </div>
      </Master>

      <Kids
        axis="state"
        title="State"
        note={
          <>
            담아 둔 색에는 <b>상태가 없어요.</b> 고른 것도, 고르지 않은 것도 없어요.
            목록에 있거나 없거나 둘뿐이에요.
            <br />
            <b>비어 있으면 그룹 자체가 렌더링되지 않아요.</b> 담기 전에는 아래에 아무것도 없는 게
            정상이에요, 주어진 목록이 아니라 <b>쌓인 결과</b>이기 때문이에요.
          </>
        }
      >
        <Kid label="아직 담은 것 없음" hint="그룹 자체가 렌더링되지 않아요">
          <div style={{ inlineSize: "25rem" }}>
            <ColorPicker defaultValue="#4A7FD4" />
          </div>
        </Kid>
        <Kid label="처음부터 담겨 있음" hint="swatches 는 시작값이에요">
          <div style={{ inlineSize: "25rem" }}>
            <ColorPicker swatches={SWATCHES} defaultValue={SWATCHES[1].value} />
          </div>
        </Kid>
        <Kid label="가득 참" hint="10개가 상한. 담기 버튼이 흐려져요">
          <div style={{ inlineSize: "25rem" }}>
            <ColorPicker swatches={FULL} defaultValue="#4A7FD4" />
          </div>
        </Kid>
        <Kid label="같은 색이 둘" hint="중복이 허용돼요. 빼기는 위치로 해요">
          <div style={{ inlineSize: "25rem" }}>
            <ColorPicker
              swatches={[SWATCHES[0], SWATCHES[1], SWATCHES[0]]}
              defaultValue="#4A7FD4"
            />
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
            면도 <b>포커스를 받고 방향키로 움직여요.</b> 마우스로만 되는 위치를 남기지
            않아요 (Shift 를 누르면 10칸씩).
          </>
        }
      >
        <Kid label="형식 넷" hint="HEX · RGB · HSL · LAB. 같은 하나를 다르게 말해요">
          <div style={{ inlineSize: "25rem" }}>
            <ColorPicker swatches={SWATCHES} defaultValue="#4A7FD4" />
          </div>
        </Kid>
        <Kid
          label="LAB 은 왕복이 손실이에요"
          hint="a 에 127 을 넣고 다시 읽어 보세요. 다른 수가 와요"
        >
          <div style={{ inlineSize: "25rem" }}>
            <ColorPicker defaultValue="#0F7B6C" />
          </div>
        </Kid>
        <Kid label="밖이 늦게 답하는 부모" hint="0.3초 뒤에, 그때 잡아 둔 옛 값으로 답해요">
          <div style={{ inlineSize: "25rem" }}>
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
    when: "값을 어딘가에 옮겨 적어야 할 때",
    then: <>고른 색이 <b>글자로</b> 함께 서요. 색은 말로 옮길 수 없어요.</>,
  },
  {
    when: "투명도를 쓸 때",
    then: (
      <>
        값이 <b>8자리</b>(<code>#rrggbbaa</code>)로 나가요. 불투명하면 6자리예요,
        <b>투명도도 값의 일부</b>라, 6자리만 내보내면 알파를 움직여도 밖은 몰라요.
      </>
    ),
  },
  {
    when: "지각 밝기를 맞춰야 할 때",
    then: (
      <>
        <b>LAB</b> 의 <code>L</code> 이에요. HSL 의 <code>L</code> 은 두 색이 같아도 밝기가
        다르게 보여요. 다만 <b>왕복이 손실</b>이라 색역 밖 값은 되돌아오지 않아요.
      </>
    ),
  },
];
