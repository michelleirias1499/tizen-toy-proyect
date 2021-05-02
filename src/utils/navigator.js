import React from 'react';
import { SCREEN_COMPONENTS } from '../utils/constants';
import Landing from '../components/Landing';
import Home from '../components/Home';

const Navigator = {
  [SCREEN_COMPONENTS.LANDING]: <Landing />,
  [SCREEN_COMPONENTS.HOME]: <Home />,
};

export default Navigator;
