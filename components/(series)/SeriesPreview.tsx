import { Square3Stack3DIcon } from '@heroicons/react/24/outline'
import CoverImage from 'components/CoverImage'
import Date from 'components/DateDisplay'
import type { Series } from 'lib/sanity.queries'
import Link from 'next/link'

export default function SeriesPreview(props: { series: Series }) {
  const {
    series: { title, coverImage, date, slug, posts },
  } = props

  return (
    <div className="relative min-h-[300px] overflow-hidden rounded-lg shadow-md  grayscale transition-all hover:grayscale-0">
      <Link href={`/series/${slug}`}>
        {coverImage && (
          <div className="absolute mb-5 h-full w-full transition-all hover:scale-105 ">
            <CoverImage
              title={title}
              image={coverImage}
              priority={false}
              className="aspect-square sm:aspect-video"
            />
          </div>
        )}

        <div className="absolute top-0 left-0 mb-2 p-4  text-white">
          <Date dateString={date} />
        </div>

        <div className="absolute top-0 right-0 p-4">
          <p className=" text-white">
            {posts.length} Articles{' '}
            <Square3Stack3DIcon className="inline h-5 w-5" />{' '}
          </p>
        </div>

        <div className="absolute bottom-0  w-full bg-gradient-to-t from-black to-transparent p-4 text-3xl">
          <h3 className="font-mono text-2xl capitalize leading-snug text-white">
            {title}
          </h3>
        </div>
      </Link>
    </div>
  )
}
