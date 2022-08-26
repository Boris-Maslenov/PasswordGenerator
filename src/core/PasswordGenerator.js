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

    /**
     * generate
     * Генерируем пароль следующим образом:
     * 1) Проходим в цикле this.length раз по массиву экземпляров классов генераторов
     * 2) На каждой итерации генерируем случайный индекс в диапазоне от 0 до количества инстансов (кол-во стратегий) 
     * 3) Случайным образом на инстансе генератора вызываем метод .generate(), который вернет 1 символ
     * 
     */

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