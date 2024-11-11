//As arrow functions (funções de seta) são uma forma mais curta de escrever funções em JavaScript
//Elas têm uma sintaxe mais concisa, especialmente útil para funções pequenas ou funções que precisam ser passadas como argumentos
const nomeFuncao = (param1, param2) => {
    // corpo da função
    return param1 + param2;
};

//Para uma função com apenas uma linha de retorno, você pode omitir as chaves {} e o return:
const soma = (a, b) => a + b;

//Se houver apenas um parâmetro, você pode omitir os parênteses:
const dobro = n => n * 2;
