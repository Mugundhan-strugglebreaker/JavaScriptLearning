class Person{
    constructor(name,tech){
        this.name = name;
        this.tech = tech
    }
    walk(){
        console.log("The Person can be to walk");
    }
}
let person = new Person('Mugundhan','JavaScript')
console.log(person);