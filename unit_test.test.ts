const { it, expect } = require('@jest/globals')
import { shuffleDeck, checkPair } from './game'

it('Должна сгенерировать набор из 6 карт', () => {
    localStorage.setItem('difficulty', '1')
    let check = shuffleDeck()
    expect(check).toHaveLength(6)
})

it('Должна сгенерировать набор из 12 карт', () => {
    localStorage.setItem('difficulty', '2')
    let check = shuffleDeck()
    expect(check).toHaveLength(12)
})

it('Должна сгенерировать набор из 18 карт', () => {
    localStorage.setItem('difficulty', '3')
    let check = shuffleDeck()
    expect(check).toHaveLength(18)
})

it('Должна сгенерировать набор из 3 пар карт', () => {
    localStorage.setItem('difficulty', '1')
    let check = shuffleDeck()
    check.forEach((element) => {
        let result = check.filter(
            (x) => x.suit === element.suit && x.rang === element.rang
        )
        expect(result).toHaveLength(2)
    })
})

it('Должна сгенерировать набор из 6 случайных карт', () => {
    localStorage.setItem('difficulty', '1')
    const unshuffled = [
        // Это - первые 6 карт из изначального массива. Если после перемешивания массив остался в том же порядке - тест должен быть провален.
        {
            suit: 'peaks',
            rang: '6',
            src: require('./img/6 пики.svg'),
        },

        {
            suit: 'peaks',
            rang: '7',
            src: require('./img/7 пики.svg'),
        },

        {
            suit: 'peaks',
            rang: '8',
            src: require('./img/8 пики.svg'),
        },

        {
            suit: 'peaks',
            rang: '9',
            src: require('./img/9 пики.svg'),
        },

        {
            suit: 'peaks',
            rang: '10',
            src: require('./img/10 пики.svg'),
        },

        {
            suit: 'peaks',
            rang: 'j',
            src: require('./img/валет пики.svg'),
        },
    ]

    let check = shuffleDeck()
    expect(check != unshuffled)
})

it('Должна сравнить пару карт на то, являются ли они одинаковыми', () => {
    const card1 = document.createElement('div')

    card1.classList.add('card')
    card1.setAttribute('data-rang', '6')
    card1.setAttribute('data-suit', 'hearts')

    const card2 = document.createElement('div')

    card2.classList.add('card')
    card2.setAttribute('data-rang', '6')
    card2.setAttribute('data-suit', 'hearts')

    expect(checkPair(card1, card2)).toBe(true)
})

it('Должна сравнить пару карт на то, являются ли они разными', () => {
    const card1 = document.createElement('div')

    card1.classList.add('card')
    card1.setAttribute('data-rang', '6')
    card1.setAttribute('data-suit', 'hearts')

    const card2 = document.createElement('div')

    card2.classList.add('card')
    card2.setAttribute('data-rang', '5')
    card2.setAttribute('data-suit', 'hearts')

    expect(checkPair(card1, card2)).toBe(false)
})
