#!/usr/bin/env node

const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const prompt = require("prompt-sync")({ sigint: true });
const qtd = prompt("Digite o número de valores que deseja gerar:");

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 5,
    min: 2,
  },
});

let arr = [];

let prioridadeLabel = ["normal", "critico"];

const between = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

for (let i = qtd; i--; ) {
  arr.push({
    titulo: lorem.generateSentences(1),
    idade: between(1, 8),
    estimativa: between(1, 24),
    prioridade:
      prioridadeLabel[Math.floor(Math.random() * prioridadeLabel.length)],
  });
}

console.log(`{"bugs": \n ${JSON.stringify(arr)} \n}`);
