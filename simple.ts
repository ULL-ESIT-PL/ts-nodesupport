#!/usr/bin/env node --experimental-transform-types --disable-warning=ExperimentalWarning

type User = {
  name: string;
  age: number;
};

function isAdult(user: User): boolean {
  return user.age >= 18;
}

// Unlike type assertions (`as`), `satisfies` does not change the type of the object but 
// ensures it meets the requirements of the specified type.
const justine = {
  name: 'Justine',
  age: 23,
} satisfies User; 

const isJustineAnAdult = isAdult(justine);

console.log(isJustineAnAdult);
