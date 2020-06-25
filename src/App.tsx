import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';

import About from './About';
import Home from './Home';

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

  const [ location, setLocation ] = useState<string>('');
  const [ data, setData ] = useState<object[]>([]);
  const [ currentData, setCurrentData ] = useState<any>([]);

  useEffect(() => {
    setLocation('il')

    axios.get(`https://covidtracking.com/api/v1/states/${location}/daily.json`)
      .then((res) => {
        setData(res.data)

        const result: Array<object> = [];
        const series: Series = {
            label: 'Illinois',
            data: []
        }

        for (var i of res.data) {
            let pair: DataPoint = {
              x: i.date,
              y: i.total
            }
            series.data.push(pair);
        }

        result.push(series)
        console.log(result)

        setCurrentData(result)

      })
      .catch((err) => console.log(err))
  }, [])

  return(
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> 
            <Home {...currentData} />
          </Route>
        </Switch>
      </Suspense>
    </Router>
)};

export default App;