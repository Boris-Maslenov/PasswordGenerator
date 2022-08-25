import { LetterGen, NumberGen, SymbolGen } from './generators';
import { PasswordGenerator } from './PasswordGenerator';


const STRATEGIES_TO_GENERATORS_MAP = {
    'NUMBER' : NumberGen,
    'LETTER' : LetterGen,
    'SYMBOL' : SymbolGen,
}

export class GeneratorFactory {

    constructor(length, strategyNames){
        this.strategyNames = strategyNames; // string
        this.length = length;
        this.strategyInstance = new Map (); // MAP  c инстансами классов BaseGen
        this.initStrategies(); // Заполним this.strategyInstance
    }

    // создаем инстанс и записываем в мапу. Так же создадим новый ген
    setStrategy = (name, Constructor) => {
        this.strategyInstance.set( name, new Constructor() );
        this.setGenerator();
        return this;
    }

        // создаем инстанс и записываем в мапу. Так же создадим новый ген
    removeStrategy(key) {
        this.strategyInstace.delete(key);
        this.setGenerator();
        return this;
    }

    // Получаем новый интстанс PasswordGenerator. Передаем длинну и массив инстансов BaseGen
    setGenerator = () => {
        this.generator = new PasswordGenerator( this.length, [...this.strategyInstance.values() ] );
    }

    initStrategies = () => {
        for ( let strategyName of this.strategyNames ) {
            this.strategyInstance.set( strategyName, new STRATEGIES_TO_GENERATORS_MAP[strategyName]() );
        }
    }

    generate = () => {
        return this.generator.generate();
    }

    // при изменении длинны так же создаем новый инстанс Password Generator
    setLength(length) {
        this.length = length;
        this.setGenerator();
    }

}