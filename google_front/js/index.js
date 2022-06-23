const googleSearch = document.querySelector('.search-button');
const randomSearch = document.querySelector('#random-button');
const submitQuery = document.querySelector('#submit_query')
const database_request = document.querySelector('#database_request');
const api_request = document.querySelector('#api_request');
const data_id = document.querySelector('#data_id');
const api_id = document.querySelector('#api_id');





// googleSearch.addEventListener('click', getAllResults);

data_id.addEventListener('click', (e) => {
    database_request.style.display = 'block';
    api_request.style.display = 'none';
    data_id.style.backgroundColor = '#4285f4';
    data_id.style.color = 'whitesmoke';
    api_id.style.backgroundColor = '#fff';
    api_id.style.color = 'black';
})

api_id.addEventListener('click', (e) => {
    api_request.style.display = 'block';
    database_request.style.display = 'none';
    data_id.style.backgroundColor = '#fff';
    data_id.style.color = 'black';
    api_id.style.backgroundColor = '#4285f4';
    api_id.style.color = 'whitesmoke';
})


randomSearch.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log(e)
    let response = await fetch('http://0.0.0.0:3000/search/random');
    let data = await response.json();
    let url = data.url;
    window.location.href = url;
})


