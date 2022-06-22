let googleSearch = document.querySelector('.search-button');
let randomSearch = document.querySelector('.random-button');

googleSearch.addEventListener('click', getAllResults);
randomSearch.addEventListener('click', getRandomResult);

async function getAllResults(e){
    // let response = await fetch();
    // let data = await response.json();
    e.preventDefault();
    console.log('testing')

    let response = await fetch('http://localhost:3000/search');
    let data = await response.json();
    console.log(data)

}

function getRandomResult(e){
    e.preventDefault();
    console.log('testing')
}
