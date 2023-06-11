import 'tailwindcss/tailwind.css'

// import '../styles/globals.css'
// import {
//   Inconsolata,
//   Inter,
//   Noto_Sans_Mono,
//   Zen_Dots,
//   Zen_Old_Mincho,
// } from '@next/font/google'
import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

import Header from 'components/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <head />
      <body className="bg-white text-black">
        <Header />
        {children}
      </body>
    </html>
  )
}
