const body = document.querySelector('body')
const board = document.querySelector('#board')

const colors = ['#343E40', '#6C4675', '#412227', '#8A6642', '#CB2821',
    '#B44C43', '#9D9101', '#7E7B52', '#C2B078', '#474A51']

body.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        addFigure()
    }
})
const figures = ['circle', 'square','oval'] 
function addFigure() {
    const newFirugre = document.createElement('div')
    // Разный цвет
    const randomColor = colors[rnd(0, colors.length - 1)]
    newFirugre.style.background = randomColor
    const type = figures[rnd(0, figures.length)]

    addStyles(newFirugre, type)
    board.append(newFirugre)
}

function addStyles(figure, type) {
    figure.classList.add(type)
    switch (type) {
        case 'circle': {
            const size = rnd(10, 70)
            figure.style.width = size + 'px'
            figure.style.height = size + 'px'
            const { width, height } = board.getBoundingClientRect()
            figure.style.top = rnd(0, width - size) + 'px'
            figure.style.left = rnd(0, height - size) + 'px'
            break
        }
        case 'square': {
            const size = rnd(10, 70)
            figure.style.width = size + 'px'
            figure.style.height = size + 'px'
            const { width, height } = board.getBoundingClientRect()
            figure.style.top = rnd(0, width - size) + 'px'
            figure.style.left = rnd(0, height - size) + 'px'
            break
        }
        case 'oval': {
            const size = rnd(30,100)
            figure.style.width = size*2 + 'px'
            figure.style.height = size + 'px'
            figure.style.borderRadius = `${size}px / ${size/2}px`
            const { width, height } = board.getBoundingClientRect()
            figure.style.top = rnd(0, width - size) + 'px'
            figure.style.left = rnd(0, height - size*2) + 'px'
            break
        }
    }
}




function rnd(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
