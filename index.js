const methods = ['log', 'info', 'warn', 'error'];
const untouchedLogMethods = {};
methods.forEach(m => untouchedLogMethods[m] = console[m]);

const higherOrderLog = (name, context) => {
    //Prevents an infinite cycle of reassignment
    const savedMethod = untouchedLogMethods[name];

    const logFn = (...params) => {
        savedMethod(...params);

        if(context[name]){
            context[name](...params);
        }
        else if(context.log[name]){
            //Must check context.log for some of the methods (currently warn, info, error)
            context.log[name](...params);
        }
    };

    console[name] = logFn;
};

module.exports = context => methods.forEach(m => higherOrderLog(m, context));