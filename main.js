/*
    Вычислим расстояние между двумя точками.
    Даны координаты x, y 2-ч точек. Нужно вывести расстоняние между ними.
    ВЫчислим по теореме Пифагора
*/ 

let x1 = 10;
let y1 = 2;

let x2 = -3;
let y2 = 3;

let cathetus1 = Math.abs(x1-x2)
let cathetus2 = Math.abs(y1-y2)

console.log(Math.round(Math.sqrt(
    Math.pow(cathetus1, 2) + Math.pow(cathetus2, 2)
)));


/* Генератор случайных целых чисел между n до m.
Учесть что n необязательно меньше, чем m!
*/

let n = -100;
let m = 350;
/* количество цифры, которые могут быть сгенерированы */
let range = Math.abs(m-n);
/* округленное число от 0 до range */
let numderInRange = Math.round(Math.random() * range)
/*  левая границца возможного числа  */
let min = Math.min(n,m)

console.log(min + numderInRange);