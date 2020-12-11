
//*  Closures = son funciones que recuerda el estado de las cosas cuando fue invocado **/

const crearSaludo = (finalFrase) => {
	return (nombre) =>	{
		console.log(`Hola ${nombre} ${finalFrase}`)
	}

	const saludoSalvadoreño = crearSaludo('maje')
	const saludoArgentino = crearSaludo('boludo')
	const saludoColombiano = crearSaludo('mama huevo')

	saludoSalvadoreño('Vic')
	saludoArgentino('Vic')
	saludoColombiano('Vic')
}