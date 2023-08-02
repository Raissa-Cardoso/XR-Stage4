function Students(name, firstNote, secondNote){
  this.name=name,
  this.firstNote=firstNote,
  this.secondNote=secondNote
}

let studentsList=[
  new Students("Maria",7.0,8.0),
  new Students("João",6.0,6.9),
  new Students("Ana",6.8,7.2)
]

function calculateAverage (firstNote, secondNote){
  let calculatedAverage=((firstNote+secondNote)/2).toFixed(1)
  return calculatedAverage
}

for(student of studentsList){
  let average = calculateAverage(student.firstNote, student.secondNote)
  if(average>=7.0){
    alert(`A média do(a) aluno(a) ${student.name} é: ${average}
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
  }else{
    alert(`A média do(a) aluno(a) ${student.name} é: ${average}
    Não foi dessa vez, ${student.name}! Tente novamente!`)
  }
}