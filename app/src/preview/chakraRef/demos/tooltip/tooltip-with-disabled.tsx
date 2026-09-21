// @ts-nocheck
import { Button } from "@chakra-ui/react"
import { Tooltip } from "../_lib/tooltip"

export const TooltipWithDisabled = () => {
  return (
    <Tooltip content="This is the tooltip content" disabled>
      <Button variant="outline" size="sm">
        Hover me
      </Button>
    </Tooltip>
  )
}

export default TooltipWithDisabled;
