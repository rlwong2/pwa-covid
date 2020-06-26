import React from 'react';

import originalData from './data'
import moment from 'moment';

import { Chart } from 'react-charts';

export interface Series {
    label: string,
    data: Array<string>,
}

const defs = (
  <defs>
    <linearGradient id="0" x1="0" x2="0" y1="1" y2="0">
      <stop offset="0%" stopColor="#17EAD9" />
      <stop offset="100%" stopColor="#6078EA" />
    </linearGradient>
    <linearGradient id="1" x1="0" x2="0" y1="1" y2="0">
      <stop offset="0%" stopColor="#FCE38A" />
      <stop offset="100%" stopColor="#F38181" />
    </linearGradient>
    <linearGradient id="2" x1="0" x2="0" y1="1" y2="0">
      <stop offset="0%" stopColor="#42E695" />
      <stop offset="100%" stopColor="#3BB2B8" />
    </linearGradient>
    <linearGradient id="3" x1="0" x2="0" y1="1" y2="0">
      <stop offset="0%" stopColor="#F4Ea0A" />
      <stop offset="100%" stopColor="#df4081" />
    </linearGradient>
  </defs>
)

export default function Graph (data: any) {
  const chartData = React.useMemo(() => {

    const parsed = originalData.map((item: any) => {
      let date = moment(item.date,'YYYYMMDD');
      let obj = [ date, item.total ]

      return obj
    })

    let chart = [
      {
        label: 'Illinois',
        data: parsed
      }
    ]
    console.log(chart)
    return chart;
  }, [ data ])

  const series = React.useMemo(
    () => ({
      showPoints: false
    }),
    []
  )

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'time', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    []
  )

  const getSeriesStyle = React.useCallback(
    () => ({
      transition: 'all .5s ease'
    }),
    []
  )

  const getDatumStyle = React.useCallback(
    () => ({
      transition: 'all .5s ease'
    }),
    []
  )

  return (
    <div
      style={{
        width: '90vw',
        height: '300px',
      }}
    >
      <Chart
        data={chartData}
        axes={axes}
        series={series}
        getSeriesStyle={getSeriesStyle}
        getDatumStyle={getDatumStyle}
        tooltip
      />
    </div>
  )
}