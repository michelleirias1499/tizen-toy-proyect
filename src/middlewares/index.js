import { SET_CURRENT_VIEW } from '../helpers/actionTypes';
import EventTracker from '../controllers/tracker';

export const trackerRenditionMiddleware = (/* storeAPI */) => (next) => (
  action,
) => {
  if (action.type === SET_CURRENT_VIEW) {
    EventTracker.triggerEvent('rendition', action.payload);
  }
  return next(action);
};
