export function cx(...v: Array<string | false | null | undefined>): string {
  return v.filter(Boolean).join(" ");
}
