const fetch = require('node-fetch');
const { start } = require('repl');

const API_URL = 'https://thronesapi.com/api/v2/Characters';

const main = document.querySelector('.main-section');
const btnIniciar = document.querySelector('.btn-iniciar');

const createImageSection = (element, className) => {
  const newElement = document.createElement(element);
  newElement.className = className;
  return newElement;
}

const startGame = () => {
  main.innerHTML = '';
  main.appendChild(createElement('img', 'character-image'));
  main.appendChild(createElement('button', 'character-name'));
};
btnIniciar.addEventListener('click', startGame);

// const fetchCharacters = async () => {
//   const response = await fetch(API_URL);
//   const results = await response.json();
//   return results;
// };

// const addInfo = async () => {
//   const characters = await fetchCharacters();
//   document.querySelector()
// };
