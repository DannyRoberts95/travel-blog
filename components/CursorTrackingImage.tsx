'use client'

import clsxm from 'lib/clsxm'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

function CursorTrackingImage({
  image: source,
  className,
  active,
  caption = '',
}: {
  image: any
  active: boolean
  className?: string
  caption?: string
}) {
  const container = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const updatePosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', updatePosition)
  }, [])

  if (!active) return null

  return (
    <div
      ref={container}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      className={`absolute -z-10 max-w-[50%]`}
    >
      <Image
        className={clsxm(
          'aspect-square h-auto w-full rounded-lg bg-cover',
          className
        )}
        width={1080}
        height={1080}
        alt={caption || 'An illustrative image'}
        src={urlForImage(source).height(1080).width(1080).url()}
      />
    </div>
  )
}

export default CursorTrackingImage
