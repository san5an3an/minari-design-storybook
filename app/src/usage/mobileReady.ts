export const MOBILE_READY: Readonly<Record<string, readonly (1 | 2 | 3 | 4)[]>> = {
  shadcn: [1, 2, 3],
  mantine: [1, 2, 3],
};

export function hasMobile(baseKey: string, variant: 1 | 2 | 3 | 4): boolean {
  return MOBILE_READY[baseKey]?.includes(variant) ?? false;
}
