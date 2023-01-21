document.querySelector('.b1').addEventListener('click', () => {
    window.globalstate.difficulty = 1
    console.log(window.globalstate.difficulty)
})

document.querySelector('.b2').addEventListener('click', () => {
    window.globalstate.difficulty = 2
    console.log(window.globalstate.difficulty)
})

document.querySelector('.b3').addEventListener('click', () => {
    window.globalstate.difficulty = 3
    console.log(window.globalstate.difficulty)
})
