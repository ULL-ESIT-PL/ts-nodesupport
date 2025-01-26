# TS and node.js support

## References

- https://nodejs.org/api/typescript.html#enabling

## Examples

### Versions

```
➜  ts-nodesupport git:(main) node --version
v23.5.0
➜  ts-nodesupport git:(main) npm --version
10.9.2
```

### Disable ExperimentalWarning --disable-warning=ExperimentalWarning 

```ts
➜  ts-nodesupport git:(main) cat hellots.ts 
function foo(bar: number): string {
  return 'hello';
}
console.log(foo(4));
➜  ts-nodesupport git:(main) npm run ts hellots.ts

> nodesupport@1.0.0 ts
> node --experimental-transform-types --disable-warning=ExperimentalWarning hellots.ts

hello
```

### Disable warnings --no-warnings

```ts
➜  ts-nodesupport git:(main) cat simple.ts 
type User = {
  name: string;
  age: number;
};

function isAdult(user: User): boolean {
  return user.age >= 18;
}

const justine = {
  name: 'Justine',
  age: 23,
} satisfies User;

const isJustineAnAdult = isAdult(justine);

console.log(isJustineAnAdult);
➜  ts-nodesupport git:(main) ✗ npm start simple.ts

> nodesupport@1.0.0 start
> node --experimental-transform-types --no-warnings simple.ts

true
```