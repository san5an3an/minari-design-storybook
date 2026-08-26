import type * as React from "react";

export interface ToneColor { name: string; hex: string }

export interface DemoProps { tones: ToneColor[] }

export type DemoSet = Record<string, React.ComponentType<DemoProps>>;

export interface DemoModule {
  demos: DemoSet;
  skipped: Record<string, string>;
}
