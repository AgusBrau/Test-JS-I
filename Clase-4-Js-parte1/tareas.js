// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  let getFirst = (array) => array[0];
  return getFirst(array);
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  let getLast = (array) => {
    let ultimo = array.length;
    console.log(ultimo);
    return array[ultimo - 1];
  };
  return getLast(array);
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  let getLength = (array) => array.length;
  return getLength(array);
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let masUno = (array) => {
    let nuevoArray = [];
    for (let x = 0; x < array.length; x++) {
      nuevoArray.push(array[x] + 1);
    }
    return nuevoArray;
  };
  return masUno(array);
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  let masElemento = (array, elemento) => {
    array.push(elemento);
    return array;
  };
  return masElemento(array, elemento);
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  let masElemento = (array, elemento) => {
    array.unshift(elemento);
    return array;
  };
  return masElemento(array, elemento);
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let stringPalabras = (palabras) => {
    let concPalabras = palabras.map((x) => x + " ");
    //console.log(concPalabras.toString())
    //fijarse si el ultimo espacio se borra
    return concPalabras.join(" ");
  };
  return stringPalabras(palabras);
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  let stringPalabras = (array, elemento) => array.includes(elemento);
  return stringPalabras(array, elemento);
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let sumaArray = (numeros) => {
    return numeros.reduce((suma, actual) => suma + actual, 0);
  };
  return sumaArray(numeros);
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let masUno = (resultadosTest) => {
    let total = 0;
    for (let x = 0; x < resultadosTest.length; x++) {
      let total2 = resultadosTest[x];
      total = total + total2;
    }
    return total / resultadosTest.length;
  };
  return masUno(resultadosTest);
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let numMayor = (numeros) => {
    let comparaNumber = numeros.toSorted((x, y) => x - y);
    return comparaNumber[comparaNumber.length - 1];
  };
  return numMayor(numeros);
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí:
  let esMayorque = (arreglo) => {
    let comparaMayor = (x) => x > 19;
    return arreglo.filter(comparaMayor);
  };
  return esMayorque(arreglo);
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí:
  let queDiaEs = (numeroDeDia) => {
    switch (numeroDeDia) {
      case 1:
      case 7:
        return "Es fin de semana";
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return "Es dia Laboral";
      default:
        return false;
    }
  };
  return queDiaEs(numeroDeDia);
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let esNueve = (n) => {
    let nString = n.toString();
    let numInicial = nString.charAt(0);
    let resultado = (numInicial) => (numInicial === "9" ? true : false);
    return resultado(numInicial);
  };
  return esNueve(n);
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí:
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
}

// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};
