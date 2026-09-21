// @ts-nocheck
import { Button } from "@chakra-ui/react"
import { Tooltip } from "../_lib/tooltip"

export const TooltipWithArrow = () => {
  return (
    <Tooltip showArrow content="This is the tooltip content">
      <Button variant="outline" size="sm">
        Hover me
      </Button>
    </Tooltip>
  )
}

export default TooltipWithArrow;
