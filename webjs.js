// document.addEventListener('DOMContentLoaded', () => {
const arr = [
    {
        name: 'burger',
        img: 'images/burger.jpg',
        alt: "Burger"
    },
    {
        name: 'burger',
        img: 'images/burger.jpg',
        alt: "Burger"
    },
    {
        name: 'choco',
        img: 'images/choco.jpg',
        alt: "choco"
    },
    {
        name: 'choco',
        img: 'images/choco.jpg',
        alt: "choco"
    },
    {
        name: 'coffee',
        img: 'images/coffee.jpg',
        alt: "coffee"
    },
    {
        name: 'coffee',
        img: 'images/coffee.jpg',
        alt: "coffee"
    },
    {
        name: 'corn',
        img: 'images/corn.jpg',
        alt: "corn"
    },
    {
        name: 'corn',
        img: 'images/corn.jpg',
        alt: "corn"
    },
    {
        name: 'donut',
        img: 'images/donut.jpg',
        alt: "donut"
    },
    {
        name: 'donut',
        img: 'images/donut.jpg',
        alt: "donut"
    },
    {
        name: 'eggs',
        img: 'images/eggs.jpg',
        alt: "eggs"
    },
    {
        name: 'eggs',
        img: 'images/eggs.jpg',
        alt: "eggs"
    },
    {
        name: 'icecream',
        img: 'images/icecream.jpg',
        alt: "ice-cream"
    },
    {
        name: 'icecream',
        img: 'images/icecream.jpg',
        alt: "ice-cream"
    },
    {
        name: 'waffle',
        img: 'images/waffle.jpg',
        alt: "waffle"
    },
    {
        name: 'waffle',
        img: 'images/waffle.jpg',
        alt: "waffle"
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
        card.setAttribute('alt', "ques-mark");
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
        cards[one].setAttribute('alt', "check");
        cards[two].setAttribute('src', 'images/check.jpg');
        cards[two].setAttribute('alt', "check");
        cardsWon.push(cardCho)
    } else {
        cards[one].setAttribute('src', 'images/ques.jpg');
        cards[one].setAttribute('alt', "ques-mark");
        cards[two].setAttribute('src', 'images/ques.jpg');
        cards[two].setAttribute('alt', "ques-mark");
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
    this.setAttribute('alt', arr[cardID].alt);
    if (cardCho.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}
// })
