// @ts-nocheck
import { Grid, View, repeat } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <Grid
      areas={[
        'header  header',
        'sidebar content',
        'footer  footer'
      ]}
      columns={['1fr', '3fr']}
      rows={['size-1000', 'auto', 'size-1000']}
      height="size-6000"
      gap="size-100">
      <View backgroundColor="celery-600" gridArea="header" />
      <View backgroundColor="blue-600" gridArea="sidebar" />
      <View backgroundColor="purple-600" gridArea="content" />
      <View backgroundColor="magenta-600" gridArea="footer" />
    </Grid>
    </>
  );
}

export const demos = {
  "explicit-grids": Example1,
};
export const skipped: Record<string, { code: string; detail: string }> = {
  "implicit-grids": { code: "runtime-unavailable", detail: "공식 펜스가 문서 사이트가 미리 깔아 둔 `colors` 배열에 기대요 — 설치본에는 없는 값이에요." },
};
