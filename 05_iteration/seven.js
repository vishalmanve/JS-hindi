const mynumber = [1,2,3,4,5,6,7,8,9,10]

// const nums = mynumber.map((num)=>{ return num+10})
// console.log(nums);

// chaining means do tin method ek sath use kr skte he apm 

const newnumber = mynumber.map((num) => num * 10)
                          .map((num)=> num +1)
                          .filter((num)=> num>=40)
                          .filter((num)=>num/3)

console.log(`the result is ${newnumber}`)