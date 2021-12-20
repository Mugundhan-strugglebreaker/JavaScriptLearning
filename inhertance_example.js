class Person{
    constructor(name){
        this.name = name;
    }
    walk(){
        console.log("Person can walk");
    }
}
class Student extends Person{
    constructor(name,degree){
        super(name)
        this.degree = degree
    }
    fun(){
        console.log("I am a Student");
    }
}

let student = new Student('Mugundhan','BTECH(Information Technology)')
console.log(student);