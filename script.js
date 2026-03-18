//Ejercicio 1 — Formatear nombre

function formatearNombre(nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

console.log(formatearNombre('jUan ManUel'));

//Ejercicio 2 — Contar letras
function contarLetras(texto) {
    return texto.length - texto.split(' ').length + 1;
}
console.log(contarLetras('hola mundo'));

//Ejercicio 3 — Número mayor
function maximo(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}
console.log(maximo(1, 2, 3));

//Ejercicio 4 — Validar password

function validarPassword(password) {
    if (password.length >= 8 && password.match(/[0-9]/)) {
        return true;
    } else {
        return false;
    }
}
console.log(validarPassword('Juanmitapro2009'));

//Parte 2 — Arrays
//Ejercicio 5 — Suma de array
function sumarArray(numeros) {
    return 
}

console.log(sumarArray([1, 2, 3, 4, 5]));
