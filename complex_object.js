//Simple Object
let user = {
    name : 'mugund',
    email : 'mugundsure@gmail.com',
    phone : '9994556635',
    laptop : {
        brand : 'hp',
        ram : 12,
        cpu : 'i3',
    }
}

console.log(user.email)
console.log(user.laptop.brand)

//find the length of brand
console.log(user.laptop.brand.length)

//find the properties available in Object
console.log(user.laptop?.brand?.length)

//Deleting a properties from Object
delete user.laptop
console.log(user)