// Function is also treated as Object in JavaScript
//This function is also called as Anonyms function
let add = function(num1,num2){
    return num1+num2;
}
let result = add(4,5)
console.log(result)

//assign the add into another object
let sum = add
result = sum(5,5)
console.log(result)

//let print what sum means
console.log(sum)