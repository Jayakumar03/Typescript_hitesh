
const user:(string | number)[] = [23, "jayakumar" ]
// if we are using union values can be assigned in any order

// but using tuples values will be assigned in the same order as tuples
const user1:[string , number] = ["jayakumar", 23 ]



// main concern of tuples is it will allow array methods to used
const user2:[string , number] = [23,"jayakumar" ]
user.push("hi")

