const klasifikacija = new Map();
klasifikacija.set(1, 'prolaz');
klasifikacija.set(2, 'mala');
klasifikacija.set(3, 'normalna');
klasifikacija.set(4, 'velika');

class Element {
    constructor(naziv, godina) {
        this.naziv = naziv;
        this.godina = godina;
    }
}

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

const parkovi = [
    new Park('Park skojevaca', 1987, 0.2, 215), 
    new Park('Pionirski Park', 1894, 2.9, 3541), 
    new Park('Omladinski Park', 1953, 0.4, 949),
];
const ulice = [
    new Ulica('Trg Oslobođenja', 1971, 1.1, 4), 
    new Ulica('Gat proleterskih brigada', 1982, 2.7, 1), 
    new Ulica('Beogradska', 1974, 0.8), 
    new Ulica('Lenjingradska', 1982, 2.5, 2),
    new Ulica('Trg Oktobarske revolucije', 1973, 4, 4),
];
console.log(`Parkovi`);
for (let i = 0; i < parkovi.length; i += 1) {
    parkovi[i].getInfo();
}
console.log(`Ulice`);
for (let i = 0; i < ulice.length; i += 1) {
    ulice[i].getInfo();
}

const prosjecnaStarostParkova = () => {
    let sum = 0;
    for (let i = 0; i < parkovi.length; i += 1) {
        sum += parkovi[i].godina;
    }
    return (sum / parkovi.length).toFixed(2);
}
console.log(`Prosjecna staros svih parkova iznosi ${prosjecnaStarostParkova()}`);

const parkoviPoBrojuDrveca = () => {
    const sort = parkovi.sort((a, b) => b.brojDrveca - a.brojDrveca);
    return sort;
}
console.log(parkoviPoBrojuDrveca());

const parkoviPoPovrsini = () => {
    const sort = parkovi.sort((a, b) => b.povrsina - a.povrsina);
    return sort;
}
console.log(parkoviPoPovrsini());

const ukupnaProsjecnaDuzinaUlica = () => {
    let sum = 0;
    for (let i = 0; i < ulice.length; i += 1) {
        sum += ulice[i].duzina;
    }
    return `Ukupna duzina ulica: ${sum.toFixed(2)} Prosjecna duzina ulica: ${(sum / ulice.length)}`;
}

console.log(ukupnaProsjecnaDuzinaUlica());

const uliceIz80ih = ulice.filter((ulica) => {
    return ulica.godina > 1979 && ulica.godina < 1991;
});

console.log(uliceIz80ih);