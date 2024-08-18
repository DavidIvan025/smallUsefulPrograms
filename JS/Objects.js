// Function to iterate without recursion. (Nested high-level objects)
function forEachNested(O, f, cur){
  O = [ O ]; // ensure that f is called with the top-level object
  while (O.length) // keep on processing the top item on the stack
      if(
         !f( cur = O.pop() ) && // do not spider down if `f` returns true
         cur instanceof Object && // ensure cur is an object, but not null 
         [Object, Array].includes(cur.constructor) //limit search to [] and {}
      ) O.push.apply(O, Object.values(cur)); //search all values deeper inside
}

/* ---------------------------------[jsop01] Find unique value on a provided array----------------------------------------- */

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
