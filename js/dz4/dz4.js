let numbers = []; 
for (let i = 0; i < 10; i++) { 
  numbers.push(i); 
} 
console.log(numbers);

for (let i = numbers.length - 1; i >= 0; i--) { 
  numbers.pop(); 
} 
console.log(numbers);



let programers = [
  {name: 'И в а н', experience: 4 },
  {name: 'Д м и т р и й', experience: 2 },
  {name: 'Е к а т е р и н а', experience: 3 },
  {name: 'С т а н и с л а в', experience: 1 },
  {name: 'Н и к и т а', experience: 5 },
  {name: 'А р т ё м', experience: 2 },
  {name: 'В и к т о р', experience: 2 },
];


console.log(programers.filter(item => item.experience >= 3))

let programmerss = [
  { name: "Никита", money: 5300, position: "Главный разработчик" },
  { name: "Артём", money: 2100, position: "Старший разработчик" },
  { name: "Виктор", money: 3500, position: "Старший разработчик" },
  { name: "Екатерина", money: 1300, position: "Младший разработчик" },
  { name: "Дмитрий", money: 700, position: "Стажёр" },
  { name: "Алексей", money: 2200, position: "Старший разработчик" },
  { name: "Игорь", money: 1100, position: "Младший разработчик" },
  { name: "Валерий", money: 1400, position: "Младший разработчик" },
];

const obj = {
  'Главный разработчик': 2,
  'Старший разработчик': 1.7,
  'Младший разработчик': 1.5,
  'Стажёр': 1.3
}

programmerss = programmerss.map(o => (o.money *= obj[o.position], o))
console.log(programmerss)

