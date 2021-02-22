//example of using the unknown type in typescript

let userInput: unknown;

userInput = 'Sam';
userInput = 5;

//example of using the never type

function generateError(message: string, code: number): never {
  throw {
    message,
    errorCode: code,
  };
}

generateError('An error occurred!', 404);
