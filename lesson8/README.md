 Создать функцию, которой передаем проишествие и она возвращает функцию. Это все помещаем в переменную, а которую потом передаем аргумент улицы и функция возвращает "В городе *проишествие* на улице *улица*. Сообщений на тему *проишествие*: *число*". Вот пример.

var avariya = warningMaker('авария');
avariya('Успенская'); // "В городе авария на улице Успенская. Сообщений на тему авария: 1".
avariya('Ришельевская');  // "В городе авария на улице Ришельевская. Сообщений на тему авария: 2".

var remont = warningMaker('ремонт дороги');
remont('Преображенская');  // "В городе ремонт дороги на улице Преображенская  Сообщений на тему ремонт дороги: 1".

4. Задание на работу с объектами.
Пишем функцию, которая на вход принимает массив. Допустим, вот такой:
var cows = [
  {name: "Legolas", type: "calf", hadCalf: null},
  {name: "Gimli", type: "bull", hadCalf: null},
  {name: "Arwen", type: "cow", hadCalf: null},
  {name: "Galadriel", type: "cow", hadCalf: null},
  {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
];
и возвращает объект, но в таком виде:
{
    calf: [
        {name: "Legolas", hadCalf: null}
    ],
    bull: [
        {name: "Gimli", hadCalf: null}
    ],
    cow: [
        {name: "Arwen", hadCalf: null},
        {name: "Galadriel", hadCalf: null},
        {name: "Eowyn", hadCalf: "Legolas"}
    ]
}

те строит объект по типу животного