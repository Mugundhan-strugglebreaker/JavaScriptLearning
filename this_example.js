//Object with Methods

let laptop = {
    brand : 'hp',
    cpu : 'i3',
    ram : 4,
    fun : function(){
        console.log(this.cpu,this.brand,this.ram)
    }
}
laptop.fun()


//compare two objects
let student1 = {
    name : 'ABC',
    marks : 470,
    compare : function(other){
        if(this.marks > other.marks){
            console.log(this)
        }else{
            console.log(other)
        }
    }
}
let student2 = {
    name : 'XYZ',
    marks : 450,
    compare : function(other){
        if(this.marks > other.marks){
            console.log(this)
        }else{
            console.log(other)
        }
    }
}
student1.compare(student2)
