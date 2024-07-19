# Javascript

# References
Even seasoned developers need to look up reference to language specifics.  It's critical to know what you're looking for or at least where to look.  Two good places to use for this class are:

1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
1. https://www.w3schools.com/

# Variables
Variables are named containers that store values like numbers, words, boolean (true/false), etc.

You can name variables pretty much anything you want, but it's best to name your variables something that has meaning so it's easy for you and others to read.

An example of bad naming
```javascript
let s1 = 'Sean';
let s2 = 'PlutoTV';
let s3 = 'Software Engineer'
```

An example of good naming
```javascript
let name = 'Sean';
let worksFor = 'PlutoTV';
let title = 'Software Engineer'
```

# Data types

## String
``` javascript
let x = 'I am a string'
let x = "I am also a string"

// One more special kind of string that can contain variables as a template.
let y = 'template'
let x = `I'm a ${y} string.`
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

You can use an if block in many ways, such as:
1. `==` check equality with automatic type conversion (evil).
2. `===` check equality with no type conversion.
3. `!==` check not equal with no type conversion.
4. `>` check greater than.
4. `>=` check greater than or equals.
5. `<` check less than.
5. `<=` check less than equals.

``` javascript
if(x === "hello") {
  alert("the string x is equal to hello")
} else {
  alert("the string doesn't equal hello")
}
```

## Switch Statements

```javascript
let x = 0;
switch(x) {
  case 0:
    console.log('x equaled 0');
    break;
  case 1:
    console.log('x equaled 1');
    break;
  default:
    console.log('x equaled some other value');
} 
```

## Loops

``` javascript
// For loop
let x = [1, 2, 3, 4];
for(let y = 0; y < 4; y++) {
  alert(x[y]) // 2
}

while(myVar) {
  // Keep doing things until myVar is false
} 
```

# Output
For various reasons it can be important to have ways to output things like the current state of the program or display messages to the user.  This can be especially useful for debugging.

## Console

```javascript
console.log('this message will show up in the browsers console')
```

```javascript
alert('this message will show up in a alert box')
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


# Formatting
Code formatting may not seem critical, but when you are reading a lot of code trying to make changes or debug, it will make a world of difference.  That said, everyone is expected to follow the next formatting rules.
1. Indent code inside curly braces with one tab.
2. Always use curly braces when possible (if, else, white, for, etc...)

# CSS
CSS or Cascading Style Sheets is metadata that is used to add style to websites.  We won't be working much with this, but during the class we can take some time out to understand how it works if people are interested.

# HTML
HTML is langauge for definig the structure of a website, but offers very little in the way of styling.
