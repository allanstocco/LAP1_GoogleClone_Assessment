let googleSearch = document.querySelector('.search-button');
let randomSearch = document.querySelector('.random-button');

googleSearch.addEventListener('click', getAllResults);
randomSearch.addEventListener('click', getRandomResult);

await function getAllResults(e){
    // let response = await fetch();
    // let data = await response.json();
    e.preventDefault();
    console.log('testing')

    let response = await fetch('https://localhost:3000');
    let data = await response.json();
    
}

function getRandomResult(e){
    e.preventDefault();
    console.log('testing')
}
