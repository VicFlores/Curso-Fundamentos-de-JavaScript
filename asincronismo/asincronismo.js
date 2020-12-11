const API_URL = 'https://swapi.dev/api/planets/:id';

const opts = { crossDomain: true };

const planetUrl = (id) => {

	return new Promise((resolve, reject) => {
		const uri = `${API_URL.replace(':id', id)}`;

		$.get(uri, opts, (data) => {
			resolve(data)
		})
		.fail(reject => {
			console.log(`Error, no se pudo obtener el personaje ${id}`)
		})
	})
};

const obtenerPlanetas = async () => {
	let	ids = [1,2,3,4,5,6,7,8,9];

	let promesas = ids.map(id => planetUrl(id));

	try {
		let personajes = await Promise.all(promesas);
		console.log(personajes)
	} catch  {
		console.log('Error')
	}
};

obtenerPlanetas();

//planetUrl(1)
//	.then(personaje => {
//		console.log(`El nombre del planeta es: ${personaje.name}`)
//		return planetUrl(2)
//	})
//	.then(personaje => {
//		console.log(`El nombre del planeta es: ${personaje.name}`)
//		return planetUrl(3)
//	})
//	.then(personaje => {
//		console.log(`El nombre del planeta es: ${personaje.name}`)
//	})
//	.catch(id => {
//		console.log(`Error en planeta ${id}`)
//	})

