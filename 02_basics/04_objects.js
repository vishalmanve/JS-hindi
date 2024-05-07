//  const tinderuser = new Object()
const tinderuser = {}
tinderuser.id = "123asv",
tinderuser.name = " bala",
tinderuser.IsLoggedIn = false;
// console.log(tinderuser);

const regularuser = {
    email:"bala@gmsil.com",
    userFullName :{
        fullname :"vishal",
        lastname : "manve"
    }
}
// console.log(regularuser.userFullName.lastname);
//  merge the object 
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
// const obj3 = {obj1,obj2};
// const obj3 = Object.assign({},obj1,obj2)
// spread operator use krege 
const obj3 ={...obj1,...obj2}
// console.log(obj3);

//  aray ke ander bhot sare objects 
const user =[
    {
        id:"1",
        email:"ba@gmail.com"
    }
    ,
    {
        id:"1",
        email:"ba@gmail.com"
    },
    {
        id:"1",
        email:"ba@gmail.com"
    }
    
]
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(tinderuser.hasOwnProperty ('IsLogged'));
