const numberOne = Number(prompt("Digite o primeiro número"))
const numberTwo = Number(prompt("Digite o segundo número"))

let sum=numberOne + numberTwo
alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${numberOne - numberTwo}`)
alert(`A multiplicação dos dois números é: ${numberOne * numberTwo}`)
alert(`A divisão dos dois números é: ${numberOne / numberTwo}`)
alert(`O resto da divisão dos dois números é: ${numberOne % numberTwo}`)

if(sum%2==0){
  alert(`A soma dos dois números é par`)
}else {
  alert(`A soma dos dois números é ímpar`)
}

if(numberOne==numberTwo){
  alert(`Os números inseridos são iguais`)
}else{
  alert(`Os números inseridos são diferentes`)
}