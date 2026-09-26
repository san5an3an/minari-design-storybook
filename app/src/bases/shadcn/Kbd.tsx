import * as React from "react";
import { Kbd as ShadcnKbdBase, KbdGroup } from "@/components/ui/kbd";
import { withDims } from "./tone";

// 가로 여백, 간격, 모서리만 연결. shadcn 이 높이(h-5)로 세로를 고정하고 세로 토큰도 없음
const ShadcnKbd = withDims(
  ShadcnKbdBase,
  "gap-(--component-kbd-gap) rounded-(--component-kbd-radius) px-(--component-kbd-padding-inline)",
);
import type { KbdImpl, KbdProps } from "../../systems/props";

function KbdRoot({ children, ...rest }: KbdProps) {
  return <ShadcnKbd {...rest}>{children}</ShadcnKbd>;
}

function Group({ keys, children }: { keys?: string[]; children?: React.ReactNode }) {
  return (
    <KbdGroup>
      {keys ? keys.map((k) => <ShadcnKbd key={k}>{k}</ShadcnKbd>) : children}
    </KbdGroup>
  );
}

export const Kbd = Object.assign(KbdRoot, { Group }) as KbdImpl;
