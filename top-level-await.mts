#!/usr/bin/env node --experimental-transform-types --disable-warning=ExperimentalWarning --env-file=.env

import { readFile } from "fs/promises";

const contents = await readFile("./top-level-await.mts", "utf-8");
console.log(contents)