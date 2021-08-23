const fetch = require('node-fetch');

const API_URL = 'https://thronesapi.com/api/v2/Characters';

const btnIniciar = document.querySelector('.btn-iniciar');

const startGame = () => {
  const main = document.querySelector('');
}

const fetchCharacters = async () => {
  const response = await fetch(API_URL);
  const results = await response.json();
  console.log(results);
};

fetchCharacters();