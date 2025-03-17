# TS and node.js support

## References

- https://nodejs.org/api/typescript.html#enabling
- https://your-ehsan.medium.com/10-mind-blowing-node-js-features-that-make-it-unstoppable-86a5e98e2fc2
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

// Unlike type assertions (`as`), `satisfies` does not change the type of the object but 
// ensures it meets the requirements of the specified type.
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

## Type Stripping

1. By default Node.js will execute TypeScript files that contains only **erasable** TypeScript syntax. 
2. Node.js **will replace TypeScript syntax with whitespace**, and **no type checking is performed**. 
3. To enable the transformation of non erasable TypeScript syntax, which requires JavaScript code generation, such as
   1.  enum declarations, 
   2.  parameter properties 
   
   use the flag `--experimental-transform-types`. 
   To disable this feature, use the flag `--no-experimental-strip-types`.


## Watch Mode

The --watch flag enables automatic re-running of your code whenever files change.
This means you no longer need to use `nodemon` or manually restart your tests or applications.

Simply run your tests with the --watch flag, and Node.js will monitor your files for any changes, automatically re-running the tests upon saving.

```
➜  ts-nodesupport git:(main) ✗ node --help | grep watch
  --watch                     run in watch mode
  --watch-path=...            path to watch
  --watch-preserve-output     preserve outputs on watch mode restart
```

## env-file Flag 

Node.js now supports loading environment variables directly from a specified `.env` file using 
the `--env-file` flag. This feature allows you to manage your environment variables more effectively without needing additional libraries.

```
➜  ts-nodesupport git:(main) ✗ node --help | grep env-file
  --env-file=...              set environment variables from supplied
  --env-file-if-exists=...    set environment variables from supplied
```

## Top level Await

With the latest updates, Node.js now supports top-level await, allowing you to use the await keyword outside of an async function. This simplifies writing asynchronous code and improves readability.

```js 
✗ ./top-level-await.mts
#!/usr/bin/env node --experimental-transform-types --disable-warning=ExperimentalWarning --env-file=.env

import { readFile } from "fs/promises";

const contents = await readFile("./top-level-await.mts", "utf-8");
console.log(contents)
```