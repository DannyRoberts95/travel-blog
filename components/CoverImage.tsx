import clsxm from 'lib/clsxm'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'

interface CoverImageProps {
  title?: string
  slug?: string
  className?: string
  image: any
  priority?: boolean
}

export default function CoverImage(props: CoverImageProps) {
  const { title, slug, image: source, priority, className, ...others } = props
  const image = source?.asset?._ref ? (
    <Image
      className={clsxm(
        'aspect-video h-auto w-full rounded-xl bg-cover',
        className
      )}
      width={1920}
      height={1280}
      alt={`Cover Image for ${title}`}
      src={urlForImage(source).width(1920).height(1280).url()}
      priority={priority}
      {...others}
    />
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
  )

  return (
    <div className="overflow-hidden rounded-lg sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
