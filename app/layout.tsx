import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header'
import { openSans } from '@/utils/fonts'

export const metadata: Metadata = {
  title: 'RecipeLand',
  description: 'One stopp to all ur recipe needs!!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={openSans.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
