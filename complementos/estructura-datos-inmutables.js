
const Vic = {
	Nombre: 'Vic',
	Apeliido: 'Flores', 
	Edad: 19
}

// const cumple = persona => persona.Edad++

const cumpleInmutable = persona => ({
	...persona,
	edad: persona.Edad + 1
})

console.log(cumpleInmutable(Vic))