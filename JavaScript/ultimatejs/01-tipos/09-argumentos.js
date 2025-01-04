function suma(a, b) {
    console.log(arguments);
    return a + b;
}

let resultado = suma(1, 2);
console.log(resultado); // 3
console.log(typeof suma)