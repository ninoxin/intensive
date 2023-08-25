/* task 1 */
let password = '4321_'

if (password.length > 4 && password.includes('-') || password.includes('_')) {
    console.log('Пароль надёжный');
} else{
    console.log('Пароль недостаточно надёжный');
}

/* task 2 */

let nama = 'nino'
let surname = 'NoVis'

let newNama = nama.slice(0,1).toUpperCase() + nama.slice(1).toLowerCase()
let newSurname = surname.slice(0,1).toUpperCase() + surname.slice(1).toLowerCase()

console.log(newNama + ' '+ newSurname);
/* let newSurname =  */


console.log(nama == newNama ? 'Имя осталось без изменений' : 'Имя было преобразовано');
console.log(surname == newSurname ? 'Фамилия осталась без изменений' : 'Фамилия была преобразована');
