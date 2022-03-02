const methods = ['log', 'info', 'warn', 'error'];

const higherOrderLog = (name, context) => {
    const logFn = (...params) => {
        if(context[name]){
            context[name](...params);
        }
        else if(context.log[name]){
            //Must check context.log for some methods (currently warn, info, error)
            context.log[name](...params);
        }
    };

    console[name] = logFn;
};

module.exports = context => methods.forEach(m => higherOrderLog(m, context));