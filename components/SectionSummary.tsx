import React from 'react'

function SectionSummary({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div>
      <h2 className="my-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <p className="">{description}</p>
      </div>
    </div>
  )
}

export default SectionSummary
