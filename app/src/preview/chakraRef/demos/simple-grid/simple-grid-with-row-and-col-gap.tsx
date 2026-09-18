// @ts-nocheck
import { SimpleGrid } from "@chakra-ui/react"
import { DecorativeBox } from "../_lib/decorative-box"

export const SimpleGridWithRowAndColGap = () => {
  return (
    <SimpleGrid columns={2} columnGap="2" rowGap="4">
      <DecorativeBox height="20" />
      <DecorativeBox height="20" />
      <DecorativeBox height="20" />
      <DecorativeBox height="20" />
    </SimpleGrid>
  )
}

export default SimpleGridWithRowAndColGap;
