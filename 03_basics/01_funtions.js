// function myname(){
//     console.log("V");
//     console.log("i");
//     console.log("s");
//     console.log("h");
//     console.log("a");
//     console.log("l");

// }
// myname()
// function AddtwoNUm(num1,num2){
   
//     console.log(num1+num2)
// } result ke bad koi bbhi console pri9nt nhi hotahe 
function AddtwoNUm(num1,num2){
   let result = num1+num2
   return result
    console.log("vishal ")
}

const result = AddtwoNUm(3,4)
// console.log("result is ", result );

function LOginUsermessage (username="bala"){
    if(!username){
        console.log("please enter the useername");
        return 
    }

    return `${username} just logged in `
}
// console.log((LOginUsermessage("")))
// console.log(LOginUsermessage("nikita"));


function calculatecardprize(val1,val2,...num1){
    return num1


}
// console.log(calculatecardprize(200,400,400));
const user = {
    username :"nik",
    price :199,
    village: "sundrel"
}  
function userhandlle(anyobject){
console.log(`username is ${anyobject.username} and price is${price}`)
}
console.log(user);

const newArray=[200,400,4000,500]
{
    function returnsecondvalue(getarray){
        return getarray[2]
    }
    console.log(returnsecondvalue(newArray));
}