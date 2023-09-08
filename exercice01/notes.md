Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ] A soma dos dois números;
- [ ] A subtração dos dois números;
- [ ] A multiplicação dos dois números;
- [ ] A divisão dos dois números;
- [ ] O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ] Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ] Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
O resultado final desse desafio deve ser algo em torno de:

# Solução do professor

let firstNumber = prompt("Digite o primeiro número:")
let secondNumber = prompt("Digite o segundo número:")

let checkEquals = firstNumber === secondNumber ? 'são iguais' : 'são diferentes'

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = (firstNumber + secondNumber)

let parOuImpar = sum % 2 == 0 ? 'par' : 'ímpar'

const sub = (firstNumber - secondNumber)
const mult = (firstNumber \* secondNumber)
const div = (firstNumber / secondNumber)
const restoDiv = (firstNumber % secondNumber)

alert(`Os dois números inseridos ${checkEquals}`)
alert(`A soma dos dois números é ${sum}`)
alert(`A soma dos dois números é ${parOuImpar}`)
alert(`A subtração dos dois números é ${sub}`)
alert(`A multiplicação dos dois números é ${mult}`)
alert(`A divisão dos dois números é ${div}`)
alert(`O resto da divisão dos dois números é ${restoDiv}`)
