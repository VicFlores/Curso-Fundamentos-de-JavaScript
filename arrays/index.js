
const person1 = {
  name: 'Kaylee',
  lastName: 'Henriquez',
  age: 19,
  beatiful: 10,
  height: 1.65,
  books: 45,
}

const person2 = {
  name: 'Andrea',
  lastName: 'Navas',
  age: 19,
  beatiful: 8,
  height: 1.69,
  books: 5,
}

const person3 = {
  name: 'Katherine',
  lastName: 'Conrado',
  age: 9,
  beatiful: 10,
  height: 1.67,
  books: 15,
}

const person4 = {
  name: 'Georgina',
  lastName: 'Cruz',
  age: 19,
  beatiful: 7,
  height: 1.70,
  books: 22,
}

//* Filtrar array */

let personas = [person1, person2, person3, person4];

let personasBonitas = personas.filter( esBonita => {
  return esBonita.beatiful
})

console.log(personasBonitas);

//* .map *//

let personasCms = personas.map(cms => {
  return {
    ...personas,
    height: cms.height * 100
  }
});

console.log(personasCms);

//* Reducer **/

const reducer = (acum, person) => {
  return acum + person.books
}

let totalBooks = personas.reduce(reducer, 0)

console.log(`El total de libros es ${totalBooks}`)