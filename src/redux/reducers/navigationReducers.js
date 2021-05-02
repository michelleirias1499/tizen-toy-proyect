import createReducer from '../../helpers/createReducer';
import { SET_CURRENT_VIEW } from '../../helpers/actionTypes';
import { SCREEN_COMPONENTS } from '../../utils/constants';

const initialState = {
  view: '',
  //   sectionScreen: SCREEN_COMPONENTS.LANDING,
  viewProps: null,
};
const screens = [SCREEN_COMPONENTS.LANDING];

export const navigation = createReducer(initialState, {
  [SET_CURRENT_VIEW]: (state, action) => {
    const { payload } = action;
    const { view, viewProps } = payload;
    // let section = {};
    // if (screens.indexOf(view) >= 0) {
    //   section = { sectionScreen: view };
    // }
    return {
      ...state,
      view,
      viewProps,
      //   ...section,
    };
  },
});
