// @ts-nocheck
"use client"

import { Button } from "@chakra-ui/react"
import { toaster } from "../_lib/toaster"

export const ToasterWithDuration = () => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() =>
        toaster.create({
          description: "File saved successfully",
          duration: 6000,
        })
      }
    >
      Show Toast
    </Button>
  )
}

export default ToasterWithDuration;
