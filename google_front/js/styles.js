const themeColor = document.querySelector('body');
const allDivs = document.getElementsByTagName('a');
const changeMode = document.querySelector('#changeMode');
const searchButton = document.querySelector('.search-button');
const randomButton = document.querySelector('.random-button');
const footer = document.querySelector('.upperFooter');
const footerDiv = document.querySelector('.location');
const svg = document.querySelector('#svg');

changeMode.addEventListener('click', (e) => {

    if (changeMode.textContent == 'Change Dark') {

        changeMode.textContent = 'Change Light'
        themeColor.style.backgroundColor = '#202124'
        themeColor.style.color = 'whitesmoke'
        footerDiv.style.color = 'whitesmoke'
        searchButton.style.backgroundColor = '#303134'
        randomButton.style.backgroundColor = '#303134'
        searchButton.style.color = '#e1e3e6'
        randomButton.style.color = '#e1e3e6'
        footer.style.backgroundColor = 'black'
        svg.setAttribute('fill', 'white')

        for (let i = 0; i < allDivs.length; i++) {
            allDivs[i].style.color = 'whitesmoke'
        }
    } else {

        changeMode.textContent = 'Change Dark'
        themeColor.style.backgroundColor = 'white'
        themeColor.style.color = 'black'
        footerDiv.style.color = 'black'
        searchButton.style.backgroundColor = '#f8f9fa'
        randomButton.style.backgroundColor = '#f8f9fa'
        searchButton.style.color = 'black'
        randomButton.style.color = 'black'
        footer.style.backgroundColor = 'white'
        svg.setAttribute('fill', 'black')
        console.log('error')

        for (let i = 0; i < allDivs.length; i++) {
            allDivs[i].style.color = 'black'
        }
    }


})
