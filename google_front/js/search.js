const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const query = urlParams.get('q')

const searchResultArea = document.querySelector('#searchresultsarea');


async function fetchData(query) {

    let response = await fetch(`http://0.0.0.0:3000/${query}`);
    let data = await response.json();
    appendResults(data);
    
}

function appendResults(data) {
    data.forEach(appendResult)
}

function appendResult(itemData){

    // console.log(itemData.header);
    const searchResultArea = document.querySelector('#searchresultsarea');
    console.log(searchResultArea);
    const container = document.createElement('div');
    const header = document.createElement('h2');
    const link = document.createElement('a');
    const headerLink = document.createElement('a');
    const text = document.createElement('p');
    container.setAttribute('class', 'searchresult');
    // container.setAttribute('id', `searchresult-${parseInt(itemData[0] + 1)}`)

    link.textContent = itemData.url;
    link.href = itemData.url;
    text.textContent = itemData.info;

    headerLink.href = itemData.url;
    headerLink.textContent = itemData.header;
    header.appendChild(headerLink);



    // console.log(header, link, text);

    container.appendChild(header);
    container.appendChild(link);
    container.appendChild(text);

    console.log(container);

    searchResultArea.append(container);

    let errorHeader = "Could not find any results for this search"
    if(headerLink.textContent == errorHeader){
        let pagebar = document.querySelector('.pagebar');
        let relatedsearches = document.querySelector('.relatedsearches')
        headerLink.href = "../google_front/error.html"
        pagebar.remove();
        relatedsearches.remove();
    }
}

fetchData(query)


exports = {
    fetchData,
    appendResults,
    appendResult
}
