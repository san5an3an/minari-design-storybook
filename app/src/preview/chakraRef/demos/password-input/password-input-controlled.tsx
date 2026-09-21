// @ts-nocheck
"use client"

import { PasswordInput } from "../_lib/password-input"
import { useState } from "react"

export const PasswordInputControlled = () => {
  const [value, setValue] = useState("")
  return (
    <PasswordInput value={value} onChange={(e) => setValue(e.target.value)} />
  )
}

export default PasswordInputControlled;
