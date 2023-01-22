import './index.css'
import './cards.js'
import './difficulty.js'
import './index.js'
var row = document.querySelector('.row1')
var size = 0
var rowsize = 0
const shuffledcards = cardArr.sort(() => 0.5 - Math.random())
switch (localStorage.getItem('difficulty')) {
    case '1':
        size = 6
        rowsize = 2
        break
    case '2':
        size = 12
        rowsize = 4
        break
    case '3':
        size = 18
        rowsize = 6
        break
}

let selected = shuffledcards.slice(38 - size / 2)
selected = selected.concat(selected.slice(0))
selected.sort(() => 0.5 - Math.random())
var i = 1
var currow = '1'
selected.forEach((element) => {
    const div = document.createElement('div')
    const backimg = document.createElement('img')
    backimg.src = element.src
    div.classList.add('card')
    div.setAttribute('data-rang', element.rang)
    div.setAttribute('data-suit', element.suit)
    div.appendChild(backimg)
    row.appendChild(div)

    i++
    if (i === rowsize + 1) {
        i = 1
        currow++
        row = document.querySelector('.row' + currow)
    }
})
const cards = document.querySelectorAll('.card')
var card1 = null
var card2 = null
var opened_cards = 0

var seconds = 0
var minutes = 0
var appendMinutes = document.getElementById('minutes')
var appendSeconds = document.getElementById('seconds')
var Interval

function startTimer() {
    seconds++

    if (seconds <= 9) {
        appendSeconds.innerHTML = '0' + seconds
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds
    }

    if (seconds > 59) {
        console.log('minutes')
        minutes++
        appendMinutes.innerHTML = '0' + minutes
        seconds = 0
        appendSeconds.innerHTML = '0' + 0
    }
    if (minutes > 9) {
        appendMinutes.innerHTML = minutes
    }
}

setTimeout(function () {
    cards.forEach((card) => {
        card.querySelector('img').src = 'img/рубашка.svg'
    })
    clearInterval(Interval)
    Interval = setInterval(startTimer, 1000)
    cards.forEach((card) => {
        card.addEventListener('click', function (event) {
            console.log(card.querySelector('img').src)
            card.querySelector('img').src = cardArr.find(
                (element) =>
                    element.rang === card.dataset.rang &&
                    element.suit === card.dataset.suit
            ).src
            console.log(card.src)
            if (card1 === null) card1 = card
            else {
                card2 = card
                console.log(card1)
                console.log(card2)
                if (
                    card1.dataset.rang !== card2.dataset.rang ||
                    card1.dataset.suit !== card2.dataset.suit
                ) {
                    setTimeout(function () {
                        alert('Вы проиграли')
                    }, 10)
                    clearInterval(Interval)
                }
                opened_cards += 2
                if (opened_cards == size)
                    setTimeout(function () {
                        alert('Вы выиграли!')
                    }, 10)
                card1 = null
                card2 = null
            }
        })
    })
}, 5000)
