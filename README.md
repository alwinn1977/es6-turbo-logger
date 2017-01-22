# es6-turbo-logger

![Downloads](https://img.shields.io/npm/dm/es6-turbo-logger.svg)
![Downloads](https://img.shields.io/npm/dt/es6-turbo-logger.svg)
![npm version](https://img.shields.io/npm/v/es6-turbo-logger.svg)
![dependencies](https://img.shields.io/david/alwinn1977/es6-turbo-logger.svg)
![dev dependencies](https://img.shields.io/david/dev/alwinn1977/es6-turbo-logger.svg)
![License](https://img.shields.io/npm/l/es6-turbo-logger.svg)

Useful logger for ES6 applications.
It provides *log* function that 
replaces the standard *console.log* function
and outputs passed arguments in browser console as a group, indicating
the names of the variables/constants that were passed.
Optionally, you can specify group label.


## Getting Started

Install it via npm:

```shell
npm install es6-turbo-logger
```

And include in your project:

```javascript
import log from 'es6-turbo-logger';
```

Then use *log* function instead standard *console.log*:

```javascript
const a = 'Hello';
let b = 'World';
log({a,b});


```
Optionally you can specify group label:

```javascript
const a = 'Hello';
let b = 'World';
log({a,b}, 'Group Label');


```

## License

MIT
