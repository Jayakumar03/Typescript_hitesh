console.log("hello world")

let user = {
    name:"jayakumar",
    age:23
}

console.log(user.name);


// how to assign the type 
let myname = "hello" 

// typescript is does not support camelcase and it's better to use variable names in lowercase
let mynum = 25


// how to declare function

 function myfunction(num:string) {
     // if you dont specific type function switch to deflaut any 
     // so use anntotion to furture proof

    //  num.toUpperCase()

      //return number // if type as explcit mentioned then return value is must
    //  after bracket it will check thereturn value also to the anatotion 
 }

// myfunction(10)
const value = "hi"
console.log(value)

// ANOTHER EXAMPLE OF TYPESCRIPT FUNCTION USE MAP

const heros =["thor","valkeriye","zues-wife"]
// const heros =[1,2,3] tyepscript can 


heros.map((hero :string) => {
     console.log(`hero is ${hero} `);
     
})


function consoleHandle (errmsg:string):void {
    // void is used to explcit tell function with no return value
}


function handlError (errmsg:string): never {
    // never is used to explcit tell function which has no observer value 
       // The never type represents values which are never observed. In a return type, 
       //this means that the function throws an exception or terminates execution of the program.
       //never also appears when TypeScript determines there’s nothing left in a union.
    throw new Error(errmsg)
}







// if an error occurs an you need it to stop use export{}
 export{}