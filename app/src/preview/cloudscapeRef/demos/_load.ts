// @ts-nocheck
export const LOAD: Record<string, () => Promise<{ default: React.ComponentType<{}> }>> = {
  "button": () => import("./button"),
};
