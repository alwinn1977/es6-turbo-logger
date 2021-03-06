# es6-turbo-logger

![Downloads](https://img.shields.io/npm/dm/es6-turbo-logger.svg)
![Downloads](https://img.shields.io/npm/dt/es6-turbo-logger.svg)
![npm version](https://img.shields.io/npm/v/es6-turbo-logger.svg)
![dependencies](https://img.shields.io/david/alwinn1977/es6-turbo-logger.svg)
![dev dependencies](https://img.shields.io/david/dev/alwinn1977/es6-turbo-logger.svg)
![License](https://img.shields.io/npm/l/es6-turbo-logger.svg)

Useful logger for ES6 applications.
It provides *log()* function that 
replaces the standard *console.log()* function
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

Then use *log()* function instead standard *console.log()*,
passing objects as a first argument in object wrapper:

```javascript
const a = 'Hello';
let b = 'World';
const c = a.b;
log({a,b,c});


```

In the browser console it will look like this:

![es6-turbo-logger](docs/assets/screenshot1.png)

Optionally you can specify group label as a second argument:

```javascript
const a = 'Hello';
let b = 'World';
const c = a.b;
log({a,b,c}, 'Group Label');


```

In the browser console it will look like this:

![es6-turbo-logger](docs/assets/screenshot2.png)

## License

MIT
