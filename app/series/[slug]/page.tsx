import SeriesPage from 'components/(series)/SeriesPage'
import {
  getAllPostsSlugs,
  getAllSeriesSlugs,
  getSeriesAndMoreSeries,
  getSeriesBySlug,
  getSettings,
} from 'lib/sanity.client'

export async function generateStaticParams() {
  return await getAllSeriesSlugs()
}

export default async function SlugRoute({
  params,
}: {
  params: { slug: string }
}) {
  // Start fetching settings early, so it runs in parallel with the post query
  const settings = await getSettings()
  const { series, moreSeries } = await getSeriesAndMoreSeries(params.slug)

  /*
  import { PreviewSuspense } from 'components/PreviewSuspense'
  import { previewData } from 'next/headers'
  if (previewData()) {
    const token = previewData().token || null
    const data = getPostAndMoreStories(params.slug, token)
    return (
      <PreviewSuspense
        fallback={<PostPage loading preview data={await data} settings={await settings} />}
      >
        <PreviewPostPage token={token} slug={params.slug} />
      </PreviewSuspense>
    )
  }
  // */

  return (
    <SeriesPage series={series} moreSeries={moreSeries} settings={settings} />
  )
}

// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
export const revalidate = 1
