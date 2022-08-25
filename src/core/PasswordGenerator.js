import { BaseGen } from "./generators/BaseGen";

export class PasswordGenerator extends BaseGen {

    /**
     * 
     * @param {number} length 
     * @param {Array<BaseGen>} strategies 
     */

    constructor(length, strategies){
        super();
        this.length = length;
        this.strategies = strategies;
        console.log(this.length);
    }

    generate = () => {
        let password = '';
        while( password.length < this.length ) {
            const index = Math.floor( Math.random() *  this.strategies.length);
            const stepStrategy = this.strategies[index];
            const stepChar = stepStrategy.generate();
            password += stepChar;
        }
        return password;
    }
}