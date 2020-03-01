# azure-function-log-intercept

Fixes this problem with Azure Functions https://github.com/Azure/Azure-Functions/issues/1396 with minimal friction and 0 dependencies.

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