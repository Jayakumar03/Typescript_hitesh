const User:{
    name:string,
    ispaid:boolean
    // explict telling typescript that user should hold these properties.
} = {
    name:"jayakumar",
    ispaid:true
}
console.log(User.name);
console.log(User.ispaid);


function createUser(name:string,ispaid:boolean) {
    
}

createUser(User.name, User.ispaid)

// how tell an fucntion or method i need object as return
function name():{
    // this "{}"" specific that return value is object
    // we pass value or method or certain properties as well.
    name:"jayakumar", ispaid:true
} {
    return true;
    // error because we didn't return as specified object.
    
}
export{}