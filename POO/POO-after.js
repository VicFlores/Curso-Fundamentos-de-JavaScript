
class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    return this
  }

  saludar(fn) {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    if (fn) {
      fn(this.nombre, this.apellido)
    }
  }

  soyAlta() {
    if (this.altura > 1.70) {
      console.log('Eres alta')
    } else {
      console.log('Eres bajita')
    }
  }
}

//* Con extends hereda */

class Desarrollador extends Persona {
  constructor (nombre, apellido, altura) {
    super(nombre, apellido, altura) //*  Con super heredamos el constructor del padre *//
  }

  saludar(fn) {
    console.log(`Hola soy ${this.nombre} soy desarrollador/a`)
    if (fn) {
      fn(this.nombre, this.apellido, true)
    }
  }
}

function responderSaludo (nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`)
  if (esDev) {
    console.log(`Ah no sabia que eras desarrollador/a`)
  }
}

let Kaylee = new Desarrollador('Maria', 'Henriquez', 1.74);
let Erika = new Persona('Erika', 'Mendoza', 1.65);
let Kahterine = new Persona('Katherine', 'Conrado', 1.71)


Kaylee.saludar(responderSaludo);
Erika.saludar();



