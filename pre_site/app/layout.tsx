import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "互联网IT岗情数据分析站",
  description: "这里是互联网IT岗情数据分析站",
};



  

import Header from './components/header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

