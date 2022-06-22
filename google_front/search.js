async function fetchData(){
    let response = await fetch('http://localhost:3000/search');
    let data = await response.json();
    console.log(data);
    appendResult(data);
}

function appendResults(data){
    data.forEach(appendResult)
}

function appendResult(itemData){

    // document.location.href = 'search.html'; 
    const searchResultArea = document.querySelector('#searchresultsarea');
    // console.log(searchResultArea);

    const container = document.createElement('div');
    const header = document.createElement('h2');
    const link = document.createElement('a');
    const text = document.createElement('p');
    container.setAttribute('class', 'searchresult');
    container.setAttribute('id', `searchresult-${itemData.id + 1}`)

    container.appendChild(header);
    container.appendChild(link);
    container.appendChild(text);

    searchResultArea.append(container);
    // console.log(container);

    
}

function getRandomResult(e){
    e.preventDefault();
    console.log('testing')
}

module.exports = {
    fetchData,
    appendResults,
    appendResult
}
