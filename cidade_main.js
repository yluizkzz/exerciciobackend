const readlineSync = require("readline-sync")
const Cidade = require("./cidade_class")

console.log("---------------------------------")
console.log("-- Dados da cidade e População --")
console.log("---------------------------------")

let nome = readlineSync.question("Digite o nome da cidade: ")
let estado = readlineSync.question("Digite o nome do estado: ")
let populacao = readlineSync.question("Digite o número de habitantes: ")
let numHomens = readlineSync.question("Digite o número de homens da cidade: ")
let numMulheres = readlineSync.question("Digite o número de mulheres da cidade: ")

const cidade1 = new Cidade(nome, estado, populacao, numHomens, numMulheres)

let homensPercentual = cidade1.percentualHomens()
let mulheresPercentual = cidade1.percentualMulheres()

console.log("O número de Habitantes é: ",populacao) 
console.log("O percentual de homens é ",homensPercentual) 
console.log("O percentual de mulheres é ",mulheresPercentual) 
