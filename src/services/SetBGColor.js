export class SetBGColor {

    constructor(){
        this.body = document.querySelector('body');
    }

    setColor(color) {
        this.body.style.backgroundColor = color;
    }

    init(number){
        this.body.style.transition = 'all 0.5s';
        if(number < 4){
            this.setColor('#FF0033')
        }else if(number < 5) {
            this.setColor('#FF3333') ;
        }else if(number < 6) {
            this.setColor('#FF9933');
        }else if(number < 7) {
            this.setColor('#FFCC00');
        }else if(number < 8) {
            this.setColor('#99FFCC');
        }else if(number < 9) {
            this.setColor('#66FF00');
        }else if(number < 10) {
            this.setColor('#00CC33');
        }
    }
}