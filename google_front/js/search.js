
//see documentation for how to populate
const apikey = "AIzaSyByx4bhUMsKPpBmvBSASQMr1QN5OfgMNns";
const cx = "f4a0a13d4493c2097";
// Getting query submit parameter
const queryString = window.location.search;

//Instance of queryString
const urlParams = new URLSearchParams(queryString);

// url params method getting query string submited for Local Data Form
const query = urlParams.get('q')
// url params method getting query string submited for API Form
const api_query = urlParams.get('api_q')

// Element that render all data results
const searchResultArea = document.querySelector('#searchresultsarea');


// FETCH LOCAL DATA, OUR API
async function fetchData(query) {

    let response = await fetch(`http://0.0.0.0:3000/${query}`);
    let data = await response.json();

    appendResults(data);
    relatedSearches(query);
}

// FETCH API DATA, GOOGLE API
async function fetchAPI(api_query) {

    let response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${apikey}&cx=${cx}&q=${api_query}`);
    let data = await response.json();

    appendApiResults(data.items);
    relatedSearches(api_query);
}


// HANDLERS API DATA
function appendApiResults(data) {
    data.forEach(renderApiResult)
}

// HANDLERS LOCAL DATA
function appendResults(data) {
    data.forEach(appendResult)
}


// FUNCTION THAT BUILD ELEMENTS FOR RENDERING API RESULTS ON HTML
function renderApiResult(apiData) {
    const searchResultArea = document.querySelector('#searchresultsarea');
    console.log(searchResultArea);
    const container = document.createElement('div');
    const header = document.createElement('h2');
    const link = document.createElement('a');
    const headerLink = document.createElement('a');
    const text = document.createElement('p');
    container.setAttribute('class', 'searchresult');
    // container.setAttribute('id', `searchresult-${parseInt(apiData[0] + 1)}`)

    link.textContent = apiData.displayLink;
    link.href = apiData.link;
    text.textContent = apiData.snippet;

    headerLink.href = apiData.link;
    headerLink.textContent = apiData.title;

    header.appendChild(headerLink);

    container.appendChild(header);
    container.appendChild(link);
    container.appendChild(text);

    console.log(container);
    searchResultArea.append(container);

}


// FUNCTION THAT BUILD ELEMENTS FOR RENDERING LOCAL DATA RESULTS ON HTML
function appendResult(itemData) {

    // console.log(itemData.header);
    const searchResultArea = document.querySelector('#searchresultsarea');
    console.log(searchResultArea);
    const container = document.createElement('div');
    const header = document.createElement('h2');
    const link = document.createElement('a');
    const headerLink = document.createElement('a');
    const text = document.createElement('p');
    container.setAttribute('class', 'searchresult');

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

    // Error handling for when query doesn't match our internal database
    let errorHeader = "Could not find any results for this search"
    if (headerLink.textContent == errorHeader) {
        let pagebar = document.querySelector('.pagebar');
        let relatedsearches = document.querySelector('.relatedsearches');
        let footer = document.querySelector('#footer');
        footer.style.position = "fixed";
        footer.style.bottom = "0px";
        headerLink.href = "../google_front/error.html"
        pagebar.remove();
        relatedsearches.remove();
    }
}


async function relatedSearches(query) {
    let relatedSearches = document.querySelector('#relatedsearches-header');
    relatedSearches.textContent = `Search results related to ${query}`;

    const options = { 
        method: 'GET',
        body: null,
        headers: {
        "Content-Type": "text/plain"
    }
    };
    console.log(query)
    let response = await fetch(`https://api.bing.com/osjson.aspx?query=${query}`, options);
    let data = await response.json();
    let arr = await data[1];
    arr.splice(arr.length - 4, 4);
    console.log(arr);


    let leftRelatedSearches = document.querySelector('.relatedleft');
    let rightRelatedSearches = document.querySelector('.relatedright');

    for(i=0; i <arr.length; i++){
        console.log(i);
        if(i<4){
            let li = document.createElement('li');
            li.textContent = arr[i];
            leftRelatedSearches.appendChild(li);
        } else {
            let li = document.createElement('li');
            li.textContent = arr[i];
            rightRelatedSearches.appendChild(li);
        }
    }

}


// CONDITIONAL THAT VERIFIES WHAT FORM THE QUERY COMES AND CALL THE APPROPRIATE FUNCTION
if (queryString.includes('api')) {
    fetchAPI(api_query)
} else {
    fetchData(query)
}



exports = {
    fetchData,
    appendResults,
    appendResult
}
