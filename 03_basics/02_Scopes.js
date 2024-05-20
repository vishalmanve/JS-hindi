// let a = 400;
if(true)
    // block scope hota he{}iske andar or baki global scope hota he
{ 
      let a=10;
      const b = 20
    // console.log("inner loop",a)
}
// console.log(a)
// console.log(b)
// console.log(c)

//  isko hum closer bhi bolte he jisse child parent class ko acces kr skta h but parent nhi     
function one(){
    const username="vishal"
    console.log(username);

    function two(){
        const village= " sundrel";
    }
    // console.log(village);

    two()
}
// one();

if(true){
    const value = "vishal"
    if(value === "vishal"){
        const website="bala"
        // console.log(value);
    }
    // console.log(website);
}
// console.log(value);


// ++++++++++++++++intresting chij++++++++++++++++++++++++

function Addone(num) 
{
    return num+3
}
// console.log(Addone(5))
const addtwo = function (num){
    return addtwo+3
}
addtwo(4)