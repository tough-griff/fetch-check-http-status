# fetch-check-http-status
> A simple response handler which rejects fetch requests on any non-2xx response.

see: https://github.com/github/fetch#handling-http-error-statuses

## Install
```sh
npm install --save fetch-check-http-status
```

## Usage
```js
// ES6
import checkStatus from 'fetch-check-http-status';
// or ES5
var checkStatus = require('fetch-check-http-status');

fetch('/data')
  .then(checkStatus)
  .then(function(data) {
    console.log('success!', data);
  })
  .catch(function(err) {
    console.log('error!', err);
  });
```
