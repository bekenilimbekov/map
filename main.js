// ### Задача 1: Умножение всех чисел на 2
// Задача:  
// Создайте массив чисел. Используйте метод map, чтобы создать новый массив, в котором каждое число умножено на 2.

// Пример:  
// Для массива [1, 2, 3] новый массив должен быть [2, 4, 6].
// const numbers = [1, 2, 3];
// const multiNumbers = numbers.map(num => num * 2);
// console.log(multiNumbers); 
// ---

// ### Задача 2: Преобразование строк в заглавные буквы
// Задача:  
// Создайте массив строк. Используйте метод map, чтобы создать новый массив, где каждая строка преобразована в заглавные буквы.

// Пример:  
// Для массива ['привет', 'мир'] новый массив должен быть ['ПРИВЕТ', 'МИР'].

// const strings = ['привет', 'мир'];
// const upperCaseStrings = strings.map(str => str.toUpperCase());
// console.log(upperCaseStrings); 

// ---

// ### Задача 3: Преобразование массива чисел в строки
// Задача:  
// Дан массив чисел. Используйте map, чтобы создать новый массив, в котором все числа преобразованы в строки.

// Пример:  
// Для массива [1, 2, 3, 4] новый массив должен быть ['1', '2', '3', '4'].
// const numbers = [1, 2, 3, 4];
// const stringNumbers = numbers.map(num => num.toString());
// console.log(stringNumbers);

// ---

// ### Задача 4: Добавление символов к строкам
// Задача:  
// Создайте массив строк. Используйте map, чтобы создать новый массив, где к каждой строке добавлен символ "!" в конце.

// Пример:  
// Для массива ['кот', 'собака', 'тигр'] новый массив должен быть ['кот!', 'собака!', 'тигр!'].

// const strings = ['кот', 'собака', 'тигр'];
// const modStrings = strings.map(str => str + '!');
// console.log(modStrings); 

// ---

// ### Задача 5: Извлечение имён из массива объектов
// Задача:  
// Дан массив объектов, где каждый объект представляет пользователя с полями name и age. Используйте метод map, чтобы создать новый массив, который содержит только имена пользователей.
// const users = [
//     { name: 'Алекс', age: 25 },
//     { name: 'Мария', age: 30 },
//     { name: 'Иван', age: 28 }
// ];

// const names = users.map(user => user.name);
// console.log(names); 