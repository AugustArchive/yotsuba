import { Collection } from '@augu/immutable';
import Task, { TaskOptions } from './task';
import colors from '../util/colors';

export default class Coordinator {
    public tasks: Collection<Task> = new Collection({ name: 'coordinator:tasks' });

    register(info: TaskOptions) {
        const t = new Task(info);
        this.tasks.set(t.name, t);
        return this;
    }

    async run() {
        process.stdout.write(`[${colors.cyan('Hiei')}] Starting ${colors.gray(this.tasks.size.toString())} tasks...\n`);
        const results = {
            passed: 0,
            failed: 0
        };
        this.tasks.forEach(async (t, i) => {
            const result = await t.run();
            if (!result) results.failed++;
            else results.passed++;
            process.stdout.write(`[${colors.cyan(this.tasks.size.toString())}] ${result === false? `Task ${t.name} has failed.`: `Task ${t.name} has been successful`}\n`);
        });
    }
}