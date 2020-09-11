const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// get the button and span 
const button = document.getElementById('btn');
const span = document.querySelector('.color');

button.addEventListener('click', ()=>{
    // initialise the hexColor string
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNum(hex)];
    }

    document.body.style.backgroundColor = hexColor;
    span.textContent = hexColor;
})

function getRandomNum(arr) {
    return Math.floor(Math.random() * arr.length)
}