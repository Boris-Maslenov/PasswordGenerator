export class SetBGColor {

    constructor(){
        this.body = document.querySelector('body');
    }

    setColor(color) {
        this.body.style.backgroundColor = color;
    }

    init(number){
        this.body.style.transition = 'all 0.5s';
        switch(number){
            case 3 :
                this.setColor('#FF3427');
                break;
            case 4 :
                this.setColor('#FF663D'); 
            break;
            case 5 :
                this.setColor('#FF9641');
            break;
            case 6 :
                this.setColor('#FFCA41');
            break;
            case 7 :
                this.setColor('#FFFD60');
            break;
            case 8 :
                this.setColor('#A1FF3C');
            break;
            case  9 :
                this.setColor('#4CFF49');
            break;
            case  10 :
                this.setColor('#2CDB38');
            break;
                default:
                    this.setColor('#2CDB38'); 
        }
    }


}