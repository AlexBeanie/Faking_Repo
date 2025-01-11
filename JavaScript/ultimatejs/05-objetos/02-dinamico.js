const user = { id: 1};

user.name = 'Alex';
user.guardar = function () {
    console.log('Guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;

console.log(user);

// freeze evita que se cambien los valores de las propiedades o que se agreguen o eliminen propiedades
const user1 = Object.freeze({ id: 1});

user1.name = 'Alex';
console.log(user1);

// seal permite cambiar los valores de propiedades existentes, pero no agregar o eliminar propiedades
const user2 = Object.seal({ id: 1});

user2.name = 'Alex';
user2.id = 2;
console.log(user2);