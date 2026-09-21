// @ts-nocheck
import { Stack, StackSeparator } from "@chakra-ui/react"
import { DecorativeBox } from "../_lib/decorative-box"

export const StackWithSeparator = () => {
  return (
    <Stack separator={<StackSeparator />}>
      <DecorativeBox h="20" />
      <DecorativeBox h="20" />
      <DecorativeBox h="20" />
    </Stack>
  )
}

export default StackWithSeparator;
