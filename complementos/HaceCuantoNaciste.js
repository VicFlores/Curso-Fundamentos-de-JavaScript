
const diasEntreFechas = (fecha1, fecha2) => {
	const unDia = 1000 * 60 * 60 * 24 
	const diferencia = Math.abs(fecha1 - fecha2);

	return Math.floor(diferencia / unDia)
}

const hoy = new Date();

console.log(hoy)

const nacimiento = new Date(1999, 9, 21)

console.log(diasEntreFechas(hoy, nacimiento))
console.log(Math.round((diasEntreFechas(hoy, nacimiento) / 365)))
