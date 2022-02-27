// Destructuring - Novo recurso do EchmaScript 2015

// Variavel: 
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Destructuring:
const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { endereco: { logradouro, numero, cep}} = pessoa
console.log( logradouro, numero, cep)

const { sobrenome, humor = true} = pessoa
console.log(sobrenome, humor)

