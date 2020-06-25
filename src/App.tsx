import React, { useState, useEffect } from "react";
import axios from 'axios';
import moment from 'moment';

import Home from './Home';
import originalData from './data'


// const About = lazy(() => import("./About"));
// const Home = lazy(() => import("./Home"));

export interface Series {
  label: string,
  data: Array<object>,
}

export interface DataPoint {
  x: string,
  y: number
}

const App: React.FC = () => {

  const [ location, setLocation ] = useState<string>('il');
  const [ data, setData ] = useState<any>([]);

  useEffect(() => {
    axios.get(`https://covidtracking.com/api/v1/states/${location}/daily.json`)
      .then((res) => {

        const chartData = () => {
          const parsed = originalData.map((item: any) => {
            let date = moment(item.date,'YYYYMMDD').format();
            let obj = {
              x: date, 
              y: item.total
            }

            return obj
          })
          let chart = [
            {
              label: 'Illinois',
              data: parsed
            }
          ]
          console.log(chart)
          return chart
        }

        setData(chartData)

      })
      .catch((err) => console.log(err))
  }, [ location ])

  return(
    <div>
      {data.length > 0 && <Home {...data} />}
    </div>
)};

export default App;