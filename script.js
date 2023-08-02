//Pergunte o nome do usuário e escreva a mensagem
/*let result = prompt("Qual o seu nome?");
alert(`Olá, ${result}`);*/

//Solicite dois números, faça a soma deles e apresente o resultado final
/*let numberOne = Number(prompt("Digite um número"));
let numberTwo = Number(prompt("Digite mais um número"));
alert(`A soma é ${numberOne + numberTwo}`);*/

//Capturar 2 números e fazer as operações matematicas
/*let numberOne = Number(prompt("Digite um número"));
let numberTwo = Number(prompt("Digite mais um número"));
alert(`A soma é ${numberOne + numberTwo}`);
alert(`A subtração é ${numberOne - numberTwo}`);
alert(`A multiplicação é ${numberOne * numberTwo}`);
alert(`A divisão é ${numberOne / numberTwo}`);
alert(`O resto da divisão é ${numberOne % numberTwo}`);*/

//Solicitar o nome do aluno e as 3 notas do bimestre. calcular média e informar se passou ou não
/*let studentName = prompt("Qual o seu nome?");
let noteOne = Number(prompt("Digite sua primeira nota do bimestre"));
let noteTwo = Number(prompt("Digite sua segunda nota do bimestre"));
let noteThree = Number(prompt("Digite sua terceira nota do bimestre"));
let average = ((noteOne + noteTwo + noteThree) / 3).toFixed(1);
let aprovedOrNot = average >= 6.0 ? "aprovado(a)" : "reprovado(a)";
let message = aprovedOrNot == "aprovado(a)"? "Parabéns!": "Continue estudando e vc conseguirá passar";
alert(`${studentName} foi ${aprovedOrNot} com a média de ${average}. ${message}`);*/

//Capture 10 itens para compor uma lista de supermercado e imprima-os separados por virgula
/*let list = [];
for (let i = 0; i < 10; i++) {
  list.push(prompt(`digite o ${i + 1}º item`));
}
alert(list);*/

//Jogo de advinhação
/*let enteredNumber = Number(
  prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
);
const randomNumber = parseInt(Math.random() * 10); // ou Math.ceil(Math.random()*10) ou floor ou round
let attempt = 1;
while (enteredNumber != randomNumber) {
  enteredNumber = prompt("Erro, tente novamente:");
  attempt++;
}
let plural=attempt==1?'tentativa':'tentativas'
alert(`Parabéns! Você advinhou o número em ${attempt} ${plural}`);*/

//menu de opções
/*let option;
let list = [];
while (option != 3) {
  option = Number(
    prompt(
      `Olá usuário! Digite o número da opção desejada:

      1.Cadastrar um item na lista
      2.Mostrar itens cadastrados
      3. Sair do programa`
    )
  );
  switch (option) {
    case 1:
      list.push(prompt("Digite um item na lista"));
      break;
    case 2:
      let result = list.length >= 1 ? list : "Não existem itens cadastrados";
      alert(result);
      break;
    case 3:
      alert("Goodbye");
      break;
    default:
      alert("Digite uma opção válida");
      break;
  }
}*/

//lista de pacientes
/*function Patients(name, age, weight, height) {
  this.name = name,
  this.age = age,
  this.weight = weight,
  this.height = height
}

let listPatients = [
  new Patients("Maria", 34, 70, 1.70),
  new Patients("João", 40, 90, 1.90),
  new Patients("Ana", 12, 30, 1.00),
];

let patientName = [];
let patientDatas = [];
for (let patient of listPatients) {
  patientName.push(patient.name);
  patientDatas.push(`${patient.name} tem ${patient.age} anos, pesa ${patient.weight}kg e tem ${(patient.height).toFixed(2)}m
  `)
}
alert(patientName);
alert(patientDatas);*/

/*function calculateImc(weight,height){
  let imc = weight/Math.pow(height,2)
  return imc
}

let imcList = []
for(let patient of listPatients){
  imcList.push(`Paciente ${patient.name} possui o IMC de: ${(calculateImc(patient.weight,patient.height)).toFixed(1)}
  `)
}
alert(imcList)*/