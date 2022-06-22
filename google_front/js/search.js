const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const query = urlParams.get('q')

const searchResultArea = document.querySelector('#searchresultsarea');


async function fetchData(query) {
    let response = await fetch(`http://0.0.0.0:3000/${query}`);
    let data = await response.json();
    console.log(data);
    appendResults(data);
}

function appendResults(data) {
    data.forEach(appendResult)
}

function appendResult(itemData) {

    searchResultArea.innerHTML += `
        <div class="searchresult">
            <a href="${itemData.url}">${itemData.url} 
                <h2>Lock ${itemData.header}</h2>
            </a> 
            
            <br>
            <p>${itemData.info}</p>
        </div>
    `
}

function getRandomResult(e) {
    e.preventDefault();
}

fetchData(query)


exports = {
    fetchData,
    appendResults,
    appendResult
}
