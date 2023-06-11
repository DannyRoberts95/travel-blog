'use client'

import { usePreview } from 'lib/sanity.preview'
import {
  type Series,
  type Settings,
  seriesAndMoreSeriesQuery,
  settingsQuery,
} from 'lib/sanity.queries'

import SeriesIndexPage from './SeriesIndexPage'

export default function PreviewPostPage({
  token,
  slug,
}: {
  token: null | string
  slug: string
}) {
  const data: { series: Series; moreSeries: Series[] } = usePreview(
    token,
    seriesAndMoreSeriesQuery,
    {
      slug,
    }
  ) || { post: null, morePosts: [] }
  const settings: Settings = usePreview(token, settingsQuery) || {}

  return <SeriesIndexPage preview series={data} settings={settings} />
}
