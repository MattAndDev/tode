# tode

Opinionated bare minimum to write node applications in typescript.

> We are all waiting for [deno](https://deno.land/)

## requirements

node && npm

## commands

### `npm start`

compiles and runs `./source` with node

### `npm run dev`

compiles-watch `./source` in memory with [nodemon](https://www.npmjs.com/package/nodemon) and [ts-node](https://github.com/TypeStrong/ts-node)

### `npm run test`

runs [jest](https://jestjs.io/) on `./source/**/*.test.ts`
