const googleSearch = document.querySelector('.search-button');
const randomSearch = document.querySelector('.random-button');

function getAllResults(e){
    e.preventDefault();
    window.location.href = './search.html'
}

googleSearch.addEventListener('click', getAllResults);
randomSearch.addEventListener('click', async (e) =>{
    e.preventDefault();
    let response = await fetch('http://0.0.0.0:3000/search/random');
    let data = await response.json();
    let url = data.url;
    window.location.href = url;
})


