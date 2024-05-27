// truthy vaLUE ME asume kiya  jata he ki manliya esa 
// const usermail = [2,3]
// if(usermail){
// console.log("mail is right ");
// }else{
//     console.log("emnail is wrong");
// }


// kon kon si trutht and falsy value he check krte he 
// falsy value 
// false ,0,-0,BigInt 0n,"",null,undefined,NaN


// truthy values

// "0" = string ke under ager value heto vo truthy value he 
// "false","",[] , {} , funtion(){}

// if(usermail.length === 0){
//     console.log("array is empty");
// // }


// const emptyobj ={}
// if(Object.keys(emptyobj).length===0){
//     ;console.log("array is empty");
// }



// Nullish coalescing operator (??)

// let val1;
// val1 = 10??4;
// specialy ye null or unndefined ke liye bna hua he 
// val1 = null?? 10;
// val1 = undefined??10??null
// console.log(val1);

// 

// nullish or  ternary operator dono alag alag he isme confus nhi hon HE 

// TERNARY OPERATOR 

// condition ? true: false
const bala = 100;
bala<=80?console.log("sai bat he "):console.log("galt bat he ");