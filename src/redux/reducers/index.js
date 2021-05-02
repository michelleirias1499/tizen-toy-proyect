import { combineReducers } from 'redux';
import * as navigation from './navigationReducers';
export default combineReducers(Object.assign(navigation));
