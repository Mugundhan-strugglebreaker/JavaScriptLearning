// function with three paramaters
function add(num1,num2,num3){
    return num1+num2+num3;
}
console.log(add(2,3,4))

// function with 3 paramter but passing 2 arguments only
// gives undefined
function add1(num1,num2,num3){
    console.log(num1,num2,num3);
    return num1 + num2 + num3
}
console.log(add1(1,2))

// function with 3 paramter but passing 2 arguments only but set one to defalut 
// gives output
// Note : the defalut values assignment is assigned only if argument is not passed
function add2(num1,num2,num3=3){
    console.log(num1,num2,num3);
    return num1 + num2 + num3
}
console.log(add2(1,2))