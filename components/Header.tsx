import Container from 'components/BlogContainer'
import clsxm from 'lib/clsxm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className={clsxm('flex w-full justify-center bg-white')}>
      <Container>
        <div className="flex w-full items-center justify-between py-4">
          <Link href="/">
            <Image
              src={`/icons/icon.png`}
              width={40}
              height={40}
              alt="DHD Logo"
            />
          </Link>

          <nav className="flex gap-2">
            {/* Menu */}
            <Link href="/">Links</Link>
            <Link href="/analytics">Analytics</Link>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header
