let weight //typeof undefined

let person = {
  name:"Raissa",
  age: 37,
  stars: 4.9,
  isSubscribed: false
}

let person2 = {
  name:"Sara",
  age: 35,
  stars: 4.9,
  isSubscribed: true
}
//console.log(`${person.name} tem ${person.age} anos, possui ${person.stars} estrelas`)

let students=[]

students=[person]

//console.log(students[0])

students[1]=person2

console.log(students)