// union is used to combine one or more datatype for us
// union is declared using "|"

let example: string | number = 33

example = "33"
example = 33

// we can use union in type as well

type student = {
    studentName:string,
    id:number
}

type teacher = {
    teacherName:string,
    id:number
}


const user: student|teacher = {
    studentName:'',
    id:33
}

// or
const user1: student|teacher = {
    teacherName:'',
    id:33
}

function getDbId(id:number|string) {
    // what happens if the user pass an number

    id.toUppercase() 

    // it won't work because it coud also be an string
    // so it's better to check

    switch (typeof id ) {
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

const data:number [] = [1,2,3,4]
const data1:string [] = ["1","2","3","4"]

// syntax for using union in array
const data2:(string  | number ) [] = ["1","2","3","4", 1,2 ,3 ]

const data3:(string  | number | boolean) [] = ["1","2","3","4", 1,2 ,3 ]


// literal type
let pi:3.14 = 3.14
// now pi only allowed to have value 3.14


