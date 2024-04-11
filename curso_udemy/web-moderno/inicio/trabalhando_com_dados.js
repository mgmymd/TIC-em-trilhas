/* Aula 23 - Trabalhando com dados 1
- Criamos uma variável, o exemplo abaixo é o modo mais antigo com o uso de var: */

var produto = "Caneta BIC";
var quantidade = 10;
var preco = 6.4;
var imposto = 1.5;
var desconto = 7.2;

console.log(produto);
console.log(quantidade);
console.log(preco);
console.log(imposto);
console.log("O preço final é: R$ " + (preco + imposto));

//A formam mais moderna de criar variáveis é usar let:

let nome2 = "Caneta tinteiro";
let preco2 = 15.50;
let categoria2 = "papelaria";
console.log(nome2);
console.log(preco2);

/* Aula 24 - Trabalhando com dados 2 */

let preco3 = 19.90;
let desconto3 = 0.4;

console.log("O preço com desconto é: R$ " + preco3 * (1 - desconto3));
console.log("\nConcatenação: " + "Produto:" + nome2 + ", faz parte da categoria: " + categoria2);

/* Aula 25 - Trabalhando com dados 3 
- Tipo de dados mais básicos que temos em javascript e, o js não faz distinção entre números inteiros 
e decimais, ele é mais simples do que outras linguagens como o java, c# e python */

let idade = 31;
let salario = 4578.32;
let estaChovendo = false;
let estaChovendo2 = !estaChovendo;
let texto = "Texto";
let caracter = "a";

console.log(typeof idade);
console.log(typeof salario);
console.log(typeof estaChovendo);
console.log(typeof estaChovendo2);
console.log(estaChovendo, estaChovendo2);
console.log(typeof texto);
console.log(typeof caracter);

/* Aula 25 - Trabalhando com dados 4 */
let a = 3;

/* depois queremos modificar o valor de a no decorrer do código, devemos declarar como let ou var, 
o modo mais moderno seria let */

a = 10;
console.log(a);

/* Agora queremos uma constante, que o valor nunca seja alterado, usamos o CONST para indicar que 
será um valor fixo, e nunca poderá ser alterado durante a execução do código, se tentar alterar seu
valor haverá a indicação de erro;
- Quando temos um valor de constante, normalmente usamos APENAS LETRAS EM CAIXA ALTA, boas 
práticas para declaração de variáveis; */

const b = 10;
console.log(b);
