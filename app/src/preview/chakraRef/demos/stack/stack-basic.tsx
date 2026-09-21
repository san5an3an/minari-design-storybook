// @ts-nocheck
import { Stack } from "@chakra-ui/react"
import { DecorativeBox } from "../_lib/decorative-box"

export const StackBasic = () => {
  return (
    <Stack>
      <DecorativeBox h="20" />
      <DecorativeBox h="20" />
      <DecorativeBox h="20" />
    </Stack>
  )
}

export default StackBasic;
