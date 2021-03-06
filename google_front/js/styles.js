
// THIS FILE IS FOR STYLES FUNCTIONALITY PURPOSES ONLY

const themeColor = document.querySelector('body');
const allDivs = document.getElementsByTagName('a');
const changeMode = document.querySelector('#changeMode');
const searchButton = document.querySelector('.search-button');
const randomButton = document.querySelector('.random-button');
const logoTheme = document.querySelector('#logo_google')
const footer = document.querySelector('.upperFooter');
const footerDiv = document.querySelector('.location');
const input = document.querySelector('.field_A');
const settingBox = document.querySelector('.menu');
const svg = document.querySelector('#svg');
const dropup = document.querySelector('#dropup');
const settingsLinkDropUp = document.querySelector('#settingDropUp');
const settingsDropUp = document.querySelector('.gTMtLb')


// OPENING SETTING BOX
settingsLinkDropUp.addEventListener('click', (e) => {

    settingsDropUp.style.display = 'block'

})


// SHUTTING SETTING BOX WHEN CLICKING ON ELEMENTS BELOW
document.addEventListener('click', (e) => {
    if (e.path[0].className == 'lower-mid' || e.path[0].className == 'logo') {
        settingsDropUp.style.display = 'none'
    }
})






// IM FEELING LUCKY BTN 
// RANDOM STRINGS ON AN ARRAY AND RENDERING INNERTEXT BTN WITH CHOSEN
randomButton.addEventListener('mouseover', (e) => {

    const textContentBtn = ["I'm Feeling Lucky", "I'm Feeling Playful", "I'm Feeling Doodley", "I'm Feeling Adventurous", "I'm Feeling Generous", "I'm Feeling Artistic", "I'm Feeling Hungry"]

    const randomInnerText = Math.floor(Math.random() * textContentBtn.length)

    randomButton.value = textContentBtn[randomInnerText]

})


// GET VALUE BACK AS SOON MOUSE GETS OUT BTN
randomButton.addEventListener('mouseout', (e) => {
    randomButton.value = "I'm Feeling Lucky"
})


// DARK MODE
changeMode.addEventListener('click', (e) => {

    if (changeMode.textContent == 'Change Dark') {

        changeMode.textContent = 'Change Light'
        logoTheme.src = 'images/google_logo_dark.png'
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
        settingBox.style.background = '#202124'
        svg.setAttribute('fill', 'white')

        // GETTING ALL p TAGS 
        for (let i = 0; i < allDivs.length; i++) {
            allDivs[i].style.color = 'whitesmoke'
        }

    } else {

        changeMode.textContent = 'Change Dark'
        logoTheme.src = './images/googlelogo_color_272x92dp.png'
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
        settingBox.style.background = '#fff'
        svg.setAttribute('fill', 'black')

        // GETTING ALL p TAGS 
        for (let i = 0; i < allDivs.length; i++) {
            allDivs[i].style.color = '#70757a'
        }
    }
})


