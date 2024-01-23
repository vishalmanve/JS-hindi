// // there are two types of data types primtuve and non primitive
// call by value
/*
string ,null ,undefined,boolean,number,bignumber,symbol
REFRENCE TYPES NON PRIMITIVE
(arrays,objects,functions)
note\
const outside temp=null;
let usermail;//undefined\
const id=symbol(1,2,3,4);
const anotherId =symbol(12,3);
console.log(Id===anotherId);
const bignumber=123343456n;
// NON PRIMITIVE
const heros=("ram","lakshamn"),"rudra")
object {
    name:"vishal";
    age:23;
    functions(){
        const myfunc=function()
        {
            console.log("hello word");
        }
    }
}
##############################################################
Memory type 
stack =give you copy
heap=originl value ka refrenvce milta he 
*/
let user='vishal@gmail.com';
let anotheruser =user;
anotheruser='bala@manve'
console.log(anotheruser);
let userone={
    email:'rajvir',
    upi:'proxyypl'
}

let usertwo=userone ;
usertwo.email='ramjikijay';
console.log(userone.email);
console.log(usertwo.email);  
