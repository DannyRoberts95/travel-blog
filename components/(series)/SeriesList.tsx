import SeriesPreview from 'components/(series)/SeriesPreview'
import SectionSeparator from 'components/SectionSeparator'
import type { Series } from 'lib/sanity.queries'

export default function SeriesList({
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

      <SectionSeparator />

      <div className="md:gap-x-18 mb-32 grid grid-cols-1 gap-y-8 gap-x-8 lg:grid-cols-2">
        {series.map((series) => (
          <SeriesPreview series={series} key={series._id} />
        ))}
      </div>
    </section>
  )
}
