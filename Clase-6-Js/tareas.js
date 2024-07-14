// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  return class Usuario {
    usuario;
    nombre;
    email;
    password;
    constructor(opciones) {
      this.usuario = opciones.usuario;
      this.nombre = opciones.nombre;
      this.email = opciones.email;
      this.password = opciones.password;
      let saludar = function saludar() {
        return "Hola, mi nombre es " + this.nombre;
      };
      Usuario.prototype.saludar = saludar;
    }
  };
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Object.getPrototypeOf(Constructor.prototype).saludar = function () {
    let str = "Hello World!";
    return str;
  };
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  // Tu código:
  String.prototype.reverse = function () {
    let newString = "";
    for (let i = this.length - 1; i >= 0; i--) {
      let char = this[i];
      newString += char;
    }
    return newString;
  };
}

// ---------------------------------------------------------------------------//
//Crea el constructor de la clase "Persona"
//Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
//Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
//Ej: {
//   Nombre: 'Juan',
//   Apellido: 'Perez',
//   Edad: 22,
//   Domicilio: 'Saavedra 123'
//  }

class Persona {
  //Escribir el constructor aquí:
  nombre;
  apellido;
  edad;
  domicilio;
  detalle() {
    return {
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad,
      domicilio: this.domicilio,
    };
  }
  constructor(data) {
    this.nombre = data.nombre;
    this.apellido = data.apellido;
    this.edad = data.edad;
    this.domicilio = data.domicilio;
  }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  //Tu código:
  const datos = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    domicilio: dir,
  };
  const ejemplo = new Persona(datos);
  return ejemplo;
}

function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve:
  //Ej: "Juan, 22 años"
  //Tu código:
  Object.getPrototypeOf(Persona.prototype).DATOS = function () {
    let result = this.nombre + ", " + this.edad + " años";
    return result;
  };
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo,
  Persona,
};
