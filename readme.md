# azure-function-log-intercept

`console.log` doesn't actually log as you would expect in node.js Azure Functions.  You are expected to use `context.log` and context is _not_ a global object, it's a parameter to your Azure Function so you would have to pass this throughout your modules/functions to get logging like you would expect.  

This package fixes this with minimal friction, 0 dependencies, and allows you to use `console.log` (and other `console` methods) like normal.

More information here: https://github.com/Azure/Azure-Functions/issues/1396 

Supports:

* `console.log`
* `console.error`
* `console.warn`
* `console.info`

[`npm install azure-function-log-intercept`](https://www.npmjs.com/package/azure-function-log-intercept)

```
const intercept = require('azure-function-log-intercept');
const storage = require('./StorageService.js');

module.exports = async function (context, myQueueItem) {
    intercept(context);// console.log works now!
    
    await storage.storeMessage(myQueueItem);

    console.log('Function Completed');
};
```