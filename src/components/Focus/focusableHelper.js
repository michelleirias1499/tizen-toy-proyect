export const focusKeys = {
  // screens containers
  row: 'movies-row',
  landing: 'landing',
};

export const supplantInfoOnKey = (value, key = '') => {
  if (!value) {
    return key;
  }
  return key.toString().replace('{value}', value);
};

export const buildItemFocusableKey = (item, type) => {
  if (!item) {
    return undefined;
  }
  //  Getting focus key depending on item type
  const focusKey = focusKeys[`${type}Item`];
  if (!focusKey) {
    return undefined;
  }
  //  Getting id from item
  const { id } = item;
  if (!id) {
    return undefined;
  }
  return supplantInfoOnKey(id, focusKey);
};
