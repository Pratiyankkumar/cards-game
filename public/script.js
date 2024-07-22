
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



let bigRandomNumber = Math.round((Math.random().toFixed(2)) * 12);
let colorArray = ['red', 'green', 'blue', 'purple', 'yellow', 'orange'];

let colorCount = {
  red: 0,
  green: 0,
  blue: 0,
  purple: 0,
  yellow: 0,
  orange:0
}

playingCards.forEach((value) => {
  let randomNumber = Math.round((Math.random().toFixed(2)) * 5);
  let randomColor = colorArray[randomNumber];
  colorCount[randomColor]+=1
  value.classList.add(randomColor);
})
console.log(colorCount);



// document.querySelectorAll('#js-card').forEach((value) => {
//   value.addEventListener('click', () => {
//     value.classList.add(colorArray[randomNumber]);
//   })
// });
