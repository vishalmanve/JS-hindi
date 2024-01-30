// String interpolidation (``)backpics
const name="vishal"
const repo="50";
// console.log(name+repo+"");  //this is old method 
// new method of addtion
console.log(`hello my name is ${name} and my repo is ${repo}`);
// use of String objects 
const gameName= new String("vishhal-manve-bala");
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.sub);
console.log(gameName.charAt(3));

const newstring = gameName.substring(0,4);
console.log(newstring);


const newstringone="   hitsh   "
console.log(newstringone);
console.log(newstringone.trimEnd()); 
// trim space ko remove krne ke lite hota h 
const url="http://vishal.%20com";
console.log(url.replace('%20','-'))
console.log(url.includes('sundar'));
console.log(gameName.split('-'));
console.log(gameName.matchAll);




