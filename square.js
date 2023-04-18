class Square {
    constructor(size, color, board) {
        this.size = size
        this.color = color
        this.board = board
        this.position = position
    }
    init() {
        const square = document.createElement('div')
        square.classList.add('square')
        square.style.width = `${this.size}px`
        square.style.height = `${this.size}px`
        square.style.background = this.color
        const boardWidth = parseInt(window.getComputedStyle(thid.board).width)
        if(this.position == 1) {
            square.style.right = '0'
            square.style.top = boardWidth - this.size + 'px'
        } else if (this.position == 2) { 
            square.style.top = boardWidth - this.size + 'px'
            square.style.right = '0'
        }

        this.board.append(square)
    }
}