const { Coordinator } = require('../dist');
const coordinator = new Coordinator();

coordinator
    .register(() => {
        console.log('Success!');
        return true;
    })
    .register(() => {
        console.log('Failed!');
        return false;
    })
    .run();