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

export default function Page(props: PropTypes) {
  const { preview, loading } = props

  const promptInput = useRef()

  const [data, setData] = useState(null)

  const generateImage = async (prompt) => {
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

      setData(data.result)
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error)
      alert(error.message)
    }
  }

  useEffect(() => {
    return () => abortController.abort()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    // e.preventDeafault()
    console.log(promptInput)
    if (promptInput?.current) {
      const { value } = promptInput?.current
      // generateImage(value)
    }
  }

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Container>
          <section>
            <div className="w-full">
              <input ref={promptInput} />
              <button onClick={handleSubmit}>Generate Image</button>
            </div>
            <div className="mb-8 md:mb-16">
              {data ? (
                <Image
                  alt={'AI Image'}
                  width={500}
                  height={500}
                  src={data.data[0].url}
                  priority
                />
              ) : (
                'LOADING'
              )}
            </div>
          </section>
        </Container>
      </Layout>
    </>
  )
}
