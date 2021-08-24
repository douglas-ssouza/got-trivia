const API_URL = 'https://thronesapi.com/api/v2/Characters';

const logo = document.querySelector('.title-header');
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

// Cria 3 numeros aleatorios que vão servir pra achar 3 personagens aleatorios incorretos
const randomNumb = () => {
  const array = [];

  for(let i = 0; i < 4; i += 1){
    const random = Math.floor(Math.random() * 52); // Cria numeros aleatorios
    if(array.includes(random)){
      Math.floor(Math.random() * 52)
    }
    array.push(random);
  }
  console.log(array)
  return array
}

// Cria um personagem certo
// const randomizeChar = async () => {
//   const results = await fetchCharacters();
//   const randomCorrect = randomNumb();
//   const char = results.filter((character) => character.id === randomCorrect[0]);
//   console.log(char)
//   return char;
// }

const addInfo = async () => {
  const results = await fetchCharacters();
  const arrayNumbs = randomNumb()

  // Gera personagem correto
  const question = document.querySelector('.quiz-question');
  question.innerHTML = 'Who is this <span>?</span>';

  const imgCorrect = document.querySelector('.character-image')
  imgCorrect.src = results[arrayNumbs[0]].imageUrl
  const txtCorrect = document.querySelector('.character-name')
  txtCorrect.innerText = results[arrayNumbs[0]].fullName;

  const btnQuiz = document.querySelector('.quiz-element2');
  btnQuiz.innerText = results[arrayNumbs[1]].fullName;
  const btnQuiz2 = document.querySelector('.quiz-element3');
  btnQuiz2.innerText = results[arrayNumbs[2]].fullName;
  const btnQuiz3 = document.querySelector('.quiz-element4');
  btnQuiz3.innerText = results[arrayNumbs[3]].fullName;
}

const startGame = async () => {
  main.innerHTML = '';
  main.style.display = 'flex';
  main.style.justifyContent = 'center';

  const leftSection = document.createElement('section');
  leftSection.className = 'left-section';
  leftSection.appendChild(createQuizElements('img', 'character-image'));

  const rightSection = document.createElement('section');
  rightSection.className = 'right-section';
  rightSection.appendChild(createQuizElements('h2', 'quiz-question'));
  rightSection.appendChild(createQuizElements('button', 'character-name'));
  rightSection.appendChild(createQuizElements('button', 'quiz-element2'));
  rightSection.appendChild(createQuizElements('button', 'quiz-element3'));
  rightSection.appendChild(createQuizElements('button', 'quiz-element4'));

  main.appendChild(leftSection);
  main.appendChild(rightSection);

  await addInfo();
};
btnIniciar.addEventListener('click', startGame);

  