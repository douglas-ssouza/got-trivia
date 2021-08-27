/**
 * @jest-environment jsdom
 */

 const { fetchCharacters } = require("../script");

jest.mock('node-fetch');

const teste = {
  "id":0,
  "firstName":"Daenerys",
  "lastName":"Targaryen",
  "fullName":"Daenerys Targaryen",
  "title":"Mother of Dragons",
  "family":"House Targaryen",
  "image":"daenerys.jpg",
  "imageUrl":"https://thronesapi.com/assets/images/daenerys.jpg"
}


describe('Checa se a API está funcionando', () => {
  test('Checa se a API retorna um dos arrays', async () => {
    fetch = jest.fn().mockResolvedValue({json: () => {
      return teste;
    }, })
    expect((await fetchCharacters()).id).toBe(0);
    expect((await fetchCharacters()).firstName).toBe("Daenerys");
    expect((await fetchCharacters()).image).toBe("daenerys.jpg");
    expect((await fetchCharacters()).imageUrl).toBe("https://thronesapi.com/assets/images/daenerys.jpg");
  })
})

describe('Verifica se a informação é adicionada', () => {

})