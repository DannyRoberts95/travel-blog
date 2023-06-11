import SeriesPreview from 'components/(series)/SeriesPreview'
import type { Series } from 'lib/sanity.queries'

export default function PostList({
  series,
  title = '',
}: {
  series: Series[]
  title: string
}) {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        {title}
      </h2>
      <div className="md:gap-x-18 mb-32 grid grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-2">
        {series.map((series) => (
          <SeriesPreview
            key={series._id}
            title={series.title}
            coverImage={series.coverImage}
            date={series.date}
            slug={series.slug}
            excerpt={series.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
