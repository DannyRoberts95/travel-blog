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

  if (!active) return null

  const src = urlForImage(source).height(1080).width(1080).url()

  return (
    <div
      ref={container}
      className={`fixed left-[50%] top-[50%] -z-10 hidden w-[50%] -translate-x-1/2  -translate-y-1/2 sm:inline `}
    >
      <Image
        className={clsxm('aspect-square h-auto rounded-lg ', className)}
        width={1080}
        height={1080}
        alt={caption || 'An illustrative image'}
        src={src}
        placeholder="blur"
        blurDataURL={src}
      />
    </div>
  )
}

export default CursorTrackingImage
