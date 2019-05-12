# polite.js
### A function that creates a more curteous experience when working with APIs

## Goals
1. Acheive a pleasant and well-mannered environment for your code base
2. Encourage well-grounded habits that are respectful, chivalrous and considerate that extend into your daily life
3. Punish the impolite

## Installation
Include polite.js in your scripts 
```html
<script type="text/javascript" src="polite.js"></script>
```

## How to use

polite.js creates a global function "Polite" that takes an object as a parameter and replaces its functions with functions that require common decency.

```javascript
let someObject = {
    apple: "apples",
    banana: "bananas",
    someFunction: function (x) {
        console.log("I ate " + x + " " + this.apple + " today");
    }
};

someObject.someFunction(3);          // I ate 3 apples today
Polite(someObject);        
someObject.someFunction(4).please(); // I ate 4 apples today
```

After making an object more polite, refusing to "say please" will throw an exception.

```javascript
someObject.someFunction(3); // I ate 3 apples today
Polite(someObject);
someObject.someFunction(4); // throws exception 
```

### TODO
Add support for build frameworks so users can publish polite versions of their libraries