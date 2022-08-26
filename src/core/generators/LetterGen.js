import { BaseGen } from "./BaseGen";

export class LetterGen extends BaseGen{

    constructor(){
        super();
        this.chars = 'abcdefghijklmnopqrstuvwxyz';
    }

    generate(){
        const index = Math.floor(Math.random() * this.chars.length);
        const symbol = this.chars[index];
        return symbol;
    }
}