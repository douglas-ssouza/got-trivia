const API_URL = 'https://thronesapi.com/api/v2/Characters';

const main = document.querySelector('.main-section');
const btnIniciar = document.querySelector('.btn-iniciar');

const fetchCharacters = async () => {
  const response = await fetch(API_URL);
  const results = await response.json();
  return results;
};

const createQuizElements = (element, className) => {
  const newElement = document.createElement(element);
  newElement.className = className;
  return newElement;
};

const addInfo = async () => {
  const results = await fetchCharacters();
  console.log(results);
  const img = document.querySelector('.character-image');
  img.src = results[0].imageUrl;
  const btn = document.querySelector('.character-name');
  btn.innerText = results[0].fullName;
  const btnQuiz = document.querySelector('.quiz-element2');
  btnQuiz.innerText = results[1].fullName;
  const btnQuiz2 = document.querySelector('.quiz-element3');
  btnQuiz2.innerText = results[2].fullName;
  const btnQuiz3 = document.querySelector('.quiz-element4');
  btnQuiz3.innerText = results[3].fullName;
}

const startGame = async () => {
  main.innerHTML = '';
  main.appendChild(createQuizElements('img', 'character-image'));
  main.appendChild(createQuizElements('button', 'character-name'));
  main.appendChild(createQuizElements('button', 'quiz-element2'));
  main.appendChild(createQuizElements('button', 'quiz-element3'));
  main.appendChild(createQuizElements('button', 'quiz-element4'));

  await addInfo();
};
btnIniciar.addEventListener('click', startGame);

  