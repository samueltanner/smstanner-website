import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import localFont from "next/font/local"
import Providers from "../utils/Providers"
import { GeistMono } from "geist/font/mono"

const lufga = localFont({
  src: [
    {
      path: "../../public/fonts/LufgaExtraLight.ttf",
      weight: "100",
    },
    {
      path: "../../public/fonts/LufgaLight.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/LufgaRegular.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/LufgaMedium.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/LufgaBold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/LufgaBlack.ttf",
      weight: "900",
    },
  ],
  variable: "--font-lufga",
})

export const metadata: Metadata = {
  title: "Sam Tanner",
  description: "Personal Website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/images/sam-just-head.svg" rel="icon" />
      </head>
      <body
        className={`${lufga.className} ${GeistMono.variable} relative flex h-screen w-screen flex-col overflow-hidden bg-[#F6F6F6] p-16`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
