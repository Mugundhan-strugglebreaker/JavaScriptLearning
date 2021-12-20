let arr = [1,2,3,4,5]

let result = arr.filter( n => n%2===0).map( n => n*2).reduce( (a,b)=> a+b)

console.log(result)


/*
filter used for applying condition to filter the array
map -  used for replacing value at a specific condition
reduce - reduce to single based on condition
*/