/* Aula 29: Desafio da troca de valores
-  O objetivo é trocar o valor das variáveis, o valor de a será 93 e b será 7; 
- E ao final, se chamar no console.log deverá apresentar os valores invertidos da maneira correta; 
- Existe um recurso no JS que consegue trocar de forma direta e outro por lógica */

let a = 7;
let b = 93;
console.log("O valor de a é: " + a + ". O valor de b é: " + b);

console.log("\nModo 1: declarando variável")
let c = a;
a = b;
b = c;
console.log("O valor de a é: " + a + ". O valor de b é: " + b);

console.log("\nModo 2: por lista")
lista = [a, b];
console.log("Os valores atuais em lista são: " + lista);
a=lista[1];
b=lista[0];
console.log("O valor de a é: " + a + ". O valor de b é: " + b);

console.log("\nModo 3: sem declarar variáveis novas")
console.log("Os valores atuais em lista são: " + a,b);
a = a + b;
b = a - b; 
a = a - b;
console.log("O valor de a é: " + a + ". O valor de b é: " + b);
