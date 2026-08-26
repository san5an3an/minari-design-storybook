import * as React from "react";
import { Button, ConfigProvider, Flex } from "antd";
import { useResponsive } from "antd-style";
import type { DemoProps, ToneColor } from "../types";

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
