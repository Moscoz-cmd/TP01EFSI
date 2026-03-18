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

//Ejercicio 10 — Precio total
const productos = [

{nombre:"Mouse", precio:10},

{nombre:"Teclado", precio:25},

{nombre:"Monitor", precio:200}

]

function precioTotal(productos) {
    return productos.reduce((total, producto) => total + producto.precio, 0);
}
console.log(precioTotal(productos));

//Parte 4 — ES6
//Ejercicio 11 — map


const usuarios = [

{nombre:"Ana", edad:17},

{nombre:"Juan", edad:25},

{nombre:"Pedro", edad:30}

]

function map(usuarios) {
    return usuarios.map(usuario => usuario.nombre);
}
console.log(map(usuarios));

//Ejercicio 12 — filter
function filter(usuarios) {
    return usuarios.filter(usuario => usuario.edad >= 18);
}
console.log(filter(usuarios));


//Ejercicio 13 — reduce
function reduce(usuarios) {
    return usuarios.reduce((total, usuario) => total + usuario.edad, 0);
}
console.log(reduce(usuarios));

//Parte 5 — Destructuring y Spread
//Ejercicio 14 — Destructuring


const producto = {

nombre:"Notebook",

precio:1000

}

const { nombre, precio } = producto;
console.log(nombre, precio);

//Ejercicio 15 — Spread operator
const productoConStock = { ...producto, stock: 5 };
console.log(productoConStock);

//Parte 6 — Problemas más reales
//Ejercicio 16 — Buscar producto


function buscarProducto(productos, nombre) {
    return productos.filter(producto => producto.nombre === nombre);
}
console.log(buscarProducto([{nombre:"Mouse", precio:10}, {nombre:"Teclado", precio:25}, {nombre:"Monitor", precio:200}], "Mouse"));

//Ejercicio 17 — Productos caros
function productosCaros(productos) {
    return productos.filter(producto => producto.precio > 50);
}
console.log(productosCaros([{nombre:"Mouse", precio:10}, {nombre:"Teclado", precio:25}, {nombre:"Monitor", precio:200}]));

//Ejercicio 18 — Promedio

function promedio(numeros) {
    if (numeros.length === 0) return 0;
    const suma = numeros.reduce((total, num) => total + num, 0);
    return suma / numeros.length;
}
console.log(promedio([10,8,6,9]));

//Desafío final — Simulación de lógica de API

const usuariosApi = [

{id:1, nombre:"Ana", edad:20},

{id:2, nombre:"Juan", edad:15},

{id:3, nombre:"Pedro", edad:30}

]
//1. obtenerUsuarios()
function obtenerUsuarios(usuariosApi)
{
return usuariosApi
}
console.log(obtenerUsuarios(usuariosApi))

//2.obtenerUsuariosPorId
function obtenerUsuariosPorId(usuarios, ids) {
    if (!Array.isArray(ids)) {
        ids = [ids];
    }
    return usuarios.filter(usuario => ids.includes(usuario.id));
}
console.log(obtenerUsuariosPorId(usuariosApi, 2));

//3. obtenerMayores()
function obtenerMayores(usuarios) {
    return usuarios.filter(usuario => usuario.edad >= 18);
}
console.log(obtenerMayores(usuariosApi));

//4. crearUsuario(nombre, edad)
function crearUsuario(usuarios, nombre, edad) {
    const nuevoUsuario = { id: usuarios.length + 1, nombre, edad };
    usuarios.push(nuevoUsuario);
    return nuevoUsuario;
}
console.log(crearUsuario(usuariosApi, "Lucia", 22));
console.log(usuariosApi);





