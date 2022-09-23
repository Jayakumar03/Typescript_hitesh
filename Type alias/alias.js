// syntax for declaring
function checker(user) {
    // do some work with arguments
    //
}
// typescript will check every method or variable decalred in the object user is present ir not
checker({ name: "jayakumar", email: "jaimech@.com", isActive: true });
// we can  use type alias as to specfic the return value for function as well
function checker1(user) {
    // now function has return all methods and variable used in "user"
    return {
        name: "",
        email: "",
        isActive: true
    };
}
//  another use case of type alias
var myObj = {
    name: "",
    email: "",
    isActive: true
};
var myExample = {
    name: "",
    phone_no: 98
};
var myExampleForRandomly = {
    name: ""
};
myExample.name = "";
// error because once declared we cannot change redaonly value
