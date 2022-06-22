async function fetchData(){
    let response = await fetch('http://0.0.0.0:3000/search');
    let data = await response.json();
    console.log(data);
    appendResults(data);
}

function appendResults(data){
    data.forEach(appendResult)
}

function appendResult(itemData){

    const searchResultArea = document.querySelector('#searchresultsarea');

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

}

function getRandomResult(e){
    e.preventDefault();
}

fetchData()


exports = {
    fetchData,
    appendResults,
    appendResult
}
