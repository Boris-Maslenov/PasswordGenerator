import React from 'react';
import { GeneratorsFactory, ALL_STRATEGIES } from '../core/GeneratorsFactory';
import { PasswordGeneratorVuew } from './PasswordGeneratorVuew';


export class PasswordGeneratorLogic extends React.Component {

    state = {
        suggestedPassword: '',
        length: 5,
        strategies: new Set( ALL_STRATEGIES ),
    }

    componentDidMount() {
        this.generatePassword();
    }

    /**
     *  initGenerator
     *  Создает новый инстанс GeneratorsFactory 
     */

    initGenerator = () => {
        const { length, strategies } = this.state;
        this.generator = new GeneratorsFactory(length, strategies);
    }

    /**
     *  setPassword
     *  Генерируем новый пароль и записываем новое состояние 
     */

    setPassword () {
        const suggestedPassword =  this.generator.generate();
        this.setState( state => ( { ...state, suggestedPassword } ) );
    }

    /**
     *  setLength
     *  Устанавливаем новую длинну пароля.
     *  После того как новая длинна пароля обновлена в стейте устанавливаем новый пароль в стэйт
     */

    setLength = (length) => {
        this.generator.setLength(length);
        this.setState( state => ( {...state, length } ), () => {
            this.setPassword();
        } );
    }

    /**
     *  addStrategy
     *  Добавляем новую стратегию
     */

    addStrategy = (strategyName) => {
        const strategies = this.state.strategies;
        strategies.add(strategyName);
        this.setState( state => ( {...state, strategies} ),  () => {
            this.generatePassword();
        } );
    }

    /**
     *  removeStrategy
     *  Удаляем стратегию
     *  Если в состоянии 1 стратегия, то ничего не делаем
     *  Если в состоянии более 1 стратегии то удаляем стратегию из Set и обновляем стейт. 
     *  Создаем новый экземпляр и генерируем новый пароль
     */

    removeStrategy = (strategyName) => {
        const { strategies } = this.state;
        if ( strategies.size === 1 ) return;
        strategies.delete(strategyName);
        this.setState( state => ( {...state} ), () => {
            this.generatePassword();
        } );
    }

    /**
     *  toggleStrategy
     *  Управляем добавлением или удалением стратегий
     */

    toggleStrategy = (strategyName) => {
        const {strategies} = this.state;
        if (strategies.has(strategyName)) {
            this.removeStrategy(strategyName);
        } else{
            this.addStrategy(strategyName); 
        }
    }

    /**
     *  generatePassword
     *  Создаем новый инстанс GeneratorsFactory
     *  Генерируем новый пароль и заносим его в состояние
     */

    generatePassword = () => {
        this.initGenerator();
        this.setPassword();
    }

    render(){
       
        const {suggestedPassword, length, strategies} = this.state;
        return   <PasswordGeneratorVuew 
        suggestedPassword={ suggestedPassword }
        strategyList={ ALL_STRATEGIES }
        length={ length }
        onLengthChange={ this.setLength }
        onStrategyChange={ this.toggleStrategy }
        acriveStrategies={ [...strategies] }
        />
    }

}