let fibo = [1,1]

for (let i = 1; i < 49; i++) {
    fibo.push(fibo[i]+ fibo[i-1])
}
console.log(fibo);

/* цикл, который никогда не завершится и повесит вашу программу */
/* for(;;) console.log('Я буду сниться тебе в кошмарах'); */
/* цикл, который может завершиться на любой итерации с вероятностью 10% */
/* for(; Math.random()>=0.1;) console.log('И еще разок'); */
/* вечный цикл, считающий до бесконечности */
/* for(let i = 0;; ++i) {console.log(i);} */

let tea = 200

console.log('Вы налили себе' + tea +'мл чая');

while (tea > 0) {
    tea -=10
    console.log('В чашке осталось'+ tea +"мл чая");
}
console.log('вы все выпили');


/* для простоты представим, что у нас 5 патронов
вероятность равна 20% */
do {
    console.log('Нажимаем на курок');
} while (Math.random() > 0.2);

console.log('Похоже, вам не повезло!');


let cards = ['2','КОРОЛЬ','6','ТУЗ','9','10','7']
let hand = []

for (let card of cards) {
    if (card !== 'КОРОЛЬ' && card !=='ТУЗ') {
        continue
    }
    hand.push(card);
    console.log('Карта'+ +'в руке');
}

console.log('Карты в руке', hand);


