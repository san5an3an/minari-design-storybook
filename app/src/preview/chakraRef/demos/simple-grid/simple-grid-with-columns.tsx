// @ts-nocheck
import { SimpleGrid } from "@chakra-ui/react"
import { DecorativeBox } from "../_lib/decorative-box"

export const SimpleGridWithColumns = () => (
  <SimpleGrid columns={[2, null, 3]} gap="40px">
    <DecorativeBox height="20" />
    <DecorativeBox height="20" />
    <DecorativeBox height="20" />
    <DecorativeBox height="20" />
    <DecorativeBox height="20" />
  </SimpleGrid>
)

export default SimpleGridWithColumns;
