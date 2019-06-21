import { exec, execSync } from 'child_process';

export default class Shell {
    execute(code: string, paramaters?: string[]) {
        return new Promise<boolean>((resolve) => {
            const params = (paramaters !== undefined && Array.isArray(paramaters) && paramaters.length > 0)? paramaters.join(' '): '';
            exec(`${code} ${params}`, (error: Error | null, out: string) => {
                if (error !== null) {
                    resolve(false);
                    return null;
                }

                resolve(true);
            });
        });
    }

    executeSync(code: string, paramaters?: string[]): boolean {
        const params = (paramaters !== undefined && Array.isArray(paramaters) && paramaters.length > 0)? paramaters.join(' '): '';
        
        try {
            execSync(`${code} ${params}`);
            return true;
        } catch(ex) {
            return false;
        }
    }
}