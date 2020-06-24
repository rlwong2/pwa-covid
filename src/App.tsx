import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';

const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));

const App: React.FC = () => {

  const [ location, setLocation ] = useState('il');
  const [ data, setData ] = useState([]);

  useEffect(() => {
    axios.get(`https://covidtracking.com/api/v1/states/${location}/daily.json`)
      .then((res) => {
        setData(res.data)
        console.log(res.data)
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
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </Router>
)};

export default App;