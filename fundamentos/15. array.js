let aprovados = new Array ('Bia','Carlos','Ana')
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana']
console.log(aprovados[0])
console.log(aprovados[1])

aprovados[3] = 'Paulo'
aprovados.push ('Cesar') // Adicionar novo elemento


aprovados[9] = 'Maria'
console.log(aprovados.length) // Tamanho
console.log(aprovados)

aprovados.sort() // Ordenar

delete aprovados[1] // Deletar

aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1, 1) // Remover
aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // Remover e adicionar
aprovados = ['Bia','Carlos','Ana']
aprovados.splice(3, 0, 'Elemento1', 'Elemento2') // Adicionar

console.log(aprovados)