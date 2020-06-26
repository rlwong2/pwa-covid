import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
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
  const [ status, setStatus ] = useState<any>([]);

  useEffect(() => {
    axios.get(`https://covidtracking.com/api/v1/states/il/daily.json`)
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((err) => console.log(err))
  }, [ status ])

  return(
    <div>
      {data.length === 0 && <div>Loading</div>}
      {data.length > 0 && <Home {...data} />}
    </div>
)};

export default App;