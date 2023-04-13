class Square {
    constructor(size, color, board) {
        this.size = size
        this.color = color
        this.board = board
    }
    init() {
        const square = document.createElement('div')
        square.classList.add('square')
        square.style.width = `${this.size}px`
        square.style.height = `${this.size}px`
        square.style.background = this.color

        square.style.right = '0'
        square.style.top = '0'

        this.board.append(square)
    }
}