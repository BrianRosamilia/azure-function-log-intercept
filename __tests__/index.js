const interceptor = require('../index.js');

describe('azure-function-log-intercept test suite', () => {
    it('Interceptor intercepts all methods', () => {
        let x = 0;
        const context = { log(){ x++ }, warn(){ x++ }, error(){ x++ }, info(){ x++ }, };

        interceptor(context);

        console.log('intercepted');
        console.warn('intercepted');
        console.info('intercepted');
        console.error('intercepted');

        expect(x).toBe(4);
    });

    it('Multiple Interceptor calls wont create exponential wrapping of context.log', () => {
        let x = 0;
        const context = { log(){ x++ } };

        interceptor(context);
        interceptor(context);
        interceptor(context);
        interceptor(context);
        interceptor(context);

        console.log('intercepted');
        console.log('intercepted');

        expect(x).toBe(2);
    });
});