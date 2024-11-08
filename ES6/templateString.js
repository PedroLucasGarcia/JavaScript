let nome = 'Pedro'

console.log(`Olá ${nome}, tudo bem?`)   //Template strings em JavaScript são strings literais delimitadas por crases (`) que permitem a interpolação de variáveis e expressões diretamente dentro da string, tornando o código mais legível e prático.

function calcular(x, y, z){
    return (x * y) / z 
}

console.log(`O resultado da expressão (8 * 39) / 14, é igual à:  ${calcular(8, 39, 14)}.`)
