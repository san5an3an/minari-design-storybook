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

function Example2() {
  return (
    <>
    <Grid
      columns={repeat('auto-fit', 'size-800')}
      autoRows="size-800"
      justifyContent="center"
      gap="size-100">
      {colors.map(color =>
        <View key={color} backgroundColor={color} />
      )}
    </Grid>
    </>
  );
}

export const demos = {
  "explicit-grids": Example1,
  "implicit-grids": Example2,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
