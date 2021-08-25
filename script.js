const API_URL = 'https://thronesapi.com/api/v2/Characters';

const logo = document.querySelector('.title-header');
const main = document.querySelector('.main-section');
const btnIniciar = document.querySelector('.btn-iniciar');

const fetchCharacters = async () => {
  const response = await fetch(API_URL);
  const results = await response.json();
  return results;
};

const createQuizImage = () => {
  const newImage = document.createElement('img');
  newImage.classList.add('character-image');
  return newImage;
};

const createQuizQuestion = () =>  {
  const newElement = document.createElement('h2');
  newElement.classList.add('quiz-question');
  newElement.innerHTML = 'Who is this <span>?</span>';
  return newElement;
};

const createQuizButtons = (className) => {
  const newElement = document.createElement('button');
  newElement.classList.add(className);
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

const addInfo = async () => {
  const results = await fetchCharacters();
  const arrayNumbs = randomNumb()

  // Gera personagem correto
  const imgCorrect = document.querySelector('.character-image')
  imgCorrect.src = results[arrayNumbs[0]].imageUrl
  const txtCorrect = document.querySelector('.quiz-element1')
  txtCorrect.innerText = results[arrayNumbs[0]].fullName;

  const btnQuiz = document.querySelector('.quiz-element2');
  btnQuiz.innerText = results[arrayNumbs[1]].fullName;
  const btnQuiz2 = document.querySelector('.quiz-element3');
  btnQuiz2.innerText = results[arrayNumbs[2]].fullName;
  const btnQuiz3 = document.querySelector('.quiz-element4');
  btnQuiz3.innerText = results[arrayNumbs[3]].fullName;
}

const eraseMainContent = () => {
  sessionStorage.setItem('main', main.innerHTML);
  main.innerHTML = '';
  main.style.display = 'flex';
  main.style.justifyContent = 'center';
}

const createLeftSection = () => {
  const leftSection = document.createElement('section');
  leftSection.classList.add('left-section');
  leftSection.appendChild(createQuizImage());
  return leftSection;
};

const createRightSection = () => {
  const rightSection = document.createElement('section');
  rightSection.classList.add('right-section');
  rightSection.appendChild(createQuizQuestion());
  rightSection.appendChild(createQuizButtons('quiz-element1'));
  rightSection.appendChild(createQuizButtons('quiz-element2'));
  rightSection.appendChild(createQuizButtons('quiz-element3'));
  rightSection.appendChild(createQuizButtons('quiz-element4'));
  return rightSection;
};

const startGame = async () => {
  eraseMainContent();

  main.appendChild(createLeftSection());
  main.appendChild(createRightSection());

  document.querySelector('.quiz-question').innerHTML = 'Who is this <span>?</span>';

  await addInfo();
};
btnIniciar.addEventListener('click', startGame);

  