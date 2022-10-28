class User{
    // if the user decided to extends class user then all the methods and variable are passes.
    // but private will not be passed. prvate is only accessible inside class

    private name : string = "jaya";
    email : string
    constructor(email:string){
        email:this.email;
    }
    // getters and setters for public 

    get getEmailId():string{
        return this.email
    }

    // getters and setters for private
    get getName():string {
        return this.name

    }

    set setName(name:string){
        this.name = name;
    }
    
    private courseCount = 3;
    protected courseCount1 = 3;


}

class subUser extends User{
    // everything inside the class user is aviable excepts private variable and methods
    // to overcome it protected is used
    // protected allow to pass the variable and methods. but we cannot access it outside class.
  
    isCourseCount():number{
        return this.courseCount;
        // error due to private
    }
     
    isCourseCount1():number{
        return this.courseCount1;
    }

}

const mine = new User("j@gmail.com");
// User.name = "kumar" because of private keyword