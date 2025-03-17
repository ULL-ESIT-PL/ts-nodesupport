#!/usr/bin/env node --experimental-transform-types --disable-warning=ExperimentalWarning --env-file=.env
// import { inspect } from 'util';
import { DatabaseSync } from "node:sqlite";

const database = new DatabaseSync(":memory:");

database.exec(`
    CREATE TABLE data(
        key INTEGER PRIMARY KEY,
        value TEXT
    ) STRICT
`);

const insert = database.prepare("INSERT INTO data (key, value) VALUES (?, ?)");

insert.run(1, "hello");
insert.run(2, "world!");

const query = database.prepare("SELECT * FROM data ORDER BY key");

console.log(JSON.stringify(query.all(), null, 2));