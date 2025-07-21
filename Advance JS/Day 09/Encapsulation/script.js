//Abstractions

class User{
    #password //private
    constructor(un,pass){
        this.username = un
        this.#password = pass
    }
    changePassword(newPass){
        if(newPass == "" || newPass.length<8){
            alert("Password Cant be Empty/Less than 8")
        }
        this.#password = newPass
    }
}

let user1 = new User("@satyamraj","asksatyam!")
console.log(user1)
user1.changePassword('satyam123')
//user1.#password = 12334 cant do this 
console.log(user1)






//Methods Overridding - Child can implement the functions of the parent class in there own.

class Parent{
    constructor(n,p){
        this.name =n 
        this.property = p 

    }
    greet(){
        console.log("Namaste")
    }
}

class Child extends Parent{
    constructor(n,p,c){
        super(n,p)
        this.cycle = c
    }
    greet(){
        console.log("Hello")
    }
}

let child1 = new Child("Suresh",0,"Bicycle")
console.log(child1)

child1.greet()  //here methods get overridded 