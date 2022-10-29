























const one = function(val:number | string):(number | string) {

    return val;
}

const two = function(val:any):any {

    return val;
}

// generics 
const three = function<Type>(val:Type):Type {

    return val;
}

// using intreface as generics and coustmize it to our needs
interface bottle {
    name:string;
    age:number;

}

const four = function<bottle>(val:bottle):bottle {

   return val
}

four({
    name:"jaya",
    age:24
})

// generics for arrays 

function getSearchProducts<T>(val:T[]):T{
    // the return type should be type of passed parameters
    return val[3]
}

// generics for arrow function

const getSearchProducts1 = <T,>(val:T[]):T => {
    // the return type should be type of passed parameters
    // comma is just to mention other developers that genercs t is syntax sugar
    return val[3]
}