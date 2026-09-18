// @ts-nocheck
import { Separator, Stack } from "@chakra-ui/react"
import { DecorativeBox } from "../_lib/decorative-box"

export const SeparatorWithResponsiveOrientation = () => {
  return (
    <Stack direction={{ base: "row", md: "column" }} align="stretch">
      <DecorativeBox>First</DecorativeBox>
      <Separator orientation={{ base: "vertical", sm: "horizontal" }} />
      <DecorativeBox>Second</DecorativeBox>
    </Stack>
  )
}

export default SeparatorWithResponsiveOrientation;
