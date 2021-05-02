import React from 'react';
import { useSelector } from 'react-redux';
import navigator from '../utils/navigator';

const SectionBody = (props) => {
  const { hasOffset = false } = props;
  const currentView = useSelector((state) => state.navigation.view);
  return <div>{navigator[currentView] || <div />}</div>;
};

export default SectionBody;
