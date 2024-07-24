let card1 = document.querySelector('.js-card1');
let card2 = document.querySelector('.js-card2');
let card3 = document.querySelector('.js-card3');
let card4 = document.querySelector('.js-card4');
let card5 = document.querySelector('.js-card5');
let card6 = document.querySelector('.js-card6');
let card7 = document.querySelector('.js-card7');
let card8 = document.querySelector('.js-card8');
let card9 = document.querySelector('.js-card9');
let card10 = document.querySelector('.js-card10');
let card11 = document.querySelector('.js-card11');
let card12 = document.querySelector('.js-card12');

let playingCards = [
  card1, card2, card3, card4,
  card5, card6, card7, card8,
  card9, card10, card11, card12
];

let colorArray = ['red', 'green', 'blue', 'purple', 'yellow', 'orange'];
let shuffledColors = [];

// Add each color twice to the shuffledColors array
colorArray.forEach(color => {
  shuffledColors.push(color);
  shuffledColors.push(color);
});

// Shuffle the shuffledColors array
for (let i = shuffledColors.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [shuffledColors[i], shuffledColors[j]] = [shuffledColors[j], shuffledColors[i]];
}

// Assign the shuffled colors to the cards


let clicks = 0;
let selectedColorArray = [];
let selectedCard = [];
let pairs = 0;
let wins;

loadFromStorage();

function loadFromStorage() {
  wins = JSON.parse(localStorage.getItem('cardWins')) || 0;
}


document.querySelectorAll('#js-card').forEach((card, index) => {
  card.addEventListener('click', () => {
    if (!card.classList.contains('spinning') && !card.classList.contains('spinning-back')) {
      card.classList.add('spinning');
      card.classList.add(shuffledColors[index]);
      let clickedColor = shuffledColors[index];
      selectedColorArray.push(clickedColor);
      selectedCard.push(card);
      clicks += 1;
      console.log(clicks);
      
      if (clicks === 2) {
        if (selectedColorArray[0] === selectedColorArray[1]) {
          console.log(true);
          selectedColorArray = [];
          selectedCard = [];
          clicks = 0;
          pairs+=1;
        } else {
          setTimeout(() => {
            selectedCard[0].classList.add('spinning-back');
            selectedCard[1].classList.add('spinning-back');
            selectedCard[0].classList.remove(selectedColorArray[0]);
            selectedCard[1].classList.remove(selectedColorArray[1]);
            console.log(false);
            
            setTimeout(() => {
              selectedCard[0].classList.remove('spinning');
              selectedCard[1].classList.remove('spinning');
              selectedCard[0].classList.remove('spinning-back');
              selectedCard[1].classList.remove('spinning-back');
              selectedColorArray = [];
              selectedCard = [];
              clicks = 0;
            }, 300);
          }, 500);
        }
      }
    }
    console.log(pairs);

    if (pairs === 6) {
      alert('You won the game')
      wins+=1;
      saveToStorage();
      renderScore();
    }
  })
})

function renderScore() {
  document.querySelector('.js-wins').innerHTML = `Wins: ${wins}`;
}

renderScore();


function saveToStorage() {
  localStorage.setItem('cardWins', JSON.stringify(wins))
}


document.querySelector('.js-restart').addEventListener('click', () => {
  location.reload();
})

console.log(shuffledColors);