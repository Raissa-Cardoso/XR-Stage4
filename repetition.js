let nome = 'Raissa'
for(let char of nome){
  console.log(char)
}

let person = {
  name:"Raissa",
  age:37
}
for(let property in person){
  console.log(`${property}: ${person[property]}`)
}
