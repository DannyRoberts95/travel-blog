import SeriesPage from 'components/SeriesPage'
import { getAllSeries, getSettings } from 'lib/sanity.client'
import React from 'react'

export default async function SeriesIndexPage() {
  const [settings, series] = await Promise.all([getSettings(), getAllSeries()])

  return (
    <SeriesPage
      settings={settings}
      series={[...series, ...series, ...series, ...series]}
    />
  )
  // return <SeriesPage settings={settings} series={series} />
}
