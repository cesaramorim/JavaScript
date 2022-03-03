// Metodos Array

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona ultimo elemento
console.log(pilotos) 

pilotos.shift() // Remove primeiro elemento
console.log(pilotos)

pilotos.shift() // Adiciona primeiro elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(1)
console.log(algunsPilotos1)