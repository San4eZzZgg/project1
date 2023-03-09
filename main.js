const board = document.querySelector('.board')
const body = document.querySelector('body')

let data = [[0, 0, 2, 0], [0, 0, 0, 0], [2, 0, 0, 0], [0, 0, 0, 0]]
const colors = {
    0: 'rgb(230, 215, 175)', 2: 'rgb(205, 139, 85)', 4: '#ee7b24', 8: 'rgb(226, 132, 55)', 16: 'rgb(221, 51, 28)', 32: 'rgb(221, 92, 28)', 64: 'rgb(221, 128, 28)', 128: 'rgb(221, 157, 28)', 256: 'rgb(232, 157, 7)', 512: 'rgb(232, 123, 7)', 1024: 'rgb(232, 198, 7)', 2048: 'rgb(229, 214, 81)'
}

body.addEventListener('keydown', (event) => {
    moveController(event.key)
})

function moveController(key) {
    switch (key) {
        case 'a':
            console.log('left')
            break
        case 'd':
            console.log('right')
            break
        case 'w':
            console.log('top')
            break
        case 's':
            console.log('bottom')
            break
    }
}
reDrawField()



function left() {
    data.map(row => {
        for (let i = 0; i < row.length; i++){
        if (row[i] === row [i + 1]){
            row[i] = row[i] * 2
            row[i + 1] = 0
            }
        }
    })
}
function right() {
    data.map(row => {
        for (let i = 0; i < row.length; i--){
        if (row[i] === row [i + 1]){
            row[i] = row[i] * 2
            row[i + 1] = 0
            }
        }
    })
}

function cleanZeroesFills(diection) {
    data.map(row => row.filter (el => el != 0))
    data.map(row => {
        while (row.length < 4) {
            direction === 'left' ? row.push(0):row.unshift(0)
        }
    })
}










function reDrawField() {
    board.innerHTML = ''
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            draw(data[i][j])
        }
    }

    function draw(num) {
        const square = document.createElement('div')
        square.classList.add('square')
        square.style.backgroundColor = colors[num]
        square.innerHTML = num ? num : ''
        board.append(square)
    }
}