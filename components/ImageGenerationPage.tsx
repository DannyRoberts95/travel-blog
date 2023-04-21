'use client'

import Container from 'components/BlogContainer'
import Layout from 'components/BlogLayout'
import type { Post, Settings } from 'lib/sanity.queries'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

type PropTypes = {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

const abortController = new AbortController()

export default function ImageGenerationPage(props: PropTypes) {
  const { preview, loading, posts, settings } = props

  const promptInput = useRef()

  const [data, setData] = useState(null)

  const generateImage = async (prompt: string) => {
    console.log('Generating Image: ', prompt)

    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: 'A beautiful bunch of tropical flowers',
        }),
        signal: abortController.signal,
      })

      const data = await response.json()
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        )
      }

      console.log(data.result)
      setData(data.result)
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error)
      alert(error.message)
    }
  }

  useEffect(() => {
    // console.log('Generating image in index...')
    // generateImage('A little cat')
    return () => abortController.abort()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    // e.preventDeafault()
    if (promptInput?.current) {
      const { value } = promptInput?.current
      generateImage(value)
    }
  }

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Container>
          {data ? (
            <section>
              <div className="w-full">
                {/* <imput ref={promptInput} type={'text'} /> */}
                <button onClick={handleSubmit}>Generate Image</button>
              </div>
              <div className="mb-8 md:mb-16">
                <Image
                  alt={'AI Image'}
                  width={500}
                  height={500}
                  src={data.data[0].url}
                  priority
                />
              </div>
            </section>
          ) : (
            'LOADING'
          )}
        </Container>
      </Layout>
    </>
  )
}
