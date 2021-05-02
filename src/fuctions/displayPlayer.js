let flag;
export function displayPlayerFlag(flag) {
  let displayPlayer = 'none';
  if (flag === true) {
    return (displayPlayer = 'block');
  } else {
    return displayPlayer;
  }
}
