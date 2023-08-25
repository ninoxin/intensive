/* Вычисление дискриминанта и решения квадратного уравнения 
даны параметры для квабратного уравнения
Нужно вывести возможные значения х этого уравнения
*/

let a = 13, b = 155, c = 10;
let d = b * b - 4 * a * c;

if (d < 0) {
    console.log('Квадратное уравнение не имеет решения');
} else if(d === 0) {
    let x = -b/(2*a)
    console.log(`Квадратное уравнение имеет одно решение, x = ${x}`);
} else{
    let dRoot = Math.sqrt(d)
    let x1 = Math.round((-b+dRoot)/(2*a))
    let x2 = Math.round((-b-dRoot)/(2*a))
    console.log(`Квадратное уравнение имеет 2 решения x1 = ${x1}, x2 = ${x2}`);
}


/* 
определяем день недели как выходной или будний день.
*/

let day = 'fvdf';

switch (day) {
    case 'Понедельник':
    case 'Вторник':
    case 'Среда':
    case 'Четверг':
    case 'Пятница':
        console.log(day + 'это будний день');
        break;
    case 'Суббота':
    case 'Воскресенье':
        console.log(day + 'это выходной день');
        break;
    default:
        console.log('Я не слышал о дне недели, который называется' + day);
        break;
}