let contenedor = document.getElementById("personajes");
let btnf = document.getElementById("BtnF");

btnf.addEventListener("click", () => {
  fetch('https://hawapi.theproject.id/api/v1/characters/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    return response.json();
  })
  .then(data => {
    renderCharacters(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
})

function renderCharacters(personajes){
    contenedor.innerHTML = '';
    setTimeout(() =>{
    personajes.forEach(personaje => {
        const characterElement = document.createElement('div');
        characterElement.className = "flex flex-column bg-radial from-white to-gray-200 shadow-[0_0_10px_1px_red] rounded-lg w-[31%] justify-center items-center m-2 gap-2";
        characterElement.innerHTML = `
        <img src="${personaje.thumbnail}" alt="${personaje.first_name}" class="w-[75%] justify-center">
        <p class="text-black font-bold text-[1.25rem]">${personaje.first_name} ${personaje.last_name}</p>
        `;
        contenedor.appendChild(characterElement);
    })
},600);
}


let btnA = document.getElementById("BtnA");

btnA.addEventListener("click", () => {
    axios.get("https://hawapi.theproject.id/api/v1/characters/")
    .then(response => {
        renderCharacters(response.data);
})
.catch(error => {
    console.error('Error:', error);
})
});