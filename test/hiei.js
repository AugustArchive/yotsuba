const { Coordinator } = require('../build');
const coordinator = new Coordinator();

coordinator
    .register({
        name: 'test',
        run: () => {
            console.log('Hi!');
            return true;
        }
    })
    .run();