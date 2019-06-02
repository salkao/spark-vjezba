import Park from './model/park.js';
import Ulica from './model/ulica.js';

const parsePark = (data) => {
    const parkovi = [];
    data.forEach(element => {
        parkovi.push(new Park(element.name, element.year, element.area, element.treesCount));
    });
    return parkovi;
}
const parseUlica = (data) => {
    const ulice = [];
    data.forEach(element => {
        ulice.push(new Ulica(element.name, element.year, element.streetLength, element.size));
    });
    return ulice;
}
const parseData = (data) => {
    let parsedData = {};
    if (data.parkovi) {
        parsedData.parkovi = parsePark(data.parkovi);
    }
    if (data.ulice) {
        parsedData.ulice = parseUlica(data.ulice);
    }
    return parsedData;
}

export default parseData;