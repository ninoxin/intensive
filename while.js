/* task 1 */
let arr = []
let count = 100
let n = 0
let m = 100

let min = Math.min(n, m); 
let max = Math.max(n, m); 

for (let i = 0; i < count; i++) {
    //Генерируем случайное число из диапазона 
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min); 
    arr.push(randomNumber)
}
console.log(arr);

/* task 2 */
let str = 'Святлох'
let newStr = ''

for (let index = 0; index < str.length; index++) {
    
    newStr += str[(str.length - 1) - index]
}
console.log(newStr);

/* task 3 */
roadMines = [true, false, false, false, false, false, false, false, false, true]  
let live = 2

for (let i = 0; i < roadMines.length; i++) {
    if (roadMines[i] == true) {
        live -= 1
        if (live == 1) {
            console.log(`танк переместился на позицию ${i+1}, танк поврежден`);
          } 
          else if (live == 0) {
            console.log(`танк переместился на позицию ${i+1}, танк уничтожен`);
      
          } 
    }        else {
        console.log(`танк переместился на позицию ${i+1}`);
    } 
}

/* task 4 */
let days = []
let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

let day = 'вторник'
let indexDay

for (let i = 1; i <= 31; i++) {
    days.push(i)
}

for (let i = 0; i < week.length; i++) {
        if (week[i] == day) {
            indexDay = i
        }
}

for (let y of days) {
    const cal = (indexDay + y - 1) % 7
    console.log(`${y} января, ${week[cal]}`);
}