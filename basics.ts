function add(n1: number, n2: number, showReult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showReult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 8.8;
const printResult = true;
const resultPhrase = 'Result for the addition is: ';

add(number1, number2, printResult, resultPhrase);
