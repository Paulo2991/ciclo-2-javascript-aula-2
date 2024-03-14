// O que acontece ao tentar reatribuir um valor a const idade?
// Ao tentar reatribuir o valor de uma const vai dar erro, ou seja const não muda de valor
// seria viavel criar a variavel let para reatribuir o valor da variavel. 
// ou seja, criar uma segunda const idade = 30?
// Se criar uma segunda const idade = 30 vai dar erro por conta que tem o mesmo nome de variável idade.
// seria viavel criar uma const idade1 = 30 
const idade = 25;
//console.log(idade); 


////////////////////////////////////////////////////////////////////////


//O que acontece ao chamar a let x dentro e fora do escopo? 

// Vemos que o uso do x está fora de seu bloco (as chaves dentro das quais a variável foi definida) 
// retorna um undefined.
// Isso ocorre porque as variáveis de let têm escopo de bloco não escopo global.

//Escopo refere-se ao contexto no qual as variáveis e funções são definidas e acessadas.
//Nesse caso as chaves delimitam o nosso escopo

{
    let x = 10;
    //console.log(x); 
}
 //console.log(x);



///////////////////////////////////////////////////////////////////////

//Ainda sobre escopo explique a diferença dos console.log
// A primeira sentença vai dar erro porque está sendo declarada com let, o let funciona quando a variavel
// está dentro do escopo.
// A segunda sentença porque está sendo declarada com var, o var funciona quando a variavel
// está dentro do escopo global. 
{
    let x = 10;
    var y = 20;
}

 //console.log(x);
 //console.log(y);

///////////////////////////////////////////////////////////////////////

//O que acontece nessa declaração, explique sobre o Hoisting

// Aqui nesse exemplo acontece um hosting no JavaScript,
// Esse hosting é padrão no JavaScript onde ele coloca suas
// declarações tanto de variaveis e funções para serem movidas
// no topo do escopo antes da execução do código
// Desse jeito as variaveis do tipo var acabam sofrendo um hosting e acabam sendo movidas 
// para o topo permindo que seu valor sejam inicializadas undefined

console.log(a); 
var a = 5;

// Nesse exemplo aqui está usando let ou seja assim como variáveis que são declaradas como var
// o let sofrem também o hosting, mas ele vai dar erro porque essas variaveis não são inicializadas.

//console.log(b);
//let b = 10;


/////////////////////////////////////////////////////////////////////////////////

//No código abaixo apresenta um erro, qual?

// Apresenta erro na segunda sentença que as variaveis são declaradas com o mesmo nome sendo
// que no JavaScript usando let não permite fazer a declaração de variaveis usando o mesmo
// nome, deveria tirar o let da segunda sentença para atualizar o valor da variavel. 

var x = 5;
var x = 10;
//console.log(x); 

//let y = 15;
//let y = 20; 
//console.log(y); 


//// Escreva um programa que print a primeira letra dessa variavel 
let nomeCompleto = 'eduardo';

//sua lógica para pegar a primeira letra 
const letraInicial = nomeCompleto.charAt(0);
console.log(letraInicial);







