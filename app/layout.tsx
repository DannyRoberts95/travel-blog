import 'tailwindcss/tailwind.css'
import '@styles/globals.css'

import { Crimson_Text, Cutive_Mono, Zen_Dots } from 'next/font/google'

const crimson_text = Crimson_Text({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-crimson-text',
})

const cutive_mono = Cutive_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-cutive-mono',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${crimson_text.variable} ${cutive_mono.variable}`}
    >
      <head />
      <body className="bg-white text-black">{children}</body>
    </html>
  )
}
