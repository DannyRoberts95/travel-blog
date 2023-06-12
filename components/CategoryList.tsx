'use client'

import classNames from 'classnames'
import clsxm from 'lib/clsxm'
import { Category } from 'lib/sanity.queries'
import React, { SyntheticEvent, useRef, useState } from 'react'

import Chip from './Chip'
import styles from './styleModules/ChipList.module.css'

// .root {
//   max-width: 100%;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   gap: 5px;
// }

type PropTypes = {
  categories: Category[]
  selectedCategories?: string[]
  handleSelect?: (val: string) => void
  viewOnly?: boolean
  disableAdd?: boolean
  className?: string
}

const ChipList = (props: PropTypes) => {
  const { categories = [], className, handleSelect, viewOnly = false } = props

  return (
    <div className={clsxm('my-2 flex  flex-wrap gap-5', className)}>
      {/* Select a category */}
      {categories
        .map(({ title }) => title)
        .sort()
        .map((cat) => (
          <Chip
            key={cat}
            label={cat}
            onClick={() => handleSelect && handleSelect(cat)}
            viewOnly={viewOnly}
          />
        ))}
    </div>
  )
}

export default ChipList
