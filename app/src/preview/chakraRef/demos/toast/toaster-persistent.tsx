// @ts-nocheck
"use client"

import { Button } from "@chakra-ui/react"
import { toaster } from "../_lib/toaster"

export const ToasterPersistent = () => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() =>
        toaster.create({
          description: "File saved successfully",
          type: "loading",
        })
      }
    >
      Show Toast
    </Button>
  )
}

export default ToasterPersistent;
