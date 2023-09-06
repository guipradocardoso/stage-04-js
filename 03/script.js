/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

let firsNumber = prompt("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")

firsNumber = Number(firsNumber)
secondNumber = Number(secondNumber)

const sum = firsNumber + secondNumber
const sub = firsNumber - secondNumber
const multi = firsNumber * secondNumber
const div = firsNumber / secondNumber
const restDiv = firsNumber % secondNumber

alert("A soma é: " + sum)
alert("A Subtração é: " + sub)
alert("A Multiplicação é: " + multi)
alert("A Divisão é: " + div)
alert("O resto da divisão é: " + restDiv)
