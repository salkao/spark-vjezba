import Element from './element';

class Ulica extends Element {
    constructor(naziv, godina, duzina, velicina = 3) {
        super(naziv, godina);
        this.duzina = duzina;
        this.velicina = velicina;
    }
    getInfo() {
        console.log(`Naziv: ${this.naziv} Godina: ${this.godina} Duzina: ${this.duzina} Velicina: ${klasifikacija.get(this.velicina)}`);
    }
}

export default Ulica;