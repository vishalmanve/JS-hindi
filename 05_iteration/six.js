//  filter operation isme value return hoti he apn ko 
// jo ki foreach me nhi hoti he \


//  filter me agr scope {} lgadiya to hum return type to krna pdega 
// filter me true or false vala kam rhta he 


// let num = [1,2,3,4,5,6,7,8,9,10];
// const bala = num.filter((num)=> {
//    return num >5
// })

// new method 
// for each se bhi kr skte he hum 
// const mynum = []

// num.forEach((num)=>{
//     if(num>4)
//         {
//             mynum.push(num)
//         }
// })
// console.log(mynum);

const book =[
       { tittle:'book five',genre:'sceince',publish:1999,
        edition:2014},
        { tittle:'book five',genre:'physics',publish:2000,
        edition:2014},
        { tittle:'book five',genre:'physology',publish:2000,
        edition:2014},
        { tittle:'book five',genre:'physics',publish:2010,
        edition:2014},
        { tittle:'book five',genre:'sceince',publish:1967,
        edition:2014},
        { tittle:'book five',genre:'history ',publish:1845,
        edition:2014},    
];
//   let user = book.filter((bk) => { return bk.genre ==='science'} )
user = book.filter((bk ) =>{return  bk.publish >=2000
    && bk.genre === "physics" && bk.publish<=2000
})
  console.log(user);