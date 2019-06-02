import parseData from './dataParser.js';
import { dohvatiPodatke } from './apiService.js';

const klasifikacija = new Map();
klasifikacija.set(1, 'prolaz');
klasifikacija.set(2, 'mala');
klasifikacija.set(3, 'normalna');
klasifikacija.set(4, 'velika');

let parkovi = [];
let ulice = [];
dohvatiPodatke().then(data => {
    parkovi = parseData(data).parkovi;
    ulice = parseData(data).ulice;
});
const prosjecnaStarostParkova = () => {
    let sum = 0;
    for (let i = 0; i < parkovi.length; i += 1) {
        sum += parkovi[i].godina;
    }
    return (sum / parkovi.length).toFixed(2);
}
const parkoviPoBrojuDrveca = () => {
    let sortP = [];
    for (let i = 0; i < parkovi.length; i += 1) {
        sortP.push(parkovi[i]);
    }
    sortP.sort((a, b) => b.brojDrveca - a.brojDrveca);
    popuniTabeluParkova(sortP);
}
const parkoviPoPovrsini = () => {
    let sortP = [];
    for (let i = 0; i < parkovi.length; i += 1) {
        sortP.push(parkovi[i]);
    }
    sortP.sort((a, b) => b.povrsina - a.povrsina);
    popuniTabeluParkova(sortP);
}
const obrisiSadrzajTabele = (idTabele) => {
    const tabela = document.getElementById(idTabele);
    const arr = tabela.getElementsByTagName('tr');
    let i = arr.length;
    while (i > 1) {
        tabela.removeChild(tabela.lastChild);
        i--;
    }
}
const ukupnaDuzinaUlica = () => {
    let sum = 0;
    for (let i = 0; i < ulice.length; i += 1) {
        sum += ulice[i].duzina;
    }
    return sum.toFixed(1);
}
const prosjecnaDuzinaUlica = () => {
    return (ukupnaDuzinaUlica() / ulice.length).toFixed(2);
}
const uliceIz80ih  = () => ulice.filter((ulica) => {
    return ulica.godina > 1979 && ulica.godina < 1991;
});
const kreirajTd = (val) => {
    const td = document.createElement('td');
    td.innerText = val;
    return td;
}
const popuniTabeluParkova = (p) => {
    const tabela = document.getElementById('parkTable');
    if (tabela.childElementCount > 1) {
        obrisiSadrzajTabele('parkTable');
    }
    for (let i = 0; i < p.length; i += 1) {
        const tr = document.createElement('tr');
        const naziv = kreirajTd(p[i].naziv);
        tr.appendChild(naziv);
        const godina = kreirajTd(p[i].godina);
        tr.append(godina);
        const povrsina = kreirajTd(`${p[i].povrsina} km/2`);
        tr.append(povrsina);
        const brojDrveca = kreirajTd(p[i].brojDrveca);
        tr.appendChild(brojDrveca);
        const gustocaDrveca = kreirajTd(p[i].gustocaDrveca);
        tr.appendChild(gustocaDrveca);
        tabela.appendChild(tr);
    }
}
const popuniProsjecnuStarost = () => {
    const prosjecnaStarost = document.getElementById('starostPar');
    prosjecnaStarost.innerText += ` ${prosjecnaStarostParkova()} g`;
}
const popuniTabeluUlica = (u) => {
    const tabela = document.getElementById('ulicaTable');
    if (tabela.childElementCount > 1) {
        obrisiSadrzajTabele('ulicaTable');
    }
    for (let i = 0; i < u.length; i += 1) {
        const tr = document.createElement('tr');
        const naziv = kreirajTd(u[i].naziv);
        tr.appendChild(naziv);
        const godina = kreirajTd(u[i].godina);
        tr.appendChild(godina);
        const duzina = kreirajTd(`${u[i].duzina} km`);
        tr.appendChild(duzina);
        const velicina = kreirajTd(klasifikacija.get(u[i].velicina));
        tr.appendChild(velicina);
        tabela.appendChild(tr);
    }
}
const popuniUkupnuDuzinu = () => {
    const ukupnaDuzina = document.getElementById('ukupnaDuzinaUl');
    ukupnaDuzina.innerText += ` ${ukupnaDuzinaUlica()} km`;
}
const popuniProsjecnuDuzinu = () => {
    const prosjecnaDuzina = document.getElementById('prosjecnaDuzinaUl');
    prosjecnaDuzina.innerText += ` ${prosjecnaDuzinaUlica()} km`;
}
const AddEvListeners = () => {
    const btnX = document.getElementById('btnX');
    btnX.addEventListener('click', () => {
        popuniTabeluParkova(parkovi);
    }, true);
    const uliceBtn = document.getElementById('uliceBtn');
    uliceBtn.addEventListener('click', () => {
        popuniTabeluUlica(uliceIz80ih());
    }, true);
    const btnX1 = document.getElementById('btnX1');
    btnX1.addEventListener('click', () => {
        popuniTabeluUlica(ulice);
    }, true);
    const parkoviVelicinaBtn = document.getElementById('parkoviPovrsinaBtn');
    parkoviVelicinaBtn.addEventListener('click', () => {
        parkoviPoPovrsini();
    }, true);
    const parkoviBrojDrvecBtn = document.getElementById('parkoviBrojDrvecaBtn');
    parkoviBrojDrvecBtn.addEventListener('click', () => {
        parkoviPoBrojuDrveca();
    }, true);
}

export {
    popuniTabeluParkova,
    popuniProsjecnuStarost,
    popuniTabeluUlica,
    popuniProsjecnuDuzinu,
    popuniUkupnuDuzinu,
    AddEvListeners,
}

// https://cityscapes-masters.herokuapp.com/cityElements