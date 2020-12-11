
const vic = {
	nombre: 'Vic',
	flores: 'Flores',
}

const kaylee = {
	nombre: 'Kaylee',
	flores: 'Henriquez',
}

const saludar = (saludo = 'Hola') => {
	console.log(`${saludo} mi nombre es ${this.nombre}`)
}

// const saludarVic = saludar.bind(vic)
// const saludarKaylee = saludar.bind(kaylee)

// saludar.call(vic, 'Hola mama huevo') // Ejecuta la funcion

saludar.apply(vic, ['Hola mama vicho'])

