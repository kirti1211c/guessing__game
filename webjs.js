// document.addEventListener('DOMContentLoaded', () => {
const arr = [
    {
        name: 'burger',
        img: 'images/burger.jpg'
    },
    {
        name: 'burger',
        img: 'images/burger.jpg'
    },
    {
        name: 'choco',
        img: 'images/choco.jpg'
    },
    {
        name: 'choco',
        img: 'images/choco.jpg'
    },
    {
        name: 'coffee',
        img: 'images/coffee.jpg'
    },
    {
        name: 'coffee',
        img: 'images/coffee.jpg'
    },
    {
        name: 'corn',
        img: 'images/corn.jpg'
    },
    {
        name: 'corn',
        img: 'images/corn.jpg'
    },
    {
        name: 'donut',
        img: 'images/donut.jpg'
    },
    {
        name: 'donut',
        img: 'images/donut.jpg'
    },
    {
        name: 'eggs',
        img: 'images/eggs.jpg'
    },
    {
        name: 'eggs',
        img: 'images/eggs.jpg'
    },
    {
        name: 'icecream',
        img: 'images/icecream.jpg'
    },
    {
        name: 'icecream',
        img: 'images/icecream.jpg'
    },
    {
        name: 'waffle',
        img: 'images/waffle.jpg'
    },
    {
        name: 'waffle',
        img: 'images/waffle.jpg'
    }
]

arr.sort(() => 0.5 - Math.random());
let cardCho = [];
let cardChoID = [];
let cardsWon = [];
let resutD = document.querySelector('#result');
const grid = document.querySelector('div');

function create() {
    console.log("hi");
    for (let i = 0; i < arr.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', 'images/ques.jpg');
        card.setAttribute('id', i);
        card.style.border = ' solid black';
        card.addEventListener('click', flipcard);
        grid.appendChild(card);
    }
}
create();
function checkForMatch() {
    let cards = document.querySelectorAll('img');
    const one = cardChoID[0];
    const two = cardChoID[1];
    if (cardCho[0] === cardCho[1]) {
        cards[one].setAttribute('src', 'images/check.jpg');
        cards[two].setAttribute('src', 'images/check.jpg');
        cardsWon.push(cardCho)
    } else {
        cards[one].setAttribute('src', 'images/ques.jpg');
        cards[two].setAttribute('src', 'images/ques.jpg');
    }
    cardChoID = [];
    cardCho = [];
    resutD.textContent = cardsWon.length;
    if (cardsWon.length === arr.length / 2) {
        resutD.textContent = 'CONGRTAS!!!';
    }
}
function flipcard() {
    let cardID = this.getAttribute('id');
    cardCho.push(arr[cardID].name);
    cardChoID.push(cardID)
    this.setAttribute('src', arr[cardID].img);
    if (cardCho.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}
// })
