import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

import Graph from './Graph';

const HomeBox = styled.div`
  width: 95%;
  max-width: 640px;
`

const Home: React.FC = (data: any) => (
  <HomeBox>
    <h1>COVID-19 Tracker</h1>
    <Graph {...data}/>
  </HomeBox>
);

export default Home;