import { stripIndents } from 'common-tags';
import { Collection } from '@augu/immutable';
import colors from '../util/colors';

export type Task = () => boolean;
export interface Results {
    passed: number;
    failed: number;
}

export default class Coordinator {
    public tasks: Collection<Task> = new Collection({ name: 'coordinator:tasks' });
    register(t: Task) {
        const size = this.tasks.size;
        this.tasks.set(size, t);
        return this;
    }

    printResult(results: Results) {
        const passed = (results.passed / this.tasks.size) * 100;
        const failed = (results.failed / this.tasks.size) * 100;
        process.stdout.write(stripIndents`
            ${colors.gray('Results:')}
            -+-+-+-+-+-+-+-+-+
            Passed: ${colors.green(results.passed.toString())} (${colors.magenta(passed.toString())}%)
            Failed: ${colors.red(results.failed.toString())} (${colors.magenta(failed.toString())}%)
        `);
    }

    async run() {
        process.stdout.write(`${colors.cyan('Yotsuba>')} Starting ${colors.gray(this.tasks.size.toString())} tasks...\n`);
        const results: Results = { passed: 0, failed: 0 };
        for (let i = 0; i < this.tasks.size; i++) {
            const task   = this.tasks.get(i)!;
            const result = await task();
            if (!result) results.failed++;
            else results.passed++;
            process.stdout.write(`${colors.cyan('Yotsuba>')} ${!result? `Task #${i} has failed`: `Task #${i} has been successful!`}\n`);
        }
        this.printResult(results);
    }
}