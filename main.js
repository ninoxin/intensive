/* 1 task */

let x1 = 2
let x2 = 10

let y1 = 3
let y2 = 5

let withd = Math.abs(x1-x2)
let height = Math.abs(y1-y2)

console.log(withd * height);

/* 2 task */

let a = 13.123456789, b = 2.123, p = 5

let normA = Math.floor((a%1)* Math.pow(10, p))
let normB = Math.floor((b%1)* Math.pow(10, p))
console.log(normA);
console.log(normB);


/* 3 task */

let m = 35;
let n = -31;
 
let max = Math.max(m, n);
let min = Math.min(m, n);
 
 
 
let difference = Math.abs(m - n);
let random = Math.floor(Math.random() * difference + min);
let Odd = random + 1 - Math.abs(random % 2);

console.log(Odd);


