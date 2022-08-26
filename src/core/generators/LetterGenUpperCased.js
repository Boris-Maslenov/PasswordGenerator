import { LetterGen } from "./LetterGen";

export class LettersGenUpperCased extends LetterGen {

    generate() {
        return super.generate().toUpperCase();
    }
    
}