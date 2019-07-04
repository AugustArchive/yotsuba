declare module 'yotsuba' {
    import { Collection } from '@augu/immutable';

    /**
     * The current version of Yotsuba
     */
    export const version: string;
    export class Coordinator {
        /**
         * Creates a new instance of the `Coordinator` instance.
         * 
         * This is the central of the automation library. Start here!
         */
        constructor();

        /** A collection of tasks */
        public tasks: Collection<Task>;

        /**
         * Registers a task
         * @param info Additional options to add-on to
         */
        public register(info: TaskOptions): this;

        /**
         * A promise-based run function.
         * 
         * It runs the `Coordinator`'s tasks
         */
        public run(): Promise<void>;
    }
    export class Shell {
        /**
         * Creates a new instance of the `Shell` utility
         * 
         * This is for all `terminal-based` command executions.
         */
        constructor();

        /**
         * Runs any terminal command asynchronically
         * @param code The first paramater of the command you want to execute
         * @param params The other paramaters after the command's name
         */
        public exec(code: string, params?: string[]): Promise<boolean>;

        /**
         * Runs any terminal command synchronically
         * @param code The first paramater of the command you want to execute
         * @param params The other paramaters after the command's name
         */
        public execSync(code: string, params?: string[]): boolean;
    }
    export class Task {
        /**
         * Creates a new instance of the `Task` interface
         * 
         * This is the central of all tasks
         * @param info The information to add-on
         */
        constructor(info: TaskOptions);

        /** The task's name */
        public name: string;

        /** The task's process */
        public run: () => Promise<boolean>;
    }
    export interface TaskOptions {
        name: string;
        run: () => Promise<boolean>;
    }
}