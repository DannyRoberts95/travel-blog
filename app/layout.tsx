import 'tailwindcss/tailwind.css'

// import '../styles/globals.css'
import { Inconsolata, Zen_Dots, Zen_Old_Mincho } from '@next/font/google'
import { Inter, Roboto_Mono } from 'next/font/google'

const zen_dots = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-zen-dots',
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
    <html lang="en" className={`${zen_dots.variable} ${roboto_mono.variable}`}>
      <head />
      <body className="bg-white text-black">
        <Header />
        {children}
      </body>
    </html>
  )
}
