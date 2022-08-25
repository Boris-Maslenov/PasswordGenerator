import { BaseGen } from "./BaseGen";

export class NumberGen extends BaseGen{

    constructor(){
        super();
        this.chars = '0123456789';
    }

    generate = () => {
        const index = Math.floor( Math.random() * this.chars.length ); // Генерируем случайным образом индекс в диапазоне до chars.length
        const symbol = this.chars[index];
        return symbol;
    }

}