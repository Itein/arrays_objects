//1.Генератор випадкових дражнилок

let parts = ["Голова", "Рука", "Нога", "Пузяка"];
let adjectives = ["Смердюча", "Недолуга", "Бридка", "Огидна", "Відразлива"];
let words = [
  "Хробака",
  "Жабу",
  "Джабба Хатта",
  "Аксолотля",
  "Морського огірка",
];

let randomPart = parts[Math.floor(Math.random() * parts.length)];
let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
let randomWords = words[Math.floor(Math.random() * words.length)];

let randomInsult = `Твоя ${randomAdjective} ${randomPart} схожа на ${randomWords} `;
console.log(randomInsult);
