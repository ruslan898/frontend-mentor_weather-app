import { useState } from "react";

export default function useToggle({initialValue = false}) {
  const [open, setOpen] = useState(initialValue)

  function toggleOpen() {
    setOpen(!open)
  }

  return [open, toggleOpen]
}