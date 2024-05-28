// for of loop

// ["","","",]
// [{},{},{}]

const bala =[1,2,3,4,5];

for (const num of bala) 
{
// console.log(num);    
}

const greetings ="hello  world "
for (const greet  of greetings) {
    // console.log(`lijiye bhaiya ${greet}`);
    
}


// MAPS IN JAVASCRIPT
//  ye unique world ke liye hota he isme repeated value mhi op deta he 

const map = new Map()
map.set("IN" , "INDIA")
map.set("USA","unoited states of america")
map.set("FR","FREANCE ")

// console.log(map);    

for (const [keys,value] of map) {
console.log( keys );
}
