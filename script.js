const API_URL = 'https://thronesapi.com/api/v2/Characters';

const logo = document.querySelector('.title-header');
const main = document.querySelector('.main-section');
const btnIniciar = document.querySelector('.btn-iniciar');
const questions = {
  made: 0,
  right: 0,
};

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
  newElement.innerHTML = 'Who is this ?';
  return newElement;
};

const createQuizButtons = (className) => {
  const newElement = document.createElement('button');
  newElement.classList.add(className);
  newElement.classList.add('answer');
  return newElement;
};

// Cria 4 numeros aleatorios que vão servir pra achar 4 personagens aleatorios
const randomNumb = () => {
  const array = [];

  for(let i = 0; i < 4; i += 1){
    const random = Math.floor(Math.random() * 52); // Cria numeros aleatorios
    if(array.includes(random)){
      array[i] = Math.floor(Math.random() * 52)
    }
    array.push(random);
  }
  return array
}

const addInfo = async () => {
  const results = await fetchCharacters();
  const arrayNumbs = randomNumb()

  // Gera personagem correto
  const imgCharacter = document.querySelector('.character-image')
  imgCharacter.src = results[arrayNumbs[0]].imageUrl
  
  const btnQuiz1 = document.querySelector('.quiz-button1')
  btnQuiz1.innerText = results[arrayNumbs[0]].fullName;
  const btnQuiz2 = document.querySelector('.quiz-button2');
  btnQuiz2.innerText = results[arrayNumbs[1]].fullName;
  const btnQuiz3 = document.querySelector('.quiz-button3');
  btnQuiz3.innerText = results[arrayNumbs[2]].fullName;
  const btnQuiz4 = document.querySelector('.quiz-button4');
  btnQuiz4.innerText = results[arrayNumbs[3]].fullName;

  questions.answer = btnQuiz1.innerText;
}

const eraseMainContent = () => {
  sessionStorage.setItem('main', main.innerHTML);
  main.innerHTML = '';
  main.style.display = 'flex';
  main.style.justifyContent = 'center';
}

const returnToMain = () => {
  main.innerHTML = sessionStorage.getItem('main');
  main.style.display = '';
  document.querySelector('.btn-iniciar').addEventListener('click', startGame);
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
  rightSection.appendChild(createQuizButtons('quiz-button1'));
  rightSection.appendChild(createQuizButtons('quiz-button2'));
  rightSection.appendChild(createQuizButtons('quiz-button3'));
  rightSection.appendChild(createQuizButtons('quiz-button4'));
  return rightSection;
};

const showResult = () => {
  main.innerHTML = '';
  const result = document.createElement('h2');
  result.innerHTML = `${questions.right}/${questions.made}`;
  main.appendChild(result);
}

const setQuestion = async () => {
  if (questions.made < 10) {
    questions.made += 1;
    await addInfo();
  } else {
    showResult();
  }
};

const startGame = () => {
  eraseMainContent();
  main.appendChild(createLeftSection());
  main.appendChild(createRightSection());

  document.querySelectorAll('.answer').forEach((btn) => {
    btn.addEventListener('click', setQuestion);
    btn.addEventListener('click', (event) => {
      if (event.target.innerText === questions.answer) {
        questions.right += 1;
      }
    })
  })

  setQuestion();
};
btnIniciar.addEventListener('click', startGame);

  