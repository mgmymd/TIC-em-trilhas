/* Aula 17 - 1. Sentença de código e 2.Bloco
Podemos usar ; ao final, assim como não usá-lo: */
console.log("Hello world!");
console.log('Hello world!')

// Não é uma linguagem de programação indentada como o Python
        console.log("Hello world!");

// É uma linguagem case sensitive
var teste = 1;
var Teste = 2;
console.log(Teste);

// Podemos usar várias sentenças de código de forma seguida na mesma linha também desde que seja usado ;
console.log("Testando linha"); console.log("Várias sentenças em uma única linhaaa"); console.log("Será que vai dar certo?");

// Para executar o código: clicar na seta > acima para executar a página, ou usar o Ctrl + Alt + N
console.log("Executando o código com CTRL + ALT + N");

/* Aula 18 - Sentença II
 Exibir algo no console do computador: console.log("aaaaaaaa"); */
console.log("\nHello World! Aula 18 de Sentenças II");
// Na execução, a ordem das linhas importa, será executado de cima para baixo e para evitar que algo seja executado pode deixar comentado

/* Aula 19 - Comentários de Código, 23 de dezembro de 2023
 Comentários são usados para comentar uma linha, várias linhas, desabilitar uma linha de código que não queremos que seja executado
Podemos também colocar um barra barra ao final da linha e oque tiver após elas será um comentário */
console.log("\nPara comentar várias linhas: Use o CTRL + ; ");
console.log("Para descomentar várias linhas: Será novamente o CTRL + ; ");
console.log("Para comentar apenas uma linha deve-se usar o barra barra");
console.log("\nPara pular a linha use barra invertida + n")
console.log("Para comentar várias linhas usa-se no início um barra * e depois um * barra para múltiplas linhas como em SQL")
    console.log("Tab para dar um espaço");
console.log("Shift + tab para tirar um espaço");
console.log("ALT + SHIFT + TECLA PARA BAIXO - copia uma linha abaixo")
console.log("ALT + SHIFT + TECLA PARA BAIXO - copia uma linha abaixo")
console.log("Para formatar um documento usados: Shift + Alt + F ")

/* Aula 20. Bloco de códigos - 23 de dezembro de 2023
- Um bloco de javascript é definido dentro de um par de chaves {} e dentro dele podemos ter várias
sentenças de código finalizadas com ;, como exemplo:
{aaaaaaaaaaaaaaaaaaaaa;
aaaaaaaaaaaaaaaaaaaaaa;
aaaaaaaaaaa;
aaaaaaaaaaaaaaaaaaaa;} sendo um bloco de código com sentenças dentro

-Podemos também criar um bloco de código dentro do outro bloco, mas de modo obrigatório teremos que fechar cada um dos blocos */
{
    console.log("\nPasso 1 do bloco de código 1");
    console.log("Passo 2 do bloco 1");
}
// Bloco de código 2
{
    console.log('\nPasso 1 do bloco de código 2')
    console.log('Passo 2 do bloco de código 2 ')
    console.log('Passo 3 do bloco de código 2')
}

console.log("\nFIM! Se chegou até aqui tudo foi executado corretamente");

/* Um código geralmente é organizado em pastas e, o código é ainda organizado dentro de arquivos contidos em pastas;
Assim, as sentenças e blocos de códigos também fazem parte da organização de um código*/
