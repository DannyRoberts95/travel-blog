import SeriesIndexPage from 'components/(series)/SeriesIndexPage'
import { getAllSeries, getSettings } from 'lib/sanity.client'

export default async function IndexRoute() {
  // Fetch queries in parallel
  const [settings, series] = await Promise.all([getSettings(), getAllSeries()])

  return <SeriesIndexPage series={series} settings={settings} />
}
