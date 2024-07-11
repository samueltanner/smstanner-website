"use client"
import { useEffect, useState } from "react"

const useScreenDimensions = () => {
  const [screenData, setScreenData] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setScreenData({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize() // Set initial dimensions

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return screenData
}

export default useScreenDimensions
