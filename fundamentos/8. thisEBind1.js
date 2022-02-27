// Funcao this e bind

const pessoa = {
    saudacao: "Bom dia!",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falardePessoa = pessoa.falar

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()