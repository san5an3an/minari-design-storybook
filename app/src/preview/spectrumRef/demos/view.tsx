// @ts-nocheck
import { TextField, View } from "@adobe/react-spectrum";

function Example1() {
  return (
    <>
    <View
      borderWidth="thin"
      borderColor="dark"
      borderRadius="medium"
      padding="size-250">
      <TextField label="Name" />
    </View>
    </>
  );
}

export const demos = {
  "example": Example1,
};
export const skipped: Record<string, { code: string; detail: string }> = {

};
