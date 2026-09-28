// @ts-nocheck
import { Bleed, Box } from "@chakra-ui/react"
import { DecorativeBox } from "../_lib/decorative-box"

export const BleedVertical = () => {
  return (
    <Box padding="10" rounded="sm" borderWidth="1px">
      <Bleed block="10">
        <DecorativeBox height="20">Bleed</DecorativeBox>
      </Bleed>
    </Box>
  )
}

export default BleedVertical;
