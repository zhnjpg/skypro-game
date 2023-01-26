import '/index.css'
document.querySelector('.b1')!.addEventListener('click', () => {
    window.difficulty = 1
    localStorage.setItem('difficulty', window.difficulty)
    console.log(window.difficulty)
})

document.querySelector('.b2')!.addEventListener('click', () => {
    window.difficulty = 2
    localStorage.setItem('difficulty', window.difficulty)
    console.log(window.difficulty)
})

document.querySelector('.b3')!.addEventListener('click', () => {
    window.difficulty = 3
    localStorage.setItem('difficulty', window.difficulty)
    console.log(window.difficulty)
})
