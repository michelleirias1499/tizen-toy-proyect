import React, { useMemo } from 'react';
import FocusableItem from './FocusableItem';
import { supplantInfoOnKey } from './focusableHelper';

const Focusable = (props) => {
  //  Parsing props
  const {
    children,
    className,
    tabIndex = 0,
    itemRef,
    focusKey = '',
    focusKeyValue, // Value to supplant on focus key
    style,
    itemId = '',
    useFocusableScrolling,
    //  Callbacks to send to focusable item (optional)
    onEnterPress,
    onKeyDown,
    onBecameFocused,
    onBecameBlurred,
    onArrowPress,
    blockNavigationOut,
  } = props;

  //  Getting the focus key with the value replaced
  const focusKeyToUse = useMemo(
    () => supplantInfoOnKey(focusKeyValue, focusKey),
    [focusKeyValue],
  );

  const onBlurred = () => {
    if (onBecameBlurred) {
      onBecameBlurred();
    }
  };
  //  Function for watching on became focused (used for scrolling)
  const onFocused = (params) => {
    //  Using on became focused from parent
    if (onBecameFocused) {
      onBecameFocused();
    }
    //  Default behavior for on became focused
    if (!useFocusableScrolling) {
      return;
    }
    const { node } = params;
    if (!node) {
      return;
    }
    node.scrollIntoView({
      behavior: 'smooth',
      inline: 'nearest',
      block: 'nearest',
    });
  };

  //  Function to handle on key press
  const handleKeyDown = (event) => {
    if (!event || !event.keyCode) {
      return;
    }
    const { keyCode } = event;
    if (!onKeyDown) {
      return;
    }
    onKeyDown(keyCode);
  };

  //  Rendering
  return (
    <FocusableItem
      itemId={itemId}
      className={className}
      tabIndex={tabIndex}
      ref={itemRef}
      onBecameFocused={onFocused}
      focusKey={focusKeyToUse}
      onKeyDown={handleKeyDown}
      onEnterPress={onEnterPress}
      style={style}
      onBecameBlurred={onBlurred}
      onArrowPress={onArrowPress}
      blockNavigationOut={blockNavigationOut}
    >
      {children}
    </FocusableItem>
  );
};

export default Focusable;
