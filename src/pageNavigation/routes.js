import React from 'react';
import Home from '../components/Home';
import Player from '../components/Player';

const routes = {
  '/': () => <Home />,
  '/player': () => <Player />,
};

export default routes;
