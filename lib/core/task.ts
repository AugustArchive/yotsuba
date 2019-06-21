export interface TaskOptions {
    name: string;
    run: () => Promise<boolean>;
}
export default class Task {
    public name: string;
    public run: () => Promise<boolean>;

    constructor(info: TaskOptions) {
        this.name = info.name;
        this.run = info.run;
    }
}