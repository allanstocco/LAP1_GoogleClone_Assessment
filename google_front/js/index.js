const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const query = urlParams.get('q');

const api_query = urlParams.get('api_q')

const apikey = "AIzaSyByx4bhUMsKPpBmvBSASQMr1QN5OfgMNns";
const cx = "f4a0a13d4493c2097";

const googleSearch = document.querySelector('.search-button');
const randomSearch = document.querySelector('#random-button');
const randomSearch2 = document.querySelector('.random-button2');
const submitQuery = document.querySelector('#submit_query')
const database_request = document.querySelector('#database_request');
const api_request = document.querySelector('#api_request');
const data_id = document.querySelector('#data_id');
const api_id = document.querySelector('#api_id');
const changeModeBtn = document.querySelector('#changeMode');


// Event Listener that take care of toogling and adjusting styles in settings box
data_id.addEventListener('click', (e) => {
    database_request.style.display = 'block';
    api_request.style.display = 'none';
    data_id.style.backgroundColor = '#4285f4';
    data_id.style.color = 'whitesmoke';

    if (changeModeBtn.textContent == 'Change Dark') {
        api_id.style.backgroundColor = '#fff';
        api_id.style.color = 'black';
    } else {
        api_id.style.backgroundColor = '#202124';
        api_id.style.color = 'whitesmoke';
    }
})

// Event Listener that take care of toogling and adjusting styles in settings box
api_id.addEventListener('click', (e) => {
    api_request.style.display = 'block';
    database_request.style.display = 'none';
    api_id.style.backgroundColor = '#4285f4';
    api_id.style.color = 'whitesmoke';

    if (changeModeBtn.textContent == 'Change Dark') {
        data_id.style.backgroundColor = '#fff';
        data_id.style.color = 'black';
    } else {
        data_id.style.backgroundColor = '#202124';
        data_id.style.color = 'whitesmoke';
    }
})


// Event Listener that call when setting box get clicked adjusting styles.
changeModeBtn.addEventListener('click', () => {
    if (changeModeBtn.textContent == 'Change Dark') {
        data_id.style.backgroundColor = '#fff';
        data_id.style.color = 'black';
        api_id.style.backgroundColor = '#fff';
        api_id.style.color = 'black';
    } else {
        data_id.style.backgroundColor = '#202124';
        data_id.style.color = 'whitesmoke';
        api_id.style.backgroundColor = '#202124';
        api_id.style.color = 'whitesmoke';
    }
})


// Event Listener Function that get random results from Local Database
randomSearch.addEventListener('click', async (e) => {

    e.preventDefault();
    console.log(e)
    let response = await fetch('http://0.0.0.0:3000/search/random');
    let data = await response.json();
    let url = data.url;
    window.location.href = url;

})

// Event Listener Function that get random results from API
randomSearch2.addEventListener('click', async (e) => {

    e.preventDefault();
    console.log(e);
    let arr = ['cats','dogs','phones','sheep','coding','finances','wizards','creeks','relationships','holidays','banking','rap','dancing']
    let query = arr[Math.floor(Math.random() * arr.length)];
    
    let response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${apikey}&cx=${cx}&q=${query}`)
    let data = await response.json();
    let url = data.items[0].link;
    window.location.href = url;
})

