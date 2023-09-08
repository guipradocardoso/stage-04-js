const students = [
  {
    name: "Guilherme",
    firstTestGrade: 8,
    secondTestGrade: 10,
  },
  {
    name: "Luiz",
    firstTestGrade: 5,
    secondTestGrade: 9,
  },
  {
    name: "Pedro",
    firstTestGrade: 9,
    secondTestGrade: 6,
  },
  {
    name: "Raiana",
    firstTestGrade: 3,
    secondTestGrade: 8,
  },
]

function calcAverage(firstTestGrade, secondTestGrade) {
  return ((firstTestGrade + secondTestGrade) / 2).toFixed(2)
}

function printStudentAverage(student) {
  if (calcAverage(student.firstTestGrade, student.secondTestGrade) >= 7) {
    alert(`A média do(a) aluno(a) ${student.name} é: ${calcAverage(
      student.firstTestGrade,
      student.secondTestGrade
    )}
    \nParabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
  } else {
    alert(`A média do(a) aluno(a) ${student.name} é: ${calcAverage(
      student.firstTestGrade,
      student.secondTestGrade
    )}
    \nNão foi dessa vez, ${student.name}! Tente novamente!`)
  }
}

for (let student of students) {
  let averageMessage = printStudentAverage(student)
}
