import PostPage from 'components/(posts)/PostPage'
import PreviewPostPage from 'components/(posts)/PreviewPostPage'
import { PreviewSuspense } from 'components/PreviewSuspense'
import {
  getAllPostsSlugs,
  getPostAndMoreStories,
  getSettings,
} from 'lib/sanity.client'
// import { previewData } from 'next'

export async function generateStaticParams() {
  return await getAllPostsSlugs()
}

export default async function SlugRoute({
  params,
}: {
  params: { slug: string }
}) {
  const data = await getPostAndMoreStories(params.slug)
  const settings = await getSettings()

  // Start fetching settings early, so it runs in parallel with the post query
  // if (previewData()) {
  //   const token = previewData().token || null
  //   const data = getPostAndMoreStories(params.slug, token)
  //   return (
  //     <PreviewSuspense
  //       fallback={
  //         <PostPage
  //           loading
  //           preview
  //           data={await data}
  //           settings={await settings}
  //         />
  //       }
  //     >
  //       <PreviewPostPage token={token} slug={params.slug} />
  //     </PreviewSuspense>
  //   )
  // }

  return <PostPage data={data} settings={settings} />
}

// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
export const revalidate = 1
