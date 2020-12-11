
const divisionEntera = (dividiendo, divisor) => {
	if (dividiendo < divisor) {
		return 0
	}

	return 1 + divisionEntera(dividiendo - divisor, divisor)
}

console.log(divisionEntera(30, 3))