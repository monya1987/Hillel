http://learn.javascript.ru/constructor-new
http://learn.javascript.ru/prototype


Вот массив для примера: 
var cows = [
  {name: "Legolas", type: "calf", hadCalf: null},
  {name: "Gimli", type: "bull", hadCalf: null},
  {name: "Arwen", type: "cow", hadCalf: null},
  {name: "Galadriel", type: "cow", hadCalf: null},
  {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
];

1. Построить функцию с именем noCalves, которая будет добавлена к прототипу объекта. Если тип объекта является "cow", а также не было телят, функция должна возвращать true, в противном случае — false.

cows[1].noCalves() => false
cows[2].noCalves() => true

2. Построить функцию под названием countCows, которая будет добавлена в прототип массива. CountCows должна возвращать количество коров, у которых нет телят. 
сows.countCows() => 2

3. Создать 2 объекта с данными о животном, используя в качестве прототипа объект: 
var cows = {
  name: undefined,
  type: undefined,
  hadCalf: undefined
};

"Legolas", "calf", false
"Eowyn", "cow", "Legolas"

4. Заменить объект cows на функцию-конструктор. И создать 2 таких же животных.