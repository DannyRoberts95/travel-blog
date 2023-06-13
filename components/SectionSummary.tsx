'use client'

import React from 'react'

import ShareButtons from './ShareButtons'

function SectionSummary({
  title,
  description,
  socials = true,
}: {
  title: string
  description: string
  socials: boolean
}) {
  return (
    <div>
      <h1 className="my-6">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <p className="">{description}</p>

        {socials && (
          <ShareButtons className="align-self-top justify-self-end" />
        )}
      </div>
    </div>
  )
}

export default SectionSummary
