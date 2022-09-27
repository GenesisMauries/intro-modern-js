//Fetch es una API que proporciona el navegador
const apiKey = "dCUj0zANniXUXF0JxtuxomLPEzqIiV4m";

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);
// Promesa regular
// peticion
//   .then((response) => {
//     response.json().then((data) => console.log(data));
//     console.log(response);
//   })
//   .catch(console.warn);
// encadenar pormesas
peticion
  .then((response) => response.json()) //el resultado de la promesa es encadenado a la siguiente promesa
  .then(({ data }) => {
    const { url } = data.images.original;
    console.log(url);
    const img = document.createElement("img");
    img.src = url;
    //document.body.appendChild(img);
  })
  .catch(console.warn);
