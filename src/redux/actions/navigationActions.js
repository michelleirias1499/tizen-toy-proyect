import { SET_CURRENT_VIEW } from '../../helpers/actionTypes';

export const setCurrentView = (currentView, viewProps) => ({
  type: SET_CURRENT_VIEW,
  payload: { view: currentView, viewProps },
});
