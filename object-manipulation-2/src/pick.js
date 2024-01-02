/* exported pick */
function pick(source, keys) {
  const obj = {};
  for (const key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      obj[key] = source[key];
    }
  }

  return obj;
}
