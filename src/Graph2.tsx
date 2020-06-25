import React from 'react';
import styled from 'styled-components';
import { Chart } from 'react-charts';

export interface Series {
    label: string,
    data: Array<string>,
}

const GraphBox = styled.div`
  width: 100vw;
  height: 35vh;
`

export default function Line (currentData: any) {

    const graphData = function(arr: Array<any>) {
        const result: object[] = [];
        const series: Series = {
            label: 'Illinois',
            data: []
        }

        for (var i of arr) {
            let pair: any = {}
            pair[i.date] = i.total;
            series.data.push(pair);
        }

        result.push(series)

        console.log(result)

        return result;
    }

  const series = React.useMemo(
    () => ({
      showPoints: false
    }),
    []
  )
  
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'time', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  return (
    <div>
        Graph<br />
        <Chart data={currentData} series={series} axes={axes} />
    </div>
  )
}