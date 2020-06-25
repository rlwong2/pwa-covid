import React from "react";
import PropTypes from "prop-types";

import Graph from './Graph';

const Home: React.FC = (data: any) => (
  <div>
    <h1>COVID-19 Tracker</h1>
    <Graph {...data}/>
  </div>
);

Home.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Home;