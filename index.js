import parseData from './dataParser.js';
import { dohvatiPodatke } from './apiService.js';
import { popuniTabeluParkova, popuniTabeluUlica } from './methods';
import { AddEvListeners } from './methods';
import { popuniProsjecnuStarost } from './methods';
import { popuniUkupnuDuzinu } from './methods';
import { popuniProsjecnuDuzinu } from './methods';

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
    popuniTabeluParkova(parkovi);
    popuniTabeluUlica(ulice);
    popuniProsjecnuStarost();
    popuniUkupnuDuzinu();
    popuniProsjecnuDuzinu();
    AddEvListeners();
});