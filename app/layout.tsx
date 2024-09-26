import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header'
import { quickSand } from '@/utils/fonts'
import Footer from '@/components/footer'
import { ReactQuery } from '@/utils/useReactQuery'

export const metadata: Metadata = {
  title: 'RecipeLand',
  description: 'One stop to all ur recipe needs!!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={quickSand.className}>
        <ReactQuery>
          <Header />
          {children}
          <Footer />
        </ReactQuery>
      </body>
    </html>
  )
}
