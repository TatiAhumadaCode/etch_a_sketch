const LEFT_SIDE = document.querySelector('.left-side');
const GRID_CONTAINER = document.querySelector('.grid-container')
const RIHT_SIDE = document.querySelector('.right-side');
const BLACK_BUTTON = document.getElementById('black-button');
const WHITE_BUTTON = document.getElementById('white-button');
const COLORS_BUTTON = document.getElementById('colors-button');
const slider = document.getElementById('slider');
const CLEAR_PAGE = document.getElementById('clear-page');
const INPUT_COLOR = document.getElementById('color-input');


//Event in order to load grid
document.addEventListener('load', createGrid(16))

//create grid 

function createGrid(width) {
    GRID_CONTAINER.style.display = 'grid';
    GRID_CONTAINER.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    GRID_CONTAINER.style.gridTemplateRows = `repeat(${width}, 1fr)`;
    for(let i = 0; i < width * width; i++) {
        const SQUARE = document.createElement('div');
        SQUARE.className = 'square-div'
        GRID_CONTAINER.appendChild(SQUARE)
    }
}


//event functions for each color
function colorBlack() {
    let squares = document.querySelectorAll('.grid-container div');
    squares.forEach((div) => {
        div.addEventListener('mousemove', function (e) {
            e.target.style.background = 'black';
        })
    })
}

function colorWhite() {
    let squares = document.querySelectorAll('.grid-container div');
    squares.forEach((div) => {
        div.addEventListener('mousemove', function (e) {
            e.target.style.background = 'white';
        })
    })
}

function manyColors() {

    let squares = document.querySelectorAll('.grid-container div');
    squares.forEach((div) => {
        div.addEventListener('mousemove', function (e) {

            let symbols = "0123456789ABCDEF";
            let colors = "#";
        
            for(let i = 0; i < 6; i++){
                colors = colors + symbols[Math.floor(Math.random() * 16)];
            }     
            e.target.style.background = colors;
        })
    })
}


function chooseColor() {
    let squares = document.querySelectorAll('.grid-container div');
    squares.forEach(div => {
        div.addEventListener('mousemove', function(e) {
            const INPUT_COLOR = document.getElementById('color-input').value;
            e.target.style.background = INPUT_COLOR

        })
    });
  
}

// increase squares size

function increaseSize() {
    let squares = document.querySelectorAll('.square-div');
    squares.forEach((div) => {
        return div.remove();
      });
      createGrid(slider.value)
}

//reload page function

function clearPage() {
    window.location.reload();
}

//assign functions to buttons
BLACK_BUTTON.addEventListener('click', colorBlack);
WHITE_BUTTON.addEventListener('click', colorWhite);
COLORS_BUTTON.addEventListener('click', manyColors);
CLEAR_PAGE.addEventListener('click', clearPage);
slider.addEventListener('mouseup', increaseSize);
INPUT_COLOR.addEventListener('input', chooseColor, false);
INPUT_COLOR.addEventListener('change', chooseColor, false);


