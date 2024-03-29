/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
import { PortableText } from '@portabletext/react'

import CoverImage from './CoverImage'
import styles from './styleModules/RenderPortableText.module.css'

export default function PostBody({ content }) {
  const myPortableTextComponents = {
    types: {
      image: ({ value }) => {
        return <CoverImage title={'title'} image={value.image} />
      },
    },
  }

  return (
    <div className={`mx-auto max-w-2xl ${styles.portableText}`}>
      <PortableText value={content} components={myPortableTextComponents} />
    </div>
  )
}
