const boletim = [
    {
        nome: 'Eddard',
        nota: 10
    },
    {
        nome: 'Cersei',
        nota: 8
    },
    {
        nome: 'Jon Snow',
        nota: 9
    },
    {
        nome: 'Jaime',
        nota: 7
    },
    {
        nome: 'Joffrey',
        nota: 2
    },
    {
        nome: 'Arya',
        nota: 6
    },
    {
        nome: 'Sansa',
        nota: 5
    },
    {
        nome: 'Bran',
        nota: 1
    },
    {
        nome: 'Doran',
        nota: 3
    },
    {
        nome: 'Jorah',
        nota: 4
    },
]

// console.log(boletim)

const aprovado = boletim => boletim.nota >= 6

const filtroAprovados = boletim.filter(aprovado)

console.log(filtroAprovados)

filtroAprovados.forEach(function(aluno, nota){
    console.log(`Parabéns, ${aluno.nome}! Você foi aprovado com uma nota ${nota}`)
})