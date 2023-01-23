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
var currow = 1

selected.forEach((element) => {
    const div = document.createElement('div')
    const backimg = document.createElement('img')
    backimg.src = element.src
    div.classList.add('card')
    div.setAttribute('data-rang', element.rang)
    div.setAttribute('data-suit', element.suit)
    div.appendChild(backimg)
    row!.appendChild(div)

    i++
    if (i === rowsize + 1) {
        i = 1
        currow++
        row = document.querySelector('.row' + currow)
    }
})
const cards = document.querySelectorAll('.card')
var card1: HTMLElement
var card2: HTMLElement
var opened_cards = 0

var seconds = 0
var minutes = 0
var appendMinutes = document.getElementById('minutes')
var appendSeconds = document.getElementById('seconds')

function startTimer() {
    seconds++

    if (seconds <= 9) {
        appendSeconds!.innerHTML = '0' + seconds
    }

    if (seconds > 9) {
        appendSeconds!.innerHTML = '' + seconds
    }

    if (seconds > 59) {
        console.log('minutes')
        minutes++
        appendMinutes!.innerHTML = '0' + minutes
        seconds = 0
        appendSeconds!.innerHTML = '0' + 0
    }
    if (minutes > 9) {
        appendMinutes!.innerHTML = minutes + ''
    }
}

setTimeout(function () {
    cards.forEach((card) => {
        card.querySelector('img')!.src = 'img/рубашка.svg'
    })

    var Interval = setInterval(startTimer, 1000)
    cards.forEach((card) => {
        card.addEventListener('click', function (event) {
            console.log(card.querySelector('img')!.src)
            if (card instanceof HTMLElement) {
                card.querySelector('img')!.src = cardArr.find(
                    (element) =>
                        element.rang === card.dataset.rang &&
                        element.suit === card.dataset.suit
                )!.src
            }

            if (card1.dataset.rang === '0') card1 = card as HTMLElement
            else {
                card2 = card as HTMLElement
                console.log(card1)
                console.log(card2)

                if (
                    card1.dataset.rang !== card2.dataset.rang ||
                    card1.dataset.suit !== card2.dataset.suit
                ) {
                    setTimeout(generateLoseMsg, 10)
                    clearInterval(Interval)
                }

                opened_cards += 2
                if (opened_cards == size) {
                    setTimeout(generateWinMsg, 10)
                    clearInterval(Interval)
                }
                card1.dataset.rang = '0'
                card2.dataset.rang = '0'
            }
        })
    })
}, 5000)

function generateWinMsg() {
    const windiv = document.createElement('div')
    windiv.classList.add('div-win')
    document.body.insertBefore(windiv, document.querySelector('.cards-div'))
    const winimg = document.createElement('img')
    winimg.src = 'img/celebrate.svg'
    winimg.classList.add('win-img')
    windiv.appendChild(winimg)
    const winh3 = document.createElement('h3')
    winh3.classList.add('win-text')
    winh3.textContent = 'Вы выиграли!'
    const winh4 = document.createElement('h4')
    winh4.classList.add('time-spent-title')
    winh4.textContent = 'Затраченное время:'
    const winh2 = document.createElement('h2')
    winh2.classList.add('time-spent')
    winh2.textContent =
        appendMinutes!.textContent + ':' + appendSeconds!.textContent
    const divhref = document.createElement('a')
    divhref.setAttribute('href', 'index.html')
    const divbut = document.createElement('button')
    divbut.classList.add('button-again-win')
    divbut.textContent = 'Играть сначала'
    windiv.appendChild(winimg)
    windiv.appendChild(winh3)
    windiv.appendChild(winh4)
    windiv.appendChild(winh2)
    windiv.appendChild(divhref)
    divhref.appendChild(divbut)
}

function generateLoseMsg() {
    const windiv = document.createElement('div')
    windiv.classList.add('div-win')
    document.body.insertBefore(windiv, document.querySelector('.cards-div'))
    const winimg = document.createElement('img')
    winimg.src = 'img/lose.svg'
    winimg.classList.add('win-img')
    windiv.appendChild(winimg)
    const winh3 = document.createElement('h3')
    winh3.classList.add('win-text')
    winh3.textContent = 'Вы проиграли!'
    const winh4 = document.createElement('h4')
    winh4.classList.add('time-spent-title')
    winh4.textContent = 'Затраченное время:'
    const winh2 = document.createElement('h2')
    winh2.classList.add('time-spent')
    winh2.textContent =
        appendMinutes!.textContent + ':' + appendSeconds!.textContent
    const divhref = document.createElement('a')
    divhref.setAttribute('href', 'index.html')
    const divbut = document.createElement('button')
    divbut.classList.add('button-again-win')
    divbut.textContent = 'Играть сначала'
    windiv.appendChild(winimg)
    windiv.appendChild(winh3)
    windiv.appendChild(winh4)
    windiv.appendChild(winh2)
    windiv.appendChild(divhref)
    divhref.appendChild(divbut)
}
