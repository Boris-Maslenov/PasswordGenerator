import { LetterGen, NumberGen, SymbolGen } from './generators';
import { PasswordGenerator } from './PasswordGenerator';


export const ALL_STRATEGIES = [ 'NUMBER', 'LETTER', 'SYMBOL' ];

const STRATEGIES_TO_GENERATORS_MAP = {
    'NUMBER' : NumberGen,
    'LETTER' : LetterGen,
    'SYMBOL' : SymbolGen,
}

export class GeneratorsFactory {

    constructor(length, strategyNames){
        this.length = length;
        this.strategyNames = strategyNames; // SET <string>
        this.strategyInstance = new Map (); // MAP  c инстансами классов BaseGen
        this.initStrategies(); // Заполним this.strategyInstance
    }

    /**
     * setStrategy
     * 
     * @param {string} name 
     * @param {class<BaseGen>} Constructor 
     */

    /**
     * removeStrategy
     * 
     * @param {string} key 
     */

    removeStrategy = (key) => {
        this.strategyInstace.delete(key);
        this.setGenerator();
    }

    /**
     * setGenerator
     * создает новый экземпляр PasswordGenerator с новой длинной или стратегиями
     */

    setGenerator = () => {
        this.generator = new PasswordGenerator( this.length, [ ...this.strategyInstance.values() ] );
    }

    /**
     * setLength
     * Переопределяем новую длинну и создаем новый экземпляр генератора
     */

    setLength = (length) => {
        this.length = length;
        this.setGenerator();
    }

    
    /**
     * initStrategies
     * Проходимся по массиву стратегий и заносим экземпляр класса в Set this.strategyInstance
     * После этого создаем новый экземпляр генератора this.generator
     */

    initStrategies = () => {
        for ( let strategyName of this.strategyNames ) {
            this.strategyInstance.set( strategyName, new STRATEGIES_TO_GENERATORS_MAP[strategyName]() );
        }
        this.setGenerator();
    }

    /**
     * generate
     * Генерируем новый password
     */

    generate = () => {
        return this.generator.generate();
    }


}