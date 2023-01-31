const body = document.querySelector('body')



for (let i = 0; i < 5; i++){
    const block = document.createElement('div')
    block.innerHTML = 'это мы добавили из js ' +i
    block.classList.add('test')

    body.append(block)
}

const btn = document.createElement('button')
btn.innerHTML = 'сброс стилей'
btn.classList.add('reset')

btn.addEventListener('click', () => {
    const list = document.querySelectorAll('.test')
    for (element of list){
        element.classList.remove('test')
    }
})

body.append(btn)