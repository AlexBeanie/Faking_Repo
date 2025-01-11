function crearUsuario(name, email) {
    return {
        email,
        name: name,
        activo: true,
        recuperarclave: function () {
            console.log('recuperando clave...');
        },
    }
}

let user1 = crearUsuario('Alex', 'alex@gmail');
let user2 = crearUsuario('Juan', 'juan@gmail');

console.log(user1);
console.log(user2);