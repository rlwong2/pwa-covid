import React from 'react';
import originalData from './data'
import moment from 'moment';

import { Chart } from 'react-charts';

export interface Series {
    label: string,
    data: Array<string>,
}

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