import * as React from "react";
import { Kbd as ShadcnKbd, KbdGroup } from "@/components/ui/kbd";
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
