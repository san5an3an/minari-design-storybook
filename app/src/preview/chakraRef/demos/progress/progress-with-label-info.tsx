// @ts-nocheck
import { Progress } from "@chakra-ui/react"
import { InfoTip } from "../_lib/toggle-tip"

export const ProgressWithLabelInfo = () => {
  return (
    <Progress.Root maxW="240px">
      <Progress.Label mb="2">
        Uploading
        <InfoTip>Uploading document to the server</InfoTip>
      </Progress.Label>
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  )
}

export default ProgressWithLabelInfo;
