import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'

import authorType from './author'

export default {
  type: 'object',
  name: 'illustration',
  title: 'Illustration',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Caption (Optional)',
    }),
    defineField({
      name: 'alt',
      description:
        'Alternative text that describes the image. Important for SEO and screen readers.',
      type: 'string',
      title: 'Alt text',
    }),
  ],
  preview: {
    select: {
      title: 'caption',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      }
    },
  },
}
