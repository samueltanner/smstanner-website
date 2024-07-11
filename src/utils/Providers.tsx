import { AppProvider } from "./AppContext"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <AppProvider>{children}</AppProvider>
}
export default Providers
