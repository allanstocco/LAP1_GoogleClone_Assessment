const googleSearch = document.querySelector('.search-button');
const randomSearch = document.querySelector('.random-button');
const query = document.querySelector('#query');
const submitQuery = document.querySelector('#submit_query')



// googleSearch.addEventListener('click', getAllResults);



googleSearch.addEventListener('click', getAllResults);
randomSearch.addEventListener('click', async (e) =>{
    e.preventDefault();
    let response = await fetch('http://0.0.0.0:3000/search/random');
    let data = await response.json();
    let url = data.url;
    window.location.href = url;
})

