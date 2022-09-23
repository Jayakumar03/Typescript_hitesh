//  type alias is used to reduce error while passing value for a function or n number function or any other
// we can create our custom type or annotations as well using type
type myString = string;

// custom type
type example = {
    name:myString,
    email:myString,
    isActive:myString
}


type User = {
    name:string,
    email:string,
    isActive:boolean
}

// syntax for declaring
function checker(user:User) {

    // do some work with arguments
    //

}

// typescript will check every method or variable decalred in the object user is present ir not
checker({name:"jayakumar",email:"jaimech@.com",isActive:true} )



// we can  use type alias as to specfic the return value for function as well

function checker1(user:User):User {
    // now function has return all methods and variable used in "user"
    return{
        name:"",
        email:"",
        isActive:true
    }
}

//  another use case of type alias
const myObj:User = {
    name:"",
    email:"",
    isActive:true
}


// chain of type 
// we are chain the types with one another and forming new type

type cardDetails ={
    cardName:string
}


type cardNumber ={
    cardNUmber:number
}



type wholeCard = cardDetails & cardNumber & {
    cardExpire:number
}



// readonly and randomly

// use case of readonly: once declared it will not allow us to change the value

type exampleOfReadOnly = {
   readonly name:string,
    phone_no?:number
    // randomly is "?" it is used an option, if the user the gives the value it ok, or no problem
}

const myExample: exampleOfReadOnly = {
    name:"",
    phone_no:98,
}

const myExampleForRandomly: exampleOfReadOnly = {
    name:"",
    // no error because of ?
}

myExample.name=""
// error because once declared we cannot change redaonly value


