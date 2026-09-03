import * as React from "react";
import { StyleProvider } from "antd-style";

import "./antdOverrides.css";

const Styled = StyleProvider as React.FC<{ layer?: boolean; children: React.ReactNode }>;

export function AntdStyleLayer({ children }: { children: React.ReactNode }) {
  return <Styled layer>{children}</Styled>;
}
