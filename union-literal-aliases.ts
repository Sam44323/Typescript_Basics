//example of creating type aliases for storing types and for redundant tasks

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-string';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result: number | string;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(30, 25, 'as-number');
console.log(combineAges);

const combineStringAges = combine('30', '45', 'as-number');
console.log(combineStringAges);

const combineNames = combine('Sam', 'Charlie', 'as-string');
console.log(combineNames);

//example of storing functions that takes input types as an object

type NameFunctionInputType = { name: string; age: number };

function showName(user: NameFunctionInputType) {
  console.log(user.name, user.age);
}

showName({
  name: 'Sam Henrick',
  age: 15,
});
