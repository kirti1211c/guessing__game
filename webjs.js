var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);




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
