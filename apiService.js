
const dohvatiPodatke = () => fetch('https://cityscapes-masters.herokuapp.com/cityElements')
        .then((response) => response.json())
        .then(response => response);

export {
    dohvatiPodatke,
}