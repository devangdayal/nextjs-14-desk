'use client'

import { useState, useEffect } from "react"
import Modal from "./Modal"
import Header from "./Header"

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<string>("light")
  const [nextInfo, setNextInfo] = useState<boolean>(false)

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  const toggleNextInfo = async () => {
    setNextInfo(true)
    await new Promise<void>((resolve) => setTimeout(resolve, 3000))
    setNextInfo(false)
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} nextJsInfo={toggleNextInfo} />
      {children}
      <Modal isOpen={nextInfo} onClose={() => setNextInfo(false)} />
    </>
  )
}