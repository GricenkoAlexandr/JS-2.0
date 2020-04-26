// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.

let a = 7;
b = 9;
console.log(a * b);

// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.

let c = 7;
d = 9;
document.querySelector(`.out-2`).textContent = c / d;

// document.querySelector('.out-2').textContent = 

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.

let e = 3;
f = 5;
document.querySelector(`.out-3`).textContent = e + f;

// document.querySelector('.out-3').textContent = 

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.

let e1 = `3`;
f1 = 5;
document.querySelector(`.out-4`).textContent = e1 + f1;

/*
В 3-м задании мы делали операцию сложения чисел, а в этом задании у нас сложение строк, и хотя 5 у нас число, но при сложении числа и строки
JS воспринимает в данном случае число, как строку (конкатенирует их). P.S. в том числе и за это не любят JS всякие Javа-еры, Сишарперы и прочие строготипизированолюбы) 
*/

// document.querySelector('.out-4').textContent = 

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.

let e2 = 3;
f2 = 0;
document.querySelector(`.out-5`).textContent = e2 / f2;

// document.querySelector('.out-5').textContent = 

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.

let e3 = 3;
f3 = `Hello`;
document.querySelector(`.out-6`).textContent = e3 + f3;

// document.querySelector('.out-6').textContent = 

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.

let e4 = 3;
f4 = `Hello`;
document.querySelector(`.out-7`).textContent = e4 * f4;

// document.querySelector('.out-7').textContent = 

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.
let inp8 = document.querySelector(`.i-8`);

function t8() {
    console.log(inp8.value);
}

document.querySelector('.b-8').onclick = t8;

// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.

let inp9 = document.querySelector(`.i-9`);

function t9() {
    document.querySelector(`.out-9`).textContent = inp9.value;
    inp9.value = ``;
}

document.querySelector('.b-9').onclick = t9;

// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.

let inp10 = document.querySelector(`.i-10`);

function t10() {
    document.querySelector(`.out-10`).textContent = inp10.value * 10;
    inp10.value = ``;
}

document.querySelector('.b-10').onclick = t10;

/* 
Хотя в задании не была указана очистка поля, но добавил.
Так красивше)
*/

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.

let inp11 = document.querySelector(`.i-11`);

function t11() {
    document.querySelector(`.out-11`).textContent = +inp11.value + 10;
    inp11.value = ``;
}

document.querySelector('.b-11').onclick = t11;

// Task 12.
// Создайте два input (i-12_1 и i-12-2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.

let inp121 = document.querySelector(`.i-12_1`);
inp122 = document.querySelector(`.i-12_2`);

function t12() {
    document.querySelector(`.out-12`).textContent = `Hello ` + inp121.value + ` ` + inp122.value;
    inp121.value = ``;
    inp122.value = ``;
}

document.querySelector('.b-12').onclick = t12;

// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.

let inp131 = document.querySelector(`.i-13_1`);
inp132 = document.querySelector(`.i-13_2`);

function t13() {
    document.querySelector(`.out-13`).textContent = +inp131.value + (+inp132.value);
    inp131.value = ``;
    inp132.value = ``;
}

document.querySelector('.b-13').onclick = t13;

// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

let inp14 = document.querySelector(`.i-14`);
inp14.value = `Hello`;

// document.querySelector('.i-14').value = 

// Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

let y = document.querySelector(`.i-15`);
y.style.border = '2px solid red';

/*
В данном случае мы получаем доступ к свойству `style` тэга (обьекта) input и изменили его значение.
*/

// let y = 
// y.style.border = 

// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16

let inp161 = document.querySelector(`.i-16_1`);
inp162 = document.querySelector(`.i-16_2`);

function t16() {
    document.querySelector(`.out-16`).textContent = +inp161.value + (+inp162.value);
    inp161.value = ``;
    inp162.value = ``;
}

document.querySelector('.b-16').onclick = t16;

// Task 17.
/*
Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку.
Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте 
за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
*/
let t = document.querySelector(`.i-17`);

function t17() {
    t = parseInt(t);
    document.querySelector(`.out-17`).textContent = t;
}

document.querySelector('.b-17').onclick = t17;

// Task 18.
/*Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. 
Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте 
за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
*/

let s = document.querySelector(`.i-18`);

function t18() {
    s = parseFloat(s);
    document.querySelector(`.out-18`).textContent = s;
}

document.querySelector('.b-18').onclick = t18;

// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!

let inp191 = document.querySelector(`.i-19_1`);
inp192 = document.querySelector(`.i-19_2`);

function t19() {
    document.querySelector(`.out-19`).textContent = +inp191.value + (+inp192.value);
    inp191.value = ``;
    inp192.value = ``;
}

document.querySelector('.b-19').onclick = t19;

// Task 20
/*
Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу
 предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.
 */

let inp201 = document.querySelector(`.i-20_1`);
inp202 = document.querySelector(`.i-20_2`);
inp203 = document.querySelector(`.i-20_3`);
inp204 = document.querySelector(`.i-20_4`);

function t20() {
    document.querySelector(`.out-20`).textContent = `Уважаемый ` + inp201.value + `, ` + inp202.value + `, Ваш возраст ` + inp203.value + `, по профессии Вы ` + inp204.value + `.`;
    inp201.value = ``;
    inp202.value = ``;
    inp203.value = ``;
    inp204.value = ``;
}

document.querySelector('.b-20').onclick = t20;