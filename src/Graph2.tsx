import React, { useMemo } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { Tooltip, ArgumentAxis } from '@devexpress/dx-react-chart-material-ui';

import moment from 'moment';
import originalData from './data';

export interface Series {
    label: string,
    data: Array<string>,
}

export default function Graph () {
  
  const chartData = useMemo(() => {
    let parsed = originalData.map((item: any) => {
      const date = moment(item.date,'YYYYMMDD').format()
      return {
        x: date,
        y: item.total
      }
    })
    console.log(parsed)
    return parsed.reverse();
  }, []);

  return (
    <Paper>
        <Chart
          data={chartData}
        >
          <Animation />
          <Tooltip />
          <ArgumentAxis />
          <LineSeries
            valueField="y"
            argumentField="x"
          />
        </Chart>
      </Paper>
  );
}