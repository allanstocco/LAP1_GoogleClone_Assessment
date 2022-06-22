const fetchData = require('search')

let googleSearch = document.querySelector('.search-button');
let randomSearch = document.querySelector('.random-button');

function getAllResults(e){
    e.preventDefault();
    fetchData();
    console.log('testing')
}

googleSearch.addEventListener('click', getAllResults);
randomSearch.addEventListener('click', getRandomResult);

