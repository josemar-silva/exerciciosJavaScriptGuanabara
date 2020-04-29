let num  = [2,3,6] // criando vetor com 3 valores definidos
console.log(num) // escrevendo no console
num[2] = 9 // adicionando valor '9' a no indice (posição) '2' do vetor
console.log(num)
num.push(7) // comando para acrescentar valor a ultima posição (ultima posição criada automaticamente)
console.log(num)
console.log(num.length) // num.length -> contar qnt de posições
console.log(num.sort()) // organizar valores de forma crescente
console.log(num[2]) // selecionar valor da posição (indice) '2' e mostrar no console

for (var pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}

for (var pos in num){ // sintax nova e6
    console.log(num[pos]) // sintax nova e6
}