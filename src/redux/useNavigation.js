import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreators } from '../redux/actions';

const useNavigation = () => {
  const defaultDispatch = useDispatch();
  const dispatch = useCallback(defaultDispatch, []);

  function changeView(view, viewProps) {
    dispatch(ActionCreators.setCurrentView(view, viewProps));
  }
  return changeView;
};

export default useNavigation;
