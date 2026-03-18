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
const sumarArray = unArray => 
    {
        let total = 0;
        unArray.forEach(numero => {
            total += numero;
        });
        return total;
    }

console.log(sumarArray([1, 2, 3, 4, 5]));

//Ejercicio 6 — Número mayor de un array
const numeroMayor = numeros => {
    let numerofinal = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > numerofinal) {
            numerofinal = numeros[i];
        }
    }
    return numerofinal;
}
console.log(numeroMayor([2,4,1,3,5,6,3,5,3,2,5,8,4,3]));


//Ejercicio 7 — Filtrar pares

const obtenerPares = numeros => {
    return numeros.filter(numero => numero % 2 === 0);
}
console.log(obtenerPares([1,2,3,4,5,6]));



//Parte 3 — Objetos
//Ejercicio 8 — Descripción de usuario


const usuario = {

 nombre: "Ana",

 edad: 20,

 activo: false

}
describeUsuario(usuario);
function describeUsuario(usuario) {
    return `${usuario.nombre} tiene ${usuario.edad} años`;
}
console.log(describeUsuario(usuario));


//Ejercicio 9 — Activar usuario
function activarUsuario(usuario) {
    usuario.activo = true;
    return usuario;
}
console.log(activarUsuario(usuario));



