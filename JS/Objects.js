function findUniq(arr) {
  const elementCounts = {};

  // Count the occurrences of each element
  arr.forEach(el => {
    elementCounts[el] = (elementCounts[el] || 0) + 1;
  });

  // Find the element that occurs exactly once
  for (let key in elementCounts) {
    if (elementCounts[key] === 1) {
      return Number(key);
    }
  }

  // If no unique element is found, return undefined or an appropriate value
  return undefined;
}
console.log(findUniq([0,0,1,1,389,388,387,399,399,388,389,1]))