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


//for in loop
for(let key in user){
    console.log(key, user[key])
}

// nested loop
for(let key in user){
    if(typeof user[key]==='object'){
        for(let key2 in user[key]){
            console.log(key2,user[key][key2])
        }
    }else{
        console.log(key,user[key])
    }
}