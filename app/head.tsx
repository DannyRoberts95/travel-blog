// import { Analytics } from '@vercel/analytics/react'
import BlogMeta from 'components/BlogMeta'
import MetaDescription from 'components/MetaDescription'
import * as demo from 'lib/demo.data'
import { getSettings } from 'lib/sanity.client'

export default async function PageHead() {
  const { title = demo.title, description = demo.description } =
    await getSettings()

  return (
    <>
      <title>{title}</title>
      <BlogMeta />
      <MetaDescription value={description} />
    </>
  )
}
