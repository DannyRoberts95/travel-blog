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
              width={60}
              height={60}
              alt="DHD Logo"
              priority
            />
          </Link>

          <nav className="flex gap-2">
            {/* Menu */}
            <Link href="/">Home</Link>
            <Link href="/posts">Posts</Link>
            <Link href="/series">Series</Link>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header
