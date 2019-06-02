import Element from './element';

class Park extends Element {
    constructor(naziv, godina, povrsina, brojDrveca) {
        super(naziv, godina);
        this.povrsina = povrsina;
        this.brojDrveca = brojDrveca;
        this.gustocaDrveca = ((povrsina * 1000) / brojDrveca).toFixed(4);
    }
    getInfo() {
        console.log(`Naziv: ${this.naziv} Povrsina: ${this.povrsina} Broj drveca: ${this.brojDrveca} Gustina drveca: ${this.gustocaDrveca}`);
    }
}

export default Park;