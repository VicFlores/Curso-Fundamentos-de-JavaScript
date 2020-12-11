
function heredaDe(prototipoHijo, prototipoPadre) {
  let fn = function () {}
  fn.prototype = prototipoPadre.prototype;
  prototipoHijo.prototype = new fn;
  prototipoHijo.prototype.constructor = prototipoHijo;
}

/*--------------------------------------------------------------------------------------------------------*/

function persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
  return this
}

persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

persona.prototype.soyAlta = function () {
  if (this.altura > 1.70) {
    console.log('Eres alta')
  } else {
    console.log('Eres bajita')
  }
}

/*--------------------------------------------------------------------------------------------------------*/

function desarrollador (nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido
}

heredaDe(desarrollador, persona)

desarrollador.prototype.saludar = function () {
  console.log(`Hola soy ${this.nombre} soy desarrollador`)
}

/*--------------------------------------------------------------------------------------------------------*/

let Kaylee = new desarrollador('Maria', 'Henriquez', 1.74);
let Erika = new persona('Erika', 'Mendoza', 1.65);
let Kahterine = new persona('Katherine', 'Conrado', 1.71)


Kaylee.saludar();
Kaylee.soyAlta();
Erika.saludar();
Erika.soyAlta();


