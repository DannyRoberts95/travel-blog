import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'

import authorType from './author'

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

// export default defineType({
//   name: 'category',
//   title: 'category',

//   type: 'document',
//   fields: [
//     defineField({
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//       validation: (rule) => rule.required(),
//     }),
//     defineField({
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'title',
//         maxLength: 96,
//         isUnique: (value, context) => context.defaultIsUnique(value, context),
//       },
//       validation: (rule) => rule.required(),
//     }),

//     defineField({
//       name: 'description',
//       title: 'Description',
//       type: 'text',
//     }),
//   ],
//   preview: {
//     select: {
//       title: 'title',
//     },
//     prepare({ title }) {
//       return { title }
//     },
//   },
// })

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
