lado1 = Number(prompt("◺ Bem vindo a calculadora de triângulos! ◹ \nDigite o valor do lado 1: "))
lado2 = Number(prompt("Digite o valor do lado 2: "))
lado3 = Number(prompt("Digite o valor do lado 3: "))

// Confirmar se o valor é negativo, para não aceitar
if (lado1 < 0 || lado2 < 0 || lado3 < 0){
  ehPossivel = false
} else {
  ehPossivel = (lado1 + lado2) > lado3
} 

// Verificar o tipo do triângulo
if (ehPossivel){
  if(lado1 == lado2 && lado2 == lado3){
    alert(`✔ Seu triângulo de lados ${lado1}, ${lado2} e ${lado3} é um triângulo Equilátero ▲`)
  } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
    alert(`✔ Seu triângulo de lados ${lado1}, ${lado2} e ${lado3} é um triângulo Isósceles ▲`)
  } else {
    alert(`✔ Seu triângulo de lados ${lado1}, ${lado2} e ${lado3} é um triângulo Escaleno ▲`)
  }
} else {
  alert(`✖ Seu triângulo de lados ${lado1}, ${lado2} e ${lado3} é ímpossível! ▲`)
}
  