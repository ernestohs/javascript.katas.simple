# Test-Driven Development (TDD)

The TDD cycle looks like this:

1. Red 🔴 - Write a test. The test fails because you haven't written any code yet.
2. Green 🟢 - Write code that passes your test and all previous tests (Don't be clever, just write code so your tests pass)
3. Refactor ♻️ - Refactor your code! There are meny reasons to refactor, such as efficiency, style and readability. Make sure your code still pases your tests as you refactor.

## Getting started with Jest

> [Jest docs](https://jestjs.io/docs/getting-started)

Install Jest:

```sh
  npm install -D jest # dev dependency (-D, --save-dev)
```

### IntelliSense for Jest

By default `vscode` does not provide **IntelliSense** for all of jest's functions, methods, matchers, etc. To get this useful functionality we need to add types to the project:

```sh
  # install jest types
  npm i -D @types/jest

  # create config file with type aquisition property for jest
  touch jsconfig.json
```

- `jsconfig.json`:

```json
{
  "typeAcquisition": {
    "include": ["jest"]
  }
}
```

## Using Babel

> [Babel docs](https://babeljs.io/)

By default Jest doesn't support ES6 modules, throwing an error when you directly run tests with Jest if your code has any import/export statements, a solution is to add `Babel`.

The jest docs suggest using babel by installing all dependencies, like so:

```sh
  # Babel's required dependencies
  npm i -D babel-jest @babel/core @babel/preset-env

  # config file for babel
  touch babel.config.js
```

- `babel.config.js`:

```js
module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
}
```

But in newer version of `jest`, `babel-jest` is [now automatically loaded by Jest](https://www.developerload.com/jest-syntaxerror-cannot-use-import-statement-outside-a-module) and fully integrated. This allows for a simpler implementation:

```sh
  npm i -D @babel/preset-env
  touch babel.config.json
```

- `babel.config.json`:

```json
{
  "presets": ["@babel/preset-env"]
}
```

> Note that the configuration is now made in a `json` file, rather than a `js` one.

## Setup to run tests

### Jest's scripts and config

- `package.json`:

```json
{
  "scripts": {
    "test": "jest [--verbose] [--coverage]"
  }
}
```

- options can also be defined as properties in a configuration object of a jest key:

```json
{
  "jest": {
    "collectCoverage": true,
    "verbose": true
  }
}
```

## Writting a test

1. First we describe the text subject/context `[describe]`
2. Then we define individual tests to perform on the text subject `[it|test]`

```js
import add from '../src/add.js'

describe("unit I'm testing", () => {
  it('test description', () => {
    const actual = add(1, 2)
    const expected = 3
    expect(actual).toBe(expected)
  })
})
```

### Test cases outside of `unit.test.js`

It is recommended that we write a json file with an array of "test case" objects to keep our `unit.test.js` file short and readable:

```json
[
  {
    "input": [1, 2],
    "expected": 3
  }
  {
    "input": [-1, 1],
    "expected": 0
  }
]
```

We can import those cases on the test file and iterate over every element in the array, performing a test for each one.

```js
import add from '../src/add.js'
import addCases from './mock/add.cases.json'

describe('add function', () => {
  addCases.foreach((testCase) => {
    it(`Adding: ${testCase.input}\nShould return: ${testCase.expected}`, () => {
      const actual = add(...testCase.input)
      expect(actual).toBe(testCase.expected)
    })
  })
})
```
