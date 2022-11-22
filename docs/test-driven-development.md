# Test-Driven Development (TDD)

The TDD cycle looks like this:

1. Red 🔴 - Write a test. The test fails because you haven't written any code yet.
2. Green 🟢 - Write code that passes your test and all previous tests (Don't be clever, just write code so your tests pass)
3. Refactor ♻️ - Refactor your code! There are meny reasons to refactor, such as efficiency, style and readability. Make sure your code still pases your tests as you refactor.

## Getting started with Jest

> [Jest docs](https://jestjs.io/docs/getting-started)

Install Jest either globally or locally in the project:

```sh
  npm install -g jest # Global
  npm install -D jest # Local as dev dependency
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

By default we can not use modern JS's features (like modules), luckily `Babel` solves this issue for us:

```sh
  # install Babel's required dependencies
  npm i -D babel-jest @babel/core @babel/preset-env

  # create config file for babel
  touch babel.config.js
```

- `babel.config.js`:

```js
module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
}
```

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

- options can also be defined as values of a jest key:

```json
{
  "jest": {
    "collectCoverage": true,
    "verbose": true
  }
}
```

### Prettier config

We can either have:

1. A `.prettierrc` file in our project's root
   ```json
   {
     "printWidth": 120,
     "semi": false,
     "singleQuote": true
   }
   ```
1. A `"prettier"` key in the `package.json` file with an options object.
   ```json
   {
     "prettier": {
       "printWidth": 120,
       "semi": false,
       "singleQuote": true
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
