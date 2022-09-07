// import functions and grab DOM elements

// let state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state

const nameInput = document.getElementById('name-input');
console.log(nameIgitnput);
const changeButton = document.getElementById('change-name');
const nameDisplay = document.getElementById('name-display');

changeButton.addEventListener('click', () => {
    const name = nameInput.value;
    nameDisplay.textContent = name;
    nameInput.value = '';
});
