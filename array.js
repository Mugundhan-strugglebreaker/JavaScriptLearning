//decalaring array
let arr1 = new Array()
let arr2 = [];
let arr3 = [5,7,8];

//push an value to the array
arr1.push(4)
arr2.push(10)

console.log(arr1,arr2,arr3)

//finding the length of the array
console.log(arr1.length,arr2.length,arr3.length)

//Accessing an element from using index
console.log(arr3[1])

//We can also different types in array
let arr = ['Mugundhan',3,{tech:'Full Stack Developer'},function(){
    console.log("Oo!!there is a function in array")
}]
console.log(arr)
arr[3]()


//Array Function
arr = [1,2,3];

//adding a value to array
//at last
arr.push(4)
//at first
arr.unshift(0)
console.log(arr)

//removing a value from array
//at last
arr.pop()
//at first
arr.shift()
console.log(arr)

//at middle  Splice Method (index of the element to be removed , from removing index how many elements are going to be removed)
arr.splice(1,1)
console.log(arr)