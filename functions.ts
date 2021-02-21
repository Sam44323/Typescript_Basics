//return type of number

function add(n1: number, n2: number) {
  return n1 + n2;
}

//return type of void

function printResult(num: number) {
  console.log('Result is: ' + num);
}

printResult(add(5, 4));

//using the function for declaring the type function that should be allowed to store in this variable

let combineValues: (a: number, b: number) => number;

combineValues = add;
console.log(combineValues(8, 7));

//example of defining the function type for a callback function

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(4, 8, (number) => {
  console.log(number);
});
