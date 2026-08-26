import { Tabs as ShadcnTabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { CSSProperties } from "react";
import type { TabsProps } from "../../systems/props";

// 시스템의 기본 활성 표시. 형태 축값이라 CSS 변수로 알 수 없어 prop으로 받음
const DEFAULT_VARIANT = "default";

export function Tabs({
  items, defaultValue, variant = DEFAULT_VARIANT, orientation = "horizontal",
}: TabsProps) {
  const vertical = orientation === "vertical";
  // solid 를 라이브러리 default 와 동일하게 매핑
  const v = variant === "line" ? "line" : "default";

  const listStyle: CSSProperties = vertical
    ? { minWidth: "var(--component-tabs-vertical-min-width)" }
    : {};

  return (
    <ShadcnTabs defaultValue={defaultValue ?? items[0]?.value} orientation={orientation}>
      <TabsList variant={v} style={listStyle}>
        {items.map((it) => (
          <TabsTrigger key={it.value} value={it.value} disabled={it.disabled}>
            {it.icon}
            {it.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((it) => (
        <TabsContent key={it.value} value={it.value}>
          {it.content}
        </TabsContent>
      ))}
    </ShadcnTabs>
  );
}
