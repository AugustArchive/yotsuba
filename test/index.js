const { Coordinator, Shell } = require('../dist');
const coordinator = new Coordinator();
const shell = new Shell();

coordinator
    .register({
        name: 'test',
        run: () => {
            console.log('Hi!');
            return true;
        }
    })
    .register({
        name: 'version',
        run: () => {
            const result = shell.execSync('node', ['-v']);
            if (!result) return false;
            return true;
        }
    })
    .run();