import { AppWindow, Bell, Code } from "lucide-react";
import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { TabsProps } from "../../systems/props";
import type { PageProps } from "./types";

const ITEMS = [
  { value: "overview", label: "개요", content: "이 화면의 요약이 들어가요." },
  { value: "usage", label: "사용량", content: "이번 달 사용량이 들어가요." },
  { value: "billing", label: "결제", content: "결제 수단과 내역이 들어가요." },
];

// 세로 탭 예시. 이름이 길 때 사용하는 방식임
const VERTICAL_ITEMS = [
  { value: "account", label: "계정", content: "계정 정보가 들어가요." },
  { value: "password", label: "비밀번호", content: "비밀번호를 바꿔요." },
  { value: "alerts", label: "알림 설정", content: "받을 알림을 골라요." },
];

// 표시는 보조 요소, 텍스트 대체 아님. 아이콘은 Lucide만 사용
const ICON_STYLE = {
  width: "var(--component-tabs-icon-size)",
  height: "var(--component-tabs-icon-size)",
  flexShrink: 0,
} as const;
const ICON_ITEMS = [
  { value: "preview", label: "미리보기", icon: <AppWindow style={ICON_STYLE} />,
    content: "그려진 모습이 들어가요." },
  { value: "code", label: "코드", icon: <Code style={ICON_STYLE} />,
    content: "코드가 들어가요." },
  { value: "alerts", label: "알림", icon: <Bell style={ICON_STYLE} />,
    content: "알림이 들어가요." },
];

// 잠긴 셀, 선택 불가 항목은 잠금 대신 제외
const DISABLED_ITEMS = [
  { value: "overview", label: "개요", content: "이 화면의 요약이 들어가요." },
  { value: "usage", label: "사용량", content: "이번 달 사용량이 들어가요." },
  { value: "billing", label: "결제", disabled: true, content: "결제 수단과 내역이 들어가요." },
];

export function Page({ system }: PageProps) {
  const Tabs = impl<TabsProps>(system, "tabs");

  return (
    <>
      <Master note="← → 키로도 옮길 수 있어요. 그건 이 시스템이 짠 게 아니라 베이스가 하는 일이에요.">
        <div style={{ width: "100%" }}>
          <Tabs items={ITEMS} />
        </div>
      </Master>

      <Kids
        axis="items"
        title="Item Count"
        note="종류가 대여섯을 넘으면 가로로 넘쳐요. 그때는 탭이 아니라 목록을 봐요."
      >
        <Kid label="2개">
          <div style={{ flex: 1 }}>
            <Tabs items={ITEMS.slice(0, 2)} />
          </div>
        </Kid>
        <Kid label="3개">
          <div style={{ flex: 1 }}>
            <Tabs items={ITEMS} />
          </div>
        </Kid>
      </Kids>

      <Kids
        axis="variant"
        title="Active Indicator"
        note="이 시스템의 기본은 형태 축이 정해요. 두 방식 다 쓸 수 있고, 한 화면에서는 한 방식만 써요."
      >
        <Kid label="line" hint="표시선만 옮겨 가요">
          <div style={{ flex: 1 }}>
            <Tabs items={ITEMS} variant="line" />
          </div>
        </Kid>
        <Kid label="default" hint="영역이 칠해져요">
          <div style={{ flex: 1 }}>
            <Tabs items={ITEMS} variant="default" />
          </div>
        </Kid>
      </Kids>

      <Kids
        axis="orientation"
        title="Orientation"
        note={
          <>
            세로는 가로를 <b>돌려놓은 게 아니에요</b> . 표시선이 아래에서 옆으로 가고, 글자가 왼쪽에
            붙고, 담는 영역이 폭을 가져요. 가로가 넘칠 것 같으면 스크롤이 아니라 세로로 바꿔요.
          </>
        }
      >
        <Kid label="horizontal" hint="기본">
          <div style={{ flex: 1 }}>
            <Tabs items={ITEMS} />
          </div>
        </Kid>
        <Kid label="vertical">
          <div style={{ flex: 1 }}>
            <Tabs items={VERTICAL_ITEMS} orientation="vertical" />
          </div>
        </Kid>
      </Kids>

      <Kids
        axis="disabled"
        title="Disabled"
        note={
          <>
            지금은 못 고르지만 <b>있다는 건 알려야</b> 할 때만 써요. 영영 못 고르는 건 잠그지 말고
            빼요. 잠긴 채로 남으면 언제 열리는지 알 길이 없어요. 흐림 하나로만 알리지 않고
            커서와 <code>disabled</code> 속성이 함께 가요.
          </>
        }
      >
        <Kid label="전부 열림" hint="기본">
          <div style={{ flex: 1 }}>
            <Tabs items={ITEMS} />
          </div>
        </Kid>
        <Kid label="결제 잠금">
          <div style={{ flex: 1 }}>
            <Tabs items={DISABLED_ITEMS} />
          </div>
        </Kid>
      </Kids>

      <Kids
        axis="icon"
        title="Marker"
        note={
          <>
            표시는 <b>덧붙이는 것</b>이지 글자를 대신하지 않아요. 그림만 있는 탭은 눌러 봐야 뭔지
            알아요. 한 줄 안에서는 전부 넣거나 전부 빼요. 섞으면 표시 있는 항목이 더 중요해 보여요.
          </>
        }
      >
        <Kid label="없음" hint="기본">
          <div style={{ flex: 1 }}>
            <Tabs items={ICON_ITEMS.map(({ icon: _icon, ...rest }) => rest)} />
          </div>
        </Kid>
        <Kid label="있음">
          <div style={{ flex: 1 }}>
            <Tabs items={ICON_ITEMS} />
          </div>
        </Kid>
      </Kids>

      <Kids axis="defaultValue" title="Default Open">
        <Kid label="첫 번째" hint="기본">
          <div style={{ flex: 1 }}>
            <Tabs items={ITEMS} />
          </div>
        </Kid>
        <Kid label="billing">
          <div style={{ flex: 1 }}>
            <Tabs items={ITEMS} defaultValue="billing" />
          </div>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "두 종류를 나란히 봐야 할 때",
    then: (
      <>
        <b>Accordion</b> 이에요. 탭은 한 번에 하나만 보여요.
      </>
    ),
  },
  {
    when: "내용은 같고 보는 방식만 바뀔 때",
    then: (
      <>
        <b>Segmented</b> 예요. 목록↔지도처럼요. 탭은 <b>내용 자체</b>를 바꿔요.
      </>
    ),
  },
];
