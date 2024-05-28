// using for each loop

// const bala = ["js","cpp","java","node"]

// bala.forEach(function(val) {
//     console.log(val);
    
// });

// isme arrow funtion se bhi kr skte he 
// bala.forEach((val) => {
    // console.log(val);
    
// });

// function pritnme(val){
//     console.log(val);
// }


// bala.forEach((val,index,arr)=>{
//     console.log(val,index,arr);
// })

const village =[
    {
        village:"sundrel",
        dist :"dhar"
    },
    {
        village:"patvalavd",
        dist :"dhar"
    },
    {
        village:"bagdipura",
        dist :"dhar"
    }
]
village.forEach((val)=>{
    console.log(val.village);
})