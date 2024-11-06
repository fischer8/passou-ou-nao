#!/usr/bin/env node

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(Number(answer)));
  });
};

(async () => {
  console.log("")
  console.log("------ ATENÇÃO ------")
  console.log("Utilize o ponto invés da virgula para representar casas decimais")
  console.log("Se não tiver feito alguma prova coloque a nota 0")
  console.log("")
  console.log("Primeiro semestre")
  const gs1 = await askQuestion('Nota gs: ');
  let cp1 = await askQuestion('Cp1: ');
  cp1 += await askQuestion('Cp2: ');
  cp1 += await askQuestion('Sprint1: ');
  cp1 += await askQuestion('Sprint2: ');
  const primeiroSem = (((cp1 / 4) * 10) * 0.4) + (gs1 * 0.6)
  console.log("")
  console.log("Segundo semestre")
  const gs2 = await askQuestion('Nota gs: ');
  let cp2 = await askQuestion('Cp1: ');
  cp2 += await askQuestion('Cp2: ');
  cp2 += await askQuestion('Sprint1: ');
  cp2 += await askQuestion('Sprint2: ');
  const segundoSem = (((cp2 / 4) * 10) * 0.4) + (gs2 * 0.6)
  console.log("")
  const mediaFinal = (primeiroSem * 0.4) + (segundoSem * 0.6)
  console.log("Média primeiro semestre: " + primeiroSem.toFixed(2))
  console.log("Média segundo semestre: " + segundoSem.toFixed(2))
  console.log("Média final: " + mediaFinal.toFixed(2))
  console.log("")
  if (mediaFinal >= 60) {
    console.log("Passou de ano parabens")
  } else {
    console.log("Não passou ainda")
  }
  rl.close();
})();
