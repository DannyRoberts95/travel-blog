import '@styles/globals.css'

import Header from 'components/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="bg-white text-black">
        <Header />
        {children}
      </body>
    </html>
  )
}
