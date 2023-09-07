/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes

  const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170,
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180,
  },
]

let patientsNames = []

for(let patient of patients) {
  patientsNames.push(patient.name)
}

alert(patientsNames)
*/

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: "Guilherme",
    age: 20,
    weight: 65,
    height: 170,
  },
  {
    name: "Larissa",
    age: 20,
    weight: 50,
    height: 140,
  },
  {
    name: "Nicolas",
    age: 22,
    weight: 70,
    height: 170,
  },
]

/*for (let index = 0; index < patients.length; index++) {
  patientsNames[index] = patients[index].name
}
*/
patients.forEach((patient) => {
  alert(
    `O paciente ${patient.name} tem ${patient.age} anos, pesa ${patient.weight}kg e mede ${patient.height}cm.`
  )
})
