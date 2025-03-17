#!/usr/bin/env node --experimental-transform-types --disable-warning=ExperimentalWarning
function foo(bar: number): string {
  return 'hello';
}
console.log(foo(4));
