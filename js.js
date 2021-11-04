alert("takie tam okienko");

console.log("coś tam")

const weatherFromApi = {
    temp: 21,
    zachmurzenie: 'małe',
     wilgotność: 'duża',
     biomet: 'korzystny'
   }

document.getElementById("temp").innerText=weatherFromApi.temp

// document.getElementById("temp") - poszukaj w html element z id temp 
// innerText - weź z tego js tekst 

document.getElementById("cloud").innerText=weatherFromApi.zachmurzenie
