const getNestingLevel = (array, level = 0) => (Array.isArray(array)
  ? Math.max(...array.map((element) => getNestingLevel(element, level + 1))) : level);

const flattenArray = (array) => {
  const nestingLevel = getNestingLevel(array);
  const flattenDepth = nestingLevel > 1 ? nestingLevel : 1;
  const flattened = array.flat(flattenDepth);
  return { nestingLevel, flattened };
};

const nestedArray = [1, [2, [3, 4], 5], [6, 7, [8, [9, 10]]]];
const { nestingLevel, flattened } = flattenArray(nestedArray);

console.log('Nesting Level:', nestingLevel);
console.log('Flattened Array:', flattened);
