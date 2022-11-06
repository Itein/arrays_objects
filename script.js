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
let animalParts = ["Хвіст", "Голову", "Язик", "Ротяку"];
let animals = [
  "Вудильщика",
  "Слимака",
  "Личинки комара",
  "Щипавки",
  "Таргана",
  "Щура",
  "Гієни",
];
let randomPart = parts[Math.floor(Math.random() * parts.length)];
let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
let randomWords = words[Math.floor(Math.random() * words.length)];
let randomAnimalPart =
  animalParts[Math.floor(Math.random() * animalParts.length)];
let randomAnimal = animals[Math.floor(Math.random() * animals.length)];
//Генератор випадкових дражнилок
let randomInsult = `Твоя ${randomAdjective} ${randomPart} схожа на ${randomWords} `;
console.log(randomInsult);
//Витончені дражнилки
let randomAnimalInsult = `У тебе ${randomPart} ще більш ${randomAdjective} за ${randomAnimalPart} ${randomAnimal}`;
console.log(randomAnimalInsult);
//Витончені дражнилки з join
let randomAnimalInsultJoin = [
  "У тебе ",
  randomPart,
  " ще більш ",
  randomAdjective,
  " за ",
  randomAnimalPart,
  " ",
  randomAnimal,
].join("");
console.log(randomAnimalInsultJoin);

//2.З'єднання чисел
let numbers = [1, 2, 3];
let comprasion = [
  numbers[0],
  " більше, ніж ",
  numbers[1],
  " більше, ніж ",
  numbers[2],
].join("");
console.log(comprasion);

//3. Підрахунок очок
let scores = { Катя: 0, Олег: 0, Вітя: 0, Оля: 0 };
scores["Катя"] += 3;
console.log(scores["Катя"]);
scores["Катя"] += 5;
scores["Вітя"] += 4;
scores["Оля"] += 2;
console.log(scores);

//4.Углиб об'єктів і масивів
const myCrazyObject = {
  name: "Безглуздий об'єкт",
  "some array": [7, 9, { purpose: "плутанина", number: 123 }, 3.3],
  "random animal": "Бананова акула",
};
console.log(myCrazyObject["some array"][2].number);
