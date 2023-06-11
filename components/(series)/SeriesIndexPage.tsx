import SeriesList from 'components/(series)/SeriesList'
import Container from 'components/BlogContainer'
import Layout from 'components/BlogLayout'
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
          <SeriesList
            title=""
            series={[...series, ...series, ...series, ...series]}
          />
          {/* <SeriesList title="" series={series} /> */}
        </Container>
      </Layout>
    </>
  )
}
