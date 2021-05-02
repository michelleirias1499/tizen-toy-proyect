import {
  initNavigation,
  setKeyMap,
} from '@noriginmedia/react-spatial-navigation';
import keys from './keys';

class NavigationManager {
  init() {
    initNavigation(/* { debug: true } */);
    setKeyMap({
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      enter: 13,
    });
    //  Variable to track on key pressed for buttons as play, return, etc
    //  Changes depending on platform
    this.keys = keys['tizenKeys'];
  }
}

const navigationManager = new NavigationManager();

export default navigationManager;
