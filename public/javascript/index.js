const charactersAPI = new APIHandler('http://localhost:8000/characters');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList();
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let characterId = document.getElementById('character-id-fetch').value;
    charactersAPI.getOneRegister(characterId);
  });
  
  document.getElementById('delete-one').addEventListener('click', function (event) {
    let characterId = document.getElementById('character-id-delete').value;
    charactersAPI.deleteOneRegister(characterId);
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    let characterId = document.getElementById('character-id-').value;
    charactersAPI.updateOneRegister();
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    charactersAPI.createOneRegister();
  });
});
