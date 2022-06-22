const searchResultArea = document.querySelector('#searchresultsarea');
console.log(searchResultArea)

async function fetchData() {
    let response = await fetch('http://0.0.0.0:3000/search');
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
            <a href="${itemData.url}">${itemData.url} <button style="font-size:20px;">&#8595</button>
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

fetchData()


exports = {
    fetchData,
    appendResults,
    appendResult
}
