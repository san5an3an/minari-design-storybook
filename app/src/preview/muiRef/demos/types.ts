import type * as React from "react";

export interface ToneColor { name: string; hex: string }

export interface DemoProps { tones: ToneColor[] }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DemoSet = Record<string, React.ComponentType<any>>;

export interface DemoModule {
  demos: DemoSet;
  skipped: Record<string, string>;
}
