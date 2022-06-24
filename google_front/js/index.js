const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const query = urlParams.get('q')

const api_query = urlParams.get('api_q')

const googleSearch = document.querySelector('.search-button');
const randomSearch = document.querySelector('#random-button');
const submitQuery = document.querySelector('#submit_query')
const database_request = document.querySelector('#database_request');
const api_request = document.querySelector('#api_request');
const data_id = document.querySelector('#data_id');
const api_id = document.querySelector('#api_id');



data_id.addEventListener('click', (e) => {
    database_request.style.display = 'block';
    api_request.style.display = 'none';
    data_id.style.backgroundColor = '#4285f4';
    data_id.style.color = 'whitesmoke';
    api_id.style.backgroundColor = '#fff';
    api_id.style.color = 'black';

    data_id.setAttribute('class','on');
    api_id.setAttribute('class','off');
})

api_id.addEventListener('click', (e) => {
    api_request.style.display = 'block';
    database_request.style.display = 'none';
    data_id.style.backgroundColor = '#fff';
    data_id.style.color = 'black';
    api_id.style.backgroundColor = '#4285f4';
    api_id.style.color = 'whitesmoke';
    
    data_id.setAttribute('class','off');
    api_id.setAttribute('class','on');
})


randomSearch.addEventListener('click', async (e) => {

    console.log(api_request.style.display);
    if(api_request.style.display == 'block'){
    console.log(api_query);
    } else {
    e.preventDefault();
    console.log(e)
    let response = await fetch('http://0.0.0.0:3000/search/random');
    let data = await response.json();
    let url = data.url;
    window.location.href = url;
}
})

