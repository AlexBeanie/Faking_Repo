// operaciones shor-circuit
// al comparar algunas variables a veces  la operación me devuelve el primer valor que sea verdadero o falso
// los falsy son los valores que se consideran falsos en javascript
// los valores falsy son:
// false, 0, null, undefined, NaN, ''

let nombre = '';
let username = nombre || 'Anonimo';
console.log(username);

function fn1() {
    console.log('fn1');
    return false;
}

function fn2() {
    console.log('fn2');
    return true;
}

let x = fn1() && fn2();