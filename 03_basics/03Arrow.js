const user={
    username: "vishal",
    phone:"999",

    welcome : function(){
        // this keyword current contest  ki hat krta he 
        // console.log(`${this.username},welcomne to user`);
        // console.log(this);
        // BROWser ke ander jo update he vo window update he 
    }
}
// user.welcome();
// console.log(this);

function chai() {
    // fution ke andr this  use nhi hota he 
    let username="bvihsdsl"
    // console.log(this.username);
    
}
chai()
// bassic arroe funtion
// {}isme return likhna pdta he  but ()isme nhu or  ye react me  bhot use hota he 
// const addtwo = (num1,num2)=>{
//     return num1+num2
    
// implishit arr0w fuction isme hum man lete he jo ek line me statement deta he  
const addtwo = (num1,num2)=> (num1+num2)    
  

console.log(addtwo(3,7));