let arr = [1,2,3,4]

// Destrcuting into a b c d
let [a,b,c,d] = arr

console.log(a,b,c,d)

//ignore value using comma
let [,,,o] =arr
console.log("D is ="+o)

var a1 = 10
var b1 = 20
[a1,b1] = [b1,a1]
console.log(a1)
console.log(b1)

let words = 'My name is Mugundhan'.split(' ');
let [q,w,...r]=words
console.log(q,w,r)