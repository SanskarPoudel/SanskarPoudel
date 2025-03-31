"use client"

import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"
import { useState } from "react"

export function PrintButton() {
  const [isPrinting, setIsPrinting] = useState(false)

  const handlePrint = () => {
    setIsPrinting(true)
    window.print()
    setTimeout(() => setIsPrinting(false), 1000)
  }

  return (
    <Button onClick={handlePrint} className="fixed bottom-4 right-4 print:hidden" disabled={isPrinting}>
      <Printer className="mr-2 h-4 w-4" />
      {isPrinting ? "Printing..." : "Print CV"}
    </Button>
  )
}

