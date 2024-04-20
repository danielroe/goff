import assert from 'node:assert'
import * as pkg from 'goff'

// eslint-disable-next-line no-console
console.log(pkg.welcome())

assert.strictEqual(pkg.welcome(), 'hello world')
