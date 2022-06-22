const themeColor = document.querySelector('body');
const allDivs = document.getElementsByTagName('a');
const changeMode = document.querySelector('#changeMode');
const footer = document.querySelector('.upperFooter');
const svg = document.querySelector('#svg');

changeMode.addEventListener('click', (e) => {
    console.log(e)
    themeColor.style.backgroundColor = 'black'
    themeColor.style.color = 'whitesmoke'
    footer.style.backgroundColor = 'black'
    svg.setAttribute('fill', 'white')

    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].style.color = 'whitesmoke'
    }

})
