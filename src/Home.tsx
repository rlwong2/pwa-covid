import React from "react";
import PropTypes from "prop-types";

import Graph from './Graph';

const Home: React.FC = (currentData: any) => (
  <div>
    <h1>COVID-19 Tracker</h1>
    <Graph {...currentData} />
  </div>
);

Home.propTypes = {
  currentData: PropTypes.array.isRequired,
}

export default Home;