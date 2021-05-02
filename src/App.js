import { object } from 'prop-types';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Landing from './components/Landing';
import navigation from './navigation/index';
import navigator from './utils/navigator';
navigation.init();
Object.freeze(navigation);

let newFlag;

function App() {
  const currentView = useSelector((state) => state.navigation.view);
  console.log('el current view', currentView);

  return (
    <div className="App">
      {navigator[currentView] || <Home />}
      {/* <Landing /> */}
    </div>
  );
}

export default App;
