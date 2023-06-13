import Container from 'components/BlogContainer'
import clsxm from 'lib/clsxm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className={clsxm('flex w-full justify-center')}>
      <Container>
        <div className="flex w-full items-center justify-between py-4">
          <Link href="/">
            <Image
              src={`/icons/icon.png`}
              width={60}
              height={60}
              alt="DHD Logo"
              priority
            />
          </Link>

          <nav className="flex gap-6">
            {/* Menu */}
            <Link href="/posts">
              <h5>Articles</h5>
            </Link>
            <Link href="/series">
              <h5>Series</h5>
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header
