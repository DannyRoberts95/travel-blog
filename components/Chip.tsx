import React from 'react'

// width: fit-content;
//   padding: 3px 4px;
//   margin-right: 4px;

//   display: inline-block;

//   text-transform: uppercase;
//   font-size: 0.875rem;

type PropTypes = {
  label: string
  selected: boolean
  viewOnly: boolean
  onClick?: () => void | null
}

const Chip = (props: PropTypes) => {
  const { label, selected, viewOnly, ...others } = props
  return (
    <div
      className={'w-fit font-mono text-xs uppercase'}
      style={{
        opacity: selected ? 1 : 0.66,
        cursor: viewOnly ? `auto` : `pointer`,
      }}
      {...others}
    >
      {label}
    </div>
  )
}

export default Chip
