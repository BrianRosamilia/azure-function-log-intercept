const methods = ['log', 'info', 'warn', 'error'];
const untouchedLogMethods = {};
methods.forEach(m => untouchedLogMethods[m] = console[m]);

const higherOrderLog = (name, context) => {
    //Prevents an infinite cycle of reassignment
    const savedMethod = untouchedLogMethods[name];

    const logFn = (...params) => {
        savedMethod(...params);
        context[name](...params);
    };

    console[name] = logFn;
};

module.exports = context => {
   methods.forEach(m => higherOrderLog(m, context));
};