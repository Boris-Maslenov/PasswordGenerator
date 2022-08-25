import { BaseGen } from "./BaseGen";

export class SymbolGen extends BaseGen {

    constructor(){
        super();
        this.chars = ['~', '!', '+', '@', '$', '%', '^', '&', '*', ')', '(', '-', '=', '?', '[', ']', '{', '}'];
    }

    generate = () => {
        const index = Math.floor( Math.random() * this.chars.length ); 
        const symbol = this.chars[index];
        return symbol;
    }

}