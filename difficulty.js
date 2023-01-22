document.querySelector('.b1').addEventListener('click', () => {
    window.globalstate.difficulty = 1
    localStorage.setItem('difficulty', window.globalstate.difficulty)
    console.log(window.globalstate.difficulty)
})

document.querySelector('.b2').addEventListener('click', () => {
    window.globalstate.difficulty = 2
    localStorage.setItem('difficulty', window.globalstate.difficulty)
    console.log(window.globalstate.difficulty)
})

document.querySelector('.b3').addEventListener('click', () => {
    window.globalstate.difficulty = 3
    localStorage.setItem('difficulty', window.globalstate.difficulty)
    console.log(window.globalstate.difficulty)
})
