/* Aula 27: Desafio Área da circunferência 
- Fórmula: PI * raio^2 ou usar PI * raio * raio
- Imaginar que temos inicialmente o valor de raio = 10. 
- Podemos criar uma variável pra área e outro valor para representar o valor de pi
- Usar concatenação para apresentar o valor da área da circunferência 
- O raio pode ser declarado como sendo um let ou um const nesse exemplo */

let raio = 10;
const PI = 3.14159;
let areaCircunferência = PI * raio * raio;

console.log("A área da circunferência é: " + areaCircunferência + " m2.");

// No javascript há o MATH que apresenta o PI com um valor de maior precisão:
const PIMATH = Math.PI;
areaCircunferência = PIMATH * raio * raio;
console.log("\nA área da circunferência é: " + areaCircunferência + " m2.");

//ou ainda fazer mais diretamente:
areaCircunferência = Math.PI * raio * raio;
console.log("\nA área da circunferência é: " + areaCircunferência + " m2.");
