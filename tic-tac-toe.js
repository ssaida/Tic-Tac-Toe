// Restart Game Buton
const restart = document.querySelector('#button');

// Grabs all the squares
const squares = document.querySelectorAll('td');

// Clear all the squares
const clearBoard = (() =>{
  squares.forEach(square =>{
    square.textContent = '';
  });
});
restart.addEventListener('click',clearBoard);
// Check the square marker

let cellOne = document.querySelector('#one');
let cellTwo = document.querySelector('#two');
let cellThree = document.querySelector('#three');
let cellFour = document.querySelector('#four');
let cellFive = document.querySelector('#five');
let cellSix = document.querySelector('#six');
let cellSeven = document.querySelector('#seven');
let cellEight = document.querySelector('#eight');
let cellNine = document.querySelector('#nine');

// One way to fill a td
cellOne.addEventListener('click',()=>{
  if(cellOne.textContent === ''){
    cellOne.textContent = 'X';
  }else if(cellOne.textContent === 'X'){
    cellOne.textContent = 'O';
  }else{
    cellOne.textContent = ''
  }
});

// Second way to fiil a td
function changeMarker() {
  if(this.textContent === ''){
    this.textContent = 'X';
  }else if(this.textContent === 'X'){
    this.textContent = 'O';
  }else{
    this.textContent = '';
  }
}

// for loop to add an eventListeners to all lthe squares
squares.forEach(square =>{
  square.addEventListener('click',changeMarker);
});


// No Calcultion for now ;-)