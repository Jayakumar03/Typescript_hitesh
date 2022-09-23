// union is used to combine one or more datatype for us
// union is declared using "|"
var example = 33;
example = "33";
example = 33;
var user = {
    studentName: '',
    id: 33
};
// or
var user1 = {
    teacherName: '',
    id: 33
};
function getDbId(id) {
    // what happens if the user pass an number
    // id.toUppercase() 
    // it won't work because it coud also be an string
    // so it's better to check
    switch (typeof id) {
        case "number":
            //excute this here
            break;
        case "string":
            //excute this here
            break;
        default:
            break;
    }
}
// array
var data = [1, 2, 3, 4];
var data1 = ["1", "2", "3", "4"];
// syntax for using union in array
var data2 = ["1", "2", "3", "4", 1, 2, 3];
var data3 = ["1", "2", "3", "4", 1, 2, 3];
// literal type
var pi = 3.14;
// now pi only allowed to have value 3.14
