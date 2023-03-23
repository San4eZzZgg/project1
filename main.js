const figure = document.querySelector('.second-figure')
const mainFigure = document.querySelector('.main-figure')

function getRandomNumber(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
}

function createRandomFigure(){
    const figure = document.createElement('div')
    const size = getRandomNumber(30, 60)
    const {width, height} = mainFigure.getBoundingClientRect()
    const x = getRandomNumber (0, width-size)
    const y = getRandomNumber (0, height-size)

    figure.classList.add('second-figure')
    figure.style.width = `${size}px`
    figure.style.height = `${size}px`
    figure.style.top = `${y}px`
    figure.style.left = `${x}px`
    figure.style.background = '#ffd4b3'
    figure.style.margin = `${getRandomNumber(10, 100)}px`

    mainFigure.append(figure)
}

document.addEventListener('keydown',(e)=>{
    if (e.keyCode === 32){
        createRandomFigure()
    }
})