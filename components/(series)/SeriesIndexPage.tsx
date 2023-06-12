import SeriesList from 'components/(series)/SeriesList'
import Container from 'components/BlogContainer'
import Layout from 'components/BlogLayout'
import PageSummary from '@components/SectionSummary'
import SectionSeparator from 'components/SectionSeparator'
import type { Series, Settings } from 'lib/sanity.queries'

export default function SeriesIndexPage(props: {
  preview?: boolean
  loading?: boolean
  series: Series[]
  settings: Settings
}) {
  const { preview, loading, series, settings } = props

  // const { title = demo.title, description = demo.description } = settings || {}

  // const [latestPost, ...otherPosts] = posts

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Container>
          <PageSummary
            title="Stoa Series"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
          />
          <SectionSeparator />
          <SeriesList series={series} />
        </Container>
      </Layout>
    </>
  )
}
