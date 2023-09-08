# 💻 Sobre o desafio

<aside>
💡 Principais pontos abordados nesse desafio:

- Estrutura de dados com objetos;
- Estrutura de repetição;
- Criação de funções;
- Operadores comparativos;

</aside>

Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ] Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ] Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

O resultado final desse desafio deve ser algo em torno de:

# CORREÇÂO DO PROFESSOR

let listaDeEstudantes = [
{
nomeDoEstudante: 'Murilo',
primeiraNota: 6,
segundaNota: 9,
},

    {
        nomeDoEstudante: 'Ana',
        primeiraNota: 5,
        segundaNota: 3,
    },

    {
        nomeDoEstudante: 'Sara',
        primeiraNota: 8,
        segundaNota: 8,
    }

]

function calculaMedia(primeiraNota,segundaNota) {
let media = (primeiraNota + segundaNota) / 2
return media
}

for(let estudante of listaDeEstudantes){
mediaIndividual = calculaMedia(estudante.primeiraNota, estudante.segundaNota)
let aprovadoOuNao = mediaIndividual < 7 ? 'Infelizmente não foi dessa vez. Estude mais' : 'Parabéns pela sua aprovação'

    alert(`A média de ${estudante.nomeDoEstudante} é ${mediaIndividual}.

${aprovadoOuNao}`)
}
