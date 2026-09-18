// @ts-nocheck
import { Stack } from "@chakra-ui/react"
import { DecorativeBox } from "../_lib/decorative-box"

export const StackWithResponsiveDirection = () => {
  return (
    <Stack direction={{ base: "column", md: "row" }} gap="10">
      <DecorativeBox boxSize="20" />
      <DecorativeBox boxSize="20" />
      <DecorativeBox boxSize="20" />
    </Stack>
  )
}

export default StackWithResponsiveDirection;
