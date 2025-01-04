let nombre = "Tanjiro";
let anime = "Kimetsu no Yaiba";
let edad = 16;

// objeto literal
let personaje = {
    nombre: "Tanjiro",
    anime: "Kimetsu no Yaiba",
    edad: 16
};

console.log(personaje); 
console.log(personaje.anime); 
console.log(personaje['anime']); 

delete personaje.anime;
console.log(personaje);