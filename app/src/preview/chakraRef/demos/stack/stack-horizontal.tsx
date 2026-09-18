// @ts-nocheck
import { Stack } from "@chakra-ui/react"
import { DecorativeBox } from "../_lib/decorative-box"

export const StackHorizontal = () => {
  return (
    <Stack direction="row" h="20">
      <DecorativeBox />
      <DecorativeBox />
      <DecorativeBox />
    </Stack>
  )
}

export default StackHorizontal;
