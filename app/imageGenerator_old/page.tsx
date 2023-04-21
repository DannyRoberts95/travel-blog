import ImageGenerationPage from 'components/ImageGenerationPage'
import {
  getAllPostsSlugs,
  getPostAndMoreStories,
  getSettings,
} from 'lib/sanity.client'
import React from 'react'

function page() {
  return <ImageGenerationPage />
}

export default page

// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
export const revalidate = 60
