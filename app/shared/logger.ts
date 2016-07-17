import { Injectable } from '@angular/core';

@Injectable()
export class Logger {

    logs: string[] = [];

    constructor(){}

    public create(message: string = 'empty msg'):string {
        return message;
    }

    public log(message: any = 'message not provided') {
        console.log('message logged: ', message);
        this.logs.push(message);
    }

    public getLogs():string[]{
        return this.logs;
    }
}
