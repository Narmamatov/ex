// Задание №1
// Создайте объект в переменной programmer. Дайте объекту имя,
// фамилию, возраст, язык программирования и зарплату. Выведите каждое свойство объекта по очереди в консоль.
// let human = {
//   name: "tom",
//   surName: "John",
//   age: 30,
//   salary: "3000",
// };
// for (let i in human) {
//   console.log(human[i]);
// }
// ПИСАТЬ КОД ЗДЕСЬ

// Задание №2
// Запросите у пользователя ввести два числа и верните ему сумму этих двух чисел.
// Если сумма больше 10 и в то же время меньше 20 то, умножьте на 5. Если же сумма больше 20 и меньше 50, то разделите на 3.
// Иначе прибавьте 10.
// Для решения используйте функции: prompt и parseInt или опертаор +.
// Ответ может быть и десятичным числом, и выведите это конечное число.
// Например:
// let firstNum = prompt("Введите первое число");
// let secondNum = prompt("Введите второе число");
// if ((firstNum && secondNum >= 10) & (firstNum && secondNum <= 19)) {
//   console.log(firstNum * 5);
//   console.log(secondNum * 5);
// } else if ((firstNum && secondNum >= 20) & (firstNum && secondNum <= 50)) {
//   console.log(firstNum / 3);
//   console.log(secondNum / 3);
// } else {
//   console.log(+firstNum + 10);
//   console.log(+secondNum + 10);
// }

// ПИСАТЬ КОД ЗДЕСЬ

// Задание №3
// Создайте программу, которая выводит пирамиду из чисел, например:
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// let sum = "";
// for (let i = 1; i <= 10; i++) {
//     sum += i;
//   console.log(sum);
// }
// ПИСАТЬ КОД ЗДЕСЬ

// Задание №4
// Есть объект users в котором перечислен
// возраст участников. Напишите код,
// который выведет суммарный возраст
// всех участников. Решите задачу через
// цикл for...in.
// let users = {
//   John: 28,
//   Mark: 30,
//   David: 25,
//   Richard: 42,
// };
// let ages = Object.values(users);
// ages.forEach((el) => (res += el));
// let res = 0;
// console.log(res);

// ПИСАТЬ КОД ЗДЕСЬ

// Задание №5
// Напишите функцию removeElem(arr, element), которая принимает 2 аргумента.
// Первый аргумент- это массив.
// Второй аргумент- это элемент который нужно удалить из массива.
// Пример: let arr = [2, ‘hello’, true,  ‘world’,  5, ‘js’]
//     removeElem(arr,’world’)
// Ответ: [2, ‘hello’, true,  5, ‘js’]
// function removeElem(arr, world) {
//   world = arr.splice(3, 1);
//   return arr;
// }
// console.log(removeElem([2, "hello", true, "world", 5, "js"]));

// ПИСАТЬ КОД ЗДЕСЬ

// Задание №6
// Напишите функцию palindrom(word), принимающая один аргумент word.
// Функция, должна выводить в консоль true, если строка является палиндромом, в обратном случае false. При этом нужно учитывать пробелы и регистр.
// Палиндром – слово, которое читается одинаково слева направо и справа налево (например, ротор)

// Пример №1:
// Ввод: tenet
// Ответ: true

// Пример №2:
// Ввод: my gym
// Ответ: true

// Пример №3Ж
// Ввод: nolan
// Вывод: false

// function palindrom(word) {
//   let letter = word.trim();
//   if (letter.toLowerCase() === letter.split("").reverse().join("")) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(palindrom("my gym"));
// ПИСАТЬ КОД ЗДЕСЬ

// Задание №7
// Дан лимит = 1000, напишите функцию, которая будет выводить в
// консоль удвоенное значение аргумента до тех пор, пока оно не достигнет
// лимита, и после этого вывести в консоль аргументы в обратном порядке (использовать цикл while)

// Например:

// Ввод: functionLimit(50)
// Вывод:
// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50

// let num = 50;
// while (num <= 1000) {
//     console.log(num);
//   num *= 2;
// }
// while (num >= 50) {
//     num /= 2;
//     console.log(num);
// }
// ПИСАТЬ КОД ЗДЕСЬ

// Задание №8
// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// Используйте метод filter()
// let word = ["1234"];
// let res = word.filter((el) =>
//   el.length < 5 ? console.log(el) : console.log(false)
// );
// ПИСАТЬ КОД ЗДЕСЬ

// Задание №9
// Дан массив
// let task2 = [10, 25, 25, 15, 5, 10];
// Выведите в alert сумму элементов
// этого массива.
// Используйте метод .forEach()
// let res = 0;
// task2.forEach((element) => {
//   res += element;
// });
// alert(res);
// ПИСАТЬ КОД ЗДЕСЬ

// Задание №10
//  Напишите функцию, определяющую
// максимальное количество повторяющихся
//  элементов в массиве.
// Массив для примера:
// let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];
// function task5(arr) {
//   let newarr = arr.map((el) => {
//     let count = 0;
//     arr.map((elem) => (el === elem ? count++ : null));
//     return count;
//   });
//   let num = newarr[0];
//   let g = 0;
//   newarr.map((el, index) => {
//     if (num < el) {
//       num = el;
//       g = index;
//     }
//   });
//   return arr[g];
// }
// console.log(task5([4, 4, 4, 5, 3, 5, 2, 3, 1, 3, 4]));
// ПИСАТЬ КОД ЗДЕСЬ

// Задание №11
// Дан массив nums = [8,1,2,2,3]
// Напишите функцию, которая будет возвращать массив, в котором указано сколько есть чисел в массиве меньше, чем каждый элемент массива.
// Используйте метод map()
// Пример №1:
// Ввод: nums = [8,1,2,2,3]
// Вывод: [4,0,1,1,3]
// 4 элемента меньше чем 8
// 0 элементов меньше чем 1
// 1 элемент меньше чем 2
// 1 элемент меньше чем 2
// 3 элемента меньше чем 3

// Пример №2:
// Ввод: nums = [6,5,4,8]
// Вывод: [2,1,0,3]

// function nums(arr) {
//   return arr.map((el) => arr.filter((elem) => el > elem).length);
// }console.log(nums([6,5,4,8]));

// ПИСАТЬ КОД ЗДЕСЬ

// Задание №12
// Вам нужно поменять местами значения
// переменных при помощи деструктуризации.
// let a = 0;
// let b = 1;
// Пример результата:
// console.log(a, b); // 1, 0
// let a = 0;
// let b = 1;
// [b, a] = [a, b];
// console.log(a,b);

// ПИСАТЬ КОД ЗДЕСЬ
// Задание №13
// Дан объект { size: { width: 100, height: 200 }, items: ["Cake", "Donut"], extra: true}.
// Деструктуризуйте все свойства и элементы данного объекта, включая вложенные объекты и массивы

// let obj = {
//   size: { width: 100, height: 200 },
//   items: ["Cake", "Donut"],
//   extra: true,
// };
// let {size: {width, height},items:[a,b],extra:c} = obj
// console.log(obj);
