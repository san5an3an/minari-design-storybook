/* Button 의 `Color & Variant` — **손으로 쓴 것.** 생성기가 이 이름을 만나면 비켜난다.
 *
 * 왜 원본을 안 쓰는가
 * ------------------
 * 공식 예제는 `default · primary · danger · pink · purple · cyan` 여섯 줄을 세운다.
 * 뒤의 셋은 **antd 의 preset 색**이라 우리 시스템에 아예 없는 색이다. 화면에 없는
 * 색을 "이 시스템의 변형" 인 것처럼 보여 주면 거짓말이 된다
 * (2026-08-25 사용자 지시 — "Color Scheme 에 있는 컬러들에 한해서만").
 *
 * ⚠️ 줄 수를 **우리가 정하지 않는다.** `system.buttonTones` 가 그대로 줄이 된다 —
 *    다섯이면 다섯 줄, 여섯이면 여섯 줄이다. 실측: 대부분 5종
 *    (neutral·brand·danger·success·warning), 06-slate 는 `info` 가 있어 6종.
 *
 * ⚠️ antd 가 **이름으로 아는 색은 셋뿐**이다(`default` · `primary` · `danger`).
 *    나머지 역할은 `ConfigProvider` 로 `colorPrimary` 를 갈아 끼워 그쪽 알고리즘이
 *    solid/filled/text 계조를 직접 만들게 한다 — 우리가 여섯 변형의 색을 손으로
 *    계산하면 그건 antd 의 변형이 아니라 우리 흉내가 된다.
 *
 * ⚠️ 변형 축(여섯)은 공식 그대로다. 여기는 우리가 손댈 자리가 아니다.
 */
import * as React from "react";
import { Button, ConfigProvider, Flex } from "antd";
import { useResponsive } from "antd-style";
import type { DemoProps, ToneColor } from "../types";

/** 이 역할을 antd 가 이름으로 아는가. 모르면 `colorPrimary` 로 넣는다. */
const NATIVE_COLOR: Record<string, "default" | "primary" | "danger"> = {
  neutral: "default",
  brand: "primary",
  danger: "danger",
};

const VARIANTS = [
  ["solid", "Solid"], ["outlined", "Outlined"], ["dashed", "Dashed"],
  ["filled", "Filled"], ["text", "Text"], ["link", "Link"],
] as const;

function ToneRow({ tone }: { tone: ToneColor }) {
  const native = NATIVE_COLOR[tone.name];
  const row = (
    <Flex gap="small" wrap align="center">
      <span className="doc-note" style={{ minWidth: "4.5rem", marginTop: 0 }}>{tone.name}</span>
      {VARIANTS.map(([v, label]) => (
        <Button key={v} color={native ?? "primary"} variant={v}>
          {label}
        </Button>
      ))}
    </Flex>
  );
  /* ⚠️ hex 를 못 읽었으면 감싸지 않는다. `colorPrimary: undefined` 를 넣으면 antd 가
        자기 기본 파랑으로 되돌아가, 그 시스템에 없는 색이 화면에 뜬다. */
  if (native || !tone.hex) return row;
  return <ConfigProvider theme={{ token: { colorPrimary: tone.hex } }}>{row}</ConfigProvider>;
}

const ColorVariant: React.FC<DemoProps> = ({ tones }) => {
  const { xxl } = useResponsive();

  return (
    <ConfigProvider componentSize={xxl ? "medium" : "small"}>
      <Flex vertical gap="small">
        {tones.map((t) => <ToneRow key={t.name} tone={t} />)}
      </Flex>
    </ConfigProvider>
  );
};

export default ColorVariant;
