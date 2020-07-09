## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Schedule

## Day 1

1. Get everyone up and running with tic-tac-toe project
2. Talk about git/github
3. Cover Javascript fundamentals
4. Start coding

## Day 2

1. Open the floor to questions
2. Show example code and talk about other possible implementations
3. Try to get code complete on tic-tac-toe
4. Minimax function
   1. depth/timing
   2. https://en.wikipedia.org/wiki/Minimax
   3. alpha/beta pruning (https://en.wikipedia.org/wiki/Alpha%E2%80%93beta_pruning)
5. Start working on battle1 project

## Day 3
1. https://flappybird.io/
2. Attempt to finish work on battle1

## Day 4
1. http://www.gameaipro.com/GameAIPro/GameAIPro_Chapter09_An_Introduction_to_Utility_Theory.pdf
2. Start work on battle2
3. https://www.tensorflow.org/js/demos

# Javascript

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

# Data types

## String
``` javascript
let x = 'I am a string'
let x = "I am also a string"
```

## Number
``` javascript
let x = 1
let x = 2.123
```

## Array
``` javascript
let x = [1, 2, 3, 4]
let x = ['a', 'b', 'c', 'd']
let x = [
  [1, 2, 3, 4],
  [5, 6, 7, 8]
]
```

## Object
``` javascript
let x = {
  name: "value",
  name1: "value1",
  pancake: [
    "wonderful",
    "tasty"
  ],
  myKey: {
    name: "name"
  }
}
```

# Control blocks

## If Statements

``` javascript
if(x == "hello") {
  alert("the string x is equal to hello")
} else {
  alert("the string doesn't equal hello")
}
```

## For Loops

``` javascript
let x = [1, 2, 3, 4]
for(let y = 0; y < 4; y++) {
  alert(x[y]) // 2
}
```


## Functions
  
**Functions are reusable pieces of code that can be called with input and return values**

**This function takes one parameter and doesn't return any value**

``` javascript
function myFunction(name) {
  alert("hello " + name )
}
```

**This function takes no parameters and returns a string value**
``` javascript
function myFunction() {
  return "my string return value";
}
```

**Assign a function to a variable, then call it**
``` javascript
let x = function() {
  alert("I've been called!!!");
}
x();
```
