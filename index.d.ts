declare module '@yamashiro/hiei' {
    import { Collection } from '@augu/immutable';

    export const version: string;
    export class Coordinator {
        constructor();

        public tasks: Collection<Task>;
        public register(info: TaskOptions): this;
        public run(): Promise<void>;
    }
    export class Shell {
        constructor();

        public execute(code: string, params?: string[]): Promise<boolean>;
        public executeSync(code: string, params?: string[]): boolean;
    }
    export class Task {
        constructor(info: TaskOptions);

        public name: string;
        public run: () => Promise<boolean>;
    }
    export interface TaskOptions {
        name: string;
        run: () => Promise<boolean>;
    }
}