import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import CoverImage from 'components/CoverImage'
import Date from 'components/DateDisplay'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

import CategoryList from '../CategoryList'

export default function PostPreview(props: Omit<Post, '_id'>) {
  const { title, coverImage, date, categories = [], slug } = props

  return (
    <div className="relative h-[300px] overflow-hidden rounded-lg shadow-md  grayscale transition-all hover:grayscale-0">
      <Link href={`/posts/${slug}`} className="">
        {coverImage && (
          <div className="absolute mb-5 h-full w-full transition-all hover:scale-105 ">
            <CoverImage
              slug={slug}
              title={title}
              image={coverImage}
              priority={false}
            />
          </div>
        )}

        <div className="absolute top-0 right-0 p-4">
          <ArrowRightCircleIcon className=" h-12 w-12 text-white" />
        </div>

        <div className="absolute top-0 mb-4 w-full p-4 text-3xl">
          <span className="text-white">
            <CategoryList categories={categories} disableAdd viewOnly />
          </span>
        </div>

        <div className="absolute bottom-0  w-full bg-gradient-to-t from-black to-transparent p-4 text-3xl">
          <p className="mb-2 font-mono text-sm text-white">
            <Date dateString={date} />
          </p>
          <h3 className="font-mono text-2xl capitalize leading-snug text-white">
            {title}
          </h3>
        </div>
      </Link>
    </div>
  )
}
