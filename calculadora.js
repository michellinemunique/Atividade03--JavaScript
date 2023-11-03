// Receba dois valores do usuário
const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
const valor2 = parseFloat(prompt("Digite o segundo valor:"));

// O usuário deve colocar qual operador aritmético vai utilizar
const operador = prompt("Digite o operador (+, -, *, /):");

let resultado;

// Verificando o operador e os valores para realizar a operação e retornar o resultado
if (operador === '+') {
  resultado = valor1 + valor2;
} else if (operador === '-') {
  resultado = valor1 - valor2;
} else if (operador === '*') {
  resultado = valor1 * valor2;
} else if (operador === '/') {
  if (valor2 !== 0) {
    resultado = Math.floor(valor1 / valor2);
    const sobra = valor1 % valor2;
    console.log(`Resultado: ${resultado}`);
    console.log(`Sobra: ${sobra}`);
  } else {
    console.log("Divisão por zero não é permitida.");
  }
} else {
  console.log("Operador inválido. Use +, -, *, ou /.");
}

// Retornando o resultado ou uma mensagem de erro se aplicavel
if (resultado !== undefined) {
  console.log(`Resultado: ${resultado}`);
}
