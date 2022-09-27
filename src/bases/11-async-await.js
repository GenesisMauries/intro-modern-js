// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

// const getImagen = async () => {
// const apiKey = "dCUj0zANniXUXF0JxtuxomLPEzqIiV4m";
//   return `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
// };
// getImagen().then(console.log);

const getImagen = async () => {
  // para manejar errores en async/await se usa TRY/CATCH
  try {
    const apiKey = "dCUj0zANniXUXF0JxtuxomLPEzqIiV4m";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    // manejo del error
    console.error(error);
  }
};

getImagen();
