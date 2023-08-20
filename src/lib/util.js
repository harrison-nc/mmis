/**@param {string} a */
export const slug = (a) => {
  return a.replace(" ", "-").toLowerCase();
};

console.log(slug("Main Activities"));