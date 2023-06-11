'use client'

import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import CoverImage from 'components/CoverImage'
import CursorTrackingImage from 'components/CursorTrackingImage'
import Date from 'components/DateDisplay'
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
      <div className="flex w-full items-start justify-between gap-x-8 border-t-2 border-black py-2  align-middle">
        {coverImage && (
          <CursorTrackingImage image={coverImage} active={hovered} />
        )}

        <div className=" flex max-w-[500px] gap-x-8">
          <div className="mb-2 font-mono text-sm">
            <Date dateString={date} />
          </div>
          <h3 className="font-mono text-lg capitalize leading-snug ">
            {title}
          </h3>
        </div>

        <CategoryList categories={categories} disableAdd viewOnly />
      </div>
    </Link>
  )
}
