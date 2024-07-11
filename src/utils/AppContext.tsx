"use client"
import { createContext, useContext, useEffect, useState } from "react"

type AppContext = {
  selectedTab: Tab | undefined
  setSelectedTab: (tab: Tab) => void
}
type Tab = "resume" | "projects" | "about" | "main"

export const AppContext = createContext<AppContext>({} as AppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedTab, setSelectedTab] = useState<Tab | undefined>()

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1)
      setSelectedTab((hash as Tab) || ("main" as Tab))
    }

    window.addEventListener("hashchange", handleHashChange)

    handleHashChange()

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  const changeTab = (tab: Tab) => {
    window.location.hash = tab
  }
  return (
    <AppContext.Provider
      value={{
        selectedTab,
        setSelectedTab: changeTab,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}

export default useAppContext
