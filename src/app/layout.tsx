import './globals.css'

import type { Metadata } from 'next'
import Head from 'next/head'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: [
    '400',
    '800',
  ],
  style: [
    'normal',
    'italic',
  ],
  preload: true,
  fallback: ["sans-serif"],
})

export const metadata: Metadata = {
  title: 'Pietro | Software Engineer',
  description: 'Hi! My name is Pietro and this is my portfolio ;)',
  creator: "Pietro Piva Vieira",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>"
        />
        
        <title>Pietro | Software Engineer</title>
      </Head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
