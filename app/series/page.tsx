import SeriesIndexPage from 'components/(series)/SeriesIndexPage'
import { getAllPosts, getAllSeries, getSettings } from 'lib/sanity.client'

// FIXME: https://github.com/sanity-io/nextjs-blog-cms-sanity-v3/issues/95

export default async function IndexRoute() {
  // Fetch queries in parallel
  const [settings, series] = await Promise.all([getSettings(), getAllSeries()])

  return <SeriesIndexPage series={series} settings={settings} />
}
