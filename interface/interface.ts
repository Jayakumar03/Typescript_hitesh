// just like alias interface is loose used 

interface user  {
    id : number,
    emailId : string,
    googleId ? : string,
    startrail (): string
}

const me:user ={id:33, emailId:"h@h.com", 

startrail : () => {
    //because of interface return should be in string
    return"hello"
}
}