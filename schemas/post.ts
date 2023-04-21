import { BookIcon } from '@sanity/icons'
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

export default defineType({
  name: 'post',
  title: 'Post',
  icon: BookIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      title: 'Location',
      name: 'location',
      type: 'geopoint',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'date',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    }),
    defineField({
      name: 'categories',
      title: 'Category Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
    },
    prepare({ title, date }) {
      const dateString = [
        date && `${format(parseISO(date), 'LLLL d yyyy')}`,
      ].filter(Boolean)

      return { title: dateString.join(' '), subtitle: title }
    },
  },
})
