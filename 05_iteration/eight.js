// using o0f reduce funtion

const mynum =[1,2,3]

const total = mynum.reduce((acc ,currval)=>{
    console.log( `acc :${acc} and currval : ${currval}`);
    return acc+currval
},0)
console.log(total);