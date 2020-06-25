import React from 'react';
import { Chart } from 'react-charts';

export interface Series {
    label: string,
    data: Array<string>,
}

export default function Graph (data: any) {
  // const chartData = React.useMemo(() => data, [])

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
        data={data}
        axes={axes}
        series={series}
        getSeriesStyle={getSeriesStyle}
        getDatumStyle={getDatumStyle}
        tooltip
      />
    </div>
  )
}