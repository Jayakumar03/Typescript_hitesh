abstract class Takephoto{
 // object can"t created form abstract class. instaed they act as blue print for class
//  every method and variable should be implemented in extends class
    constructor (cameramode:boolean, filter:string){}
}

class Instagram extends Takephoto {
    // get the variables form abstract class
    constructor (
        cameramode:boolean,
        filter:string
    ){
        super(
            cameramode,filter
        )
    }

   
}