const themeColor = document.querySelector('body');
const allDivs = document.getElementsByTagName('a');
const changeMode = document.querySelector('#changeMode');
const searchButton = document.querySelector('.search-button');
const randomButton = document.querySelector('.random-button');
const logoTheme = document.querySelector('#logo_google')
const footer = document.querySelector('.upperFooter');
const footerDiv = document.querySelector('.location');
const input = document.querySelector('.field_A');
const svg = document.querySelector('#svg');

changeMode.addEventListener('click', (e) => {

    if (changeMode.textContent == 'Change Dark') {

        changeMode.textContent = 'Change Light'
        logoTheme.src = '../images/google_logo_dark.png'
        themeColor.style.backgroundColor = '#202124'
        themeColor.style.color = 'whitesmoke'
        footerDiv.style.color = 'whitesmoke'
        searchButton.style.backgroundColor = '#303134'
        randomButton.style.backgroundColor = '#303134'
        searchButton.style.color = '#e1e3e6'
        randomButton.style.color = '#e1e3e6'
        footerDiv.style.borderBottom = '1px solid #212327'
        footer.style.backgroundColor = '#181818'
        input.style.background = '#202124'
        svg.setAttribute('fill', 'white')

        for (let i = 0; i < allDivs.length; i++) {
            allDivs[i].style.color = 'whitesmoke'
        }
    } else {

        changeMode.textContent = 'Change Dark'
        logoTheme.src = '../images/googlelogo_color_272x92dp.png'
        themeColor.style.backgroundColor = 'white'
        themeColor.style.color = 'black'
        footerDiv.style.color = '#70757a'
        searchButton.style.backgroundColor = '#f8f9fa'
        randomButton.style.backgroundColor = '#f8f9fa'
        searchButton.style.color = 'black'
        randomButton.style.color = 'black'
        footerDiv.style.borderBottom = '1px solid #dadce0'
        footer.style.backgroundColor = 'white'
        input.style.background = '#fff'
        svg.setAttribute('fill', 'black')

        for (let i = 0; i < allDivs.length; i++) {
            allDivs[i].style.color = '#70757a'
        }
    }


})
