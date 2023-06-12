import SeriesPreview from 'components/(series)/SeriesPreview'
import SectionSeparator from 'components/SectionSeparator'
import type { Series } from 'lib/sanity.queries'

export default function SeriesList({ series }: { series: Series[] }) {
  return (
    <section className="md:gap-x-18 mb-32 grid grid-cols-1 gap-y-8 gap-x-8 lg:grid-cols-2">
      {series.map((series) => (
        <SeriesPreview series={series} key={series._id} />
      ))}
    </section>
  )
}
