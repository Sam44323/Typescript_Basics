//creating an enum

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Sam Henrick',
  age: 17,
  hobbies: ['cooking', 'weaving', 'sports'],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log('is admin now!');
}
