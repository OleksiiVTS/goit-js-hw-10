const URL = "https://restcountries.com/v3.1/name/";
const fields = "name,capital,population,flags,languages"



function fetchCountries(inputValue) {
    return fetch(`${URL}${inputValue}?fields=${fields}`).then((res) => res.json());
};



export { fetchCountries };