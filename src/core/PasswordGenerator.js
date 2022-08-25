import { BaseGen } from "./BaseGen";

export class PassworGenerator extends BaseGen {

    /**
     * 
     * @param {number} length 
     * @param {Array<BaseGen>} strategies 
     */

    constructor(length, strategies){
        super();
        this.length = length;
        this.strategies = strategies;
    }

    generate = () => {
        let password = '';
        while( password.length < this.strategies.length ) {
            const index = Math.floor( Math.random() *  this.strategies.length);
            const stepStrategy = this.strategies[index];
            const stepChar = stepStrategy.generate();
            password += stepChar;
        }
    }
}