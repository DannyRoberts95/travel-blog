'use client'

import React, { useEffect, useRef, useState } from 'react'

import CoverImage from './CoverImage'

function CursorTrackingImage({
  image,
  active,
}: {
  image: any
  active: boolean
}) {
  const container = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const updatePosition = (e) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    console.log('first')
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
      <CoverImage image={image} priority={false} />
    </div>
  )
}

export default CursorTrackingImage
