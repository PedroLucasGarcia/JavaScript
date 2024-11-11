//Spread(...) - Espalhar estruturas de dados(pega cada um dos dados e distribui dentro de outras estruturas)

//strings
let tituloArtigo = 'Como utilizar o operador spread'

console.log(tituloArtigo)
console.log(...tituloArtigo)  //separa cada caracter
console.log([...tituloArtigo])  //separa cada caracter e coloca em uma posição dentro de um array

//arrays
let listaCursos1 = ['Node JS e MongoDB', 'ES6, Typescript e Angular 4']
let listaCursos2 = ['Multiplataforma Andorid/IOS', 'Introdução ao GNU/Linux']
let listaCursosCompleto = [...listaCursos1, ...listaCursos2, 'Web completo', 'Android completo']   //espalha os conteúdos dos arrays dentro de listaCursosCompleto

console.log(listaCursosCompleto)

//objetos
let pessoa = {nome: 'João', idade: 27, endereco: 'Rua ABC'}
let clone = {...pessoa}   //espalha os atributos 

console.log(clone)

//----------------------------------------------------------------------------------------------------------------
//Rest(...) - Juntar estruturas de dados

//funções
function soma(...param){  //Recupera os parâmetros e juntará em uma estrutura de array
    let resultado = 0
    console.log(param)
    param.forEach(v => resultado += v)

    return resultado
}

console.log(soma(3, 8, 5, 7, -8, 10, 115))

function multiplicacao(m, ...p){  //m = 5 e ..p = 7, 12, 3, 49 (todo o restante dos valores)
    console.log(m)
    let resultado = 0
    console.log(p)

    p.forEach(v => resultado += m * v)

    return resultado
}

console.log(multiplicacao(5, 7, 12, 3, 49))