// document.addEventListener('DOMContentLoaded', () => {
const arr = [
    {
        name: 'burger',
        img: 'https://chocolatecoveredkatie.com/wp-content/uploads/2019/08/Homemade-Veggie-Burgers-Grillable-Vegan-Gluten-Free-200x200.jpg',
        alt: "Burger"
    },
    {
        name: 'burger',
        img: 'https://chocolatecoveredkatie.com/wp-content/uploads/2019/08/Homemade-Veggie-Burgers-Grillable-Vegan-Gluten-Free-200x200.jpg',
        alt: "Burger"
    },
    {
        name: 'choco',
        img: 'https://cdn-japantimes.com/wp-content/uploads/2018/03/n-chocolate-a-20180309-200x200.jpg',
        alt: "choco"
    },
    {
        name: 'choco',
        img: 'https://cdn-japantimes.com/wp-content/uploads/2018/03/n-chocolate-a-20180309-200x200.jpg',
        alt: "choco"
    },
    {
        name: 'coffee',
        img: 'https://faviana.com/blog/wp-content/uploads/2017/04/cup-of-coffee-200x200.jpg',
        alt: "coffee"
    },
    {
        name: 'coffee',
        img: 'https://faviana.com/blog/wp-content/uploads/2017/04/cup-of-coffee-200x200.jpg',
        alt: "coffee"
    },
    {
        name: 'corn',
        img: 'https://cookinglsl.com/wp-content/uploads/2014/08/boiled-corn-on-the-cob-3-200x200.jpg',
        alt: "corn"
    },
    {
        name: 'corn',
        img: 'https://cookinglsl.com/wp-content/uploads/2014/08/boiled-corn-on-the-cob-3-200x200.jpg',
        alt: "corn"
    },
    {
        name: 'donut',
        img: 'https://b.zmtcdn.com/data/dish_photos/e72/edd9ac8fbc0e38f0071bc1992565ce72.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        alt: "donut"
    },
    {
        name: 'donut',
        img: 'https://b.zmtcdn.com/data/dish_photos/e72/edd9ac8fbc0e38f0071bc1992565ce72.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
        alt: "donut"
    },
    {
        name: 'eggs',
        img: 'https://www.thermofisher.com/blog/wp-content/uploads/2014/03/chicken_egg_200.jpg',
        alt: "eggs"
    },
    {
        name: 'eggs',
        img: 'https://www.thermofisher.com/blog/wp-content/uploads/2014/03/chicken_egg_200.jpg',
        alt: "eggs"
    },
    {
        name: 'icecream',
        img: 'https://chocolatecoveredkatie.com/wp-content/uploads/2018/06/Low-Carb-Ice-Cream-200x200.jpg',
        alt: "ice-cream"
    },
    {
        name: 'icecream',
        img: 'https://chocolatecoveredkatie.com/wp-content/uploads/2018/06/Low-Carb-Ice-Cream-200x200.jpg',
        alt: "ice-cream"
    },
    {
        name: 'waffle',
        img: 'https://bakingmischief.com/wp-content/uploads/2019/09/crispy-waffles-image-square-200x200.jpg',
        alt: "waffle"
    },
    {
        name: 'waffle',
        img: 'https://bakingmischief.com/wp-content/uploads/2019/09/crispy-waffles-image-square-200x200.jpg',
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
        card.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/200px-Question_mark_%28black%29.svg.png');
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
        cards[one].setAttribute('src', 'https://dictionary.cambridge.org/images/thumb/check_noun_002_06440.jpg?version=5.0.203');
        cards[one].setAttribute('alt', "check");
        cards[two].setAttribute('src', 'https://dictionary.cambridge.org/images/thumb/check_noun_002_06440.jpg?version=5.0.203');
        cards[two].setAttribute('alt', "check");
        cardsWon.push(cardCho)
    } else {
        cards[one].setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/200px-Question_mark_%28black%29.svg.png');
        cards[one].setAttribute('alt', "ques-mark");
        cards[two].setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/200px-Question_mark_%28black%29.svg.png');
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
