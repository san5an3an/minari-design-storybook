// @ts-nocheck
import { HStack } from "@chakra-ui/react"
import { DecorativeBox } from "../_lib/decorative-box"

export const StackWithHstack = () => {
  return (
    <HStack>
      <DecorativeBox h="10" />
      <DecorativeBox h="5" />
      <DecorativeBox h="20" />
    </HStack>
  )
}

export default StackWithHstack;
