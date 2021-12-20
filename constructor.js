//Creating a Constructor which is nothing but a simple function 
//But recommended is Decalartion Function Name starting with captial letter
function User(name , tech){
    this.name = name;
    this.tech = tech;
    this.work = function(){
        console.log("Hello world")
    }
}

let user1 = new User('mugundhan','js')
let user2 = new User('meiyappan','Django')

console.log(user1)
user1.work()