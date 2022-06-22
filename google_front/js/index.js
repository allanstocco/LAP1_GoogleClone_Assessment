const googleSearch = document.querySelector('.search-button');
const randomSearch = document.querySelector('.random-button');

function getAllResults(e){
    e.preventDefault();
    window.location.href = './search.html'
}

googleSearch.addEventListener('click', getAllResults);


