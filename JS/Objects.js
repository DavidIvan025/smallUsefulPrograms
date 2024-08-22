// Function to iterate without recursion. (Nested high-level objects)
function forEachNested(O, f, cur) {
  O = [O]; // ensure that f is called with the top-level object
  while (O.length) // keep on processing the top item on the stack
    if (
      !f(cur = O.pop()) && // do not spider down if `f` returns true
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
console.log(findUniq([0, 0, 1, 1, 389, 388, 387, 399, 399, 388, 389, 1]))

/* ---------------------------------[jsop01] Replace letters by summing the 13th of every letter of the alphabet----------------------------------------- */

function rot13(message) {
  var alpha = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21,
    v: 22, w: 23, x: 24, y: 25, z: 26
  };
  var i, lastString = [];

  for (i = 0; i < message.length; i += 1) {
    var currentChar = message[i].toLowerCase();

    if (alpha.hasOwnProperty(currentChar)) {
      var currentIndex = alpha[currentChar];
      var newIndex = currentIndex + 13;

      if (newIndex > 26) {
        newIndex = newIndex - 26;
      }

      for (const [key, value] of Object.entries(alpha)) {
        if (value === newIndex) {
          var newChar = key;
          lastString.push(message[i] === currentChar ? newChar : newChar.toUpperCase());
          break;
        }
      }
    } else {
      lastString.push(message[i]);
    }
  }
  return lastString.join('');
}
// console.log(rot13("test"));