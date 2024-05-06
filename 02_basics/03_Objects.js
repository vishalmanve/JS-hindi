const mysym = Symbol("key1")
const JSvar={
    name : "vishal",
    age : 20,
    [mysym] : "mykey1",
    email:" manvevishal09@gmail.com",
    village :" sundrel"
}

// console.log(JSvar.age);
// console.log(JSvar.name);
// console.log( typeof JSvar[mysym]);
// JSvar.email = "bala234@gmail.com"
// Object.freeze(JSvar)
// console.log(JSvar);
JSvar.bala= function(){
    console.log("hello guys ");
}
JSvar.bala2= function(){
    console.log(`vishal manve,${this.name}`)
}
console.log(JSvar.bala());
console.log(JSvar.bala2());