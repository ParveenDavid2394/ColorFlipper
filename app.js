const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// get the button and span
const button = document.getElementById('btn');
const span = document.querySelector('.color');

// add click event listener to button
// function will be the main logic, 
button.addEventListener('click', () => {
    // get random number 0 - 3, then use it to target body.style.backgroundColor
    const randomNum = getRandomNum(colors);
    document.body.style.backgroundColor = colors[randomNum];

    // to display it, target the textContent of span
    span.textContent = colors[randomNum];
})

function getRandomNum(arr){
    return Math.floor(Math.random() * arr.length)
}