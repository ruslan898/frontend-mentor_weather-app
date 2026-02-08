import { useState } from "react";

export function useToggle({initialValue = false}) {
  const [open, setOpen] = useState(initialValue)

  function toggleOpen() {
    setOpen(!open)
  }

  return [open, toggleOpen]
}