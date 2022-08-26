import { LetterGen } from "./LetterGen";

export class LetterGenUpperCased extends LetterGen {

    generate = () => {
        const symbolToUpperCased = super.generate().toUpperCase();
        return symbolToUpperCased;
    }

}