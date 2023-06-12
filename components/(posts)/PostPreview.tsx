'use client'

import CoverImage from 'components/CoverImage'
import CursorTrackingImage from 'components/CursorTrackingImage'
import Date from 'components/DateDisplay'
import SectionSeparator from 'components/SectionSeparator'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'
import { useState } from 'react'

import CategoryList from '../CategoryList'

export default function PostPreview(props: Omit<Post, '_id'>) {
  const [hovered, setHovered] = useState(false)

  const { title, coverImage, date, categories = [], slug } = props

  return (
    <Link
      href={`/posts/${slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {coverImage && (
        <CursorTrackingImage
          image={coverImage}
          active={hovered}
          className="hidden md:absolute"
        />
      )}

      <div className=" flex w-full flex-col justify-between gap-x-8 py-4 px-2 align-middle bg-blend-difference sm:flex-row  sm:border-t-2 sm:border-black">
        {/* Mobile image */}
        <div className="py-1 sm:hidden">
          <CoverImage image={coverImage} className="rounded-sm" />
        </div>

        <div className="mb-2 font-mono text-sm sm:hidden">
          <Date dateString={date} />
        </div>

        <div className=" flex max-w-[500px] gap-x-8">
          <div className="mb-2 hidden font-mono text-sm sm:inline-block">
            <Date dateString={date} />
          </div>
          <h4>{title}</h4>
        </div>

        <CategoryList categories={categories} disableAdd viewOnly />
      </div>
    </Link>
  )
}
