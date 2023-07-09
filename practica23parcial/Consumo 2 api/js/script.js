// Código JavaScript para consumir la API

// URL de la API
var apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

// Realizar una solicitud GET a la API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Manejar la respuesta de la API
    console.log(data); // Aquí puedes ver los datos en la consola

    // Iterar sobre las cartas y mostrarlas en la página
    var cardContainer = document.getElementById('card-container');
    data.data.forEach(card => {
      var cardElement = document.createElement('div');
      cardElement.classList.add('card');

      var cardName = document.createElement('h2');
      cardName.textContent = card.name;

      var cardImage = document.createElement('img');
      cardImage.src = card.card_images[0].image_url_small;
      cardImage.alt = card.name;

      var cardType = document.createElement('p');
      cardType.textContent = 'Type: ' + card.type;

      var cardDesc = document.createElement('p');
      cardDesc.textContent = 'Description: ' + card.desc;

      cardElement.appendChild(cardName);
      cardElement.appendChild(cardImage);
      cardElement.appendChild(cardType);
      cardElement.appendChild(cardDesc);

      cardContainer.appendChild(cardElement);
    });
  })
  .catch(error => {
    // Manejar errores en caso de que ocurran
    console.log(error);
  });
