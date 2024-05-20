// IMMEDIATELY INVOKED FUNTIONS EXPRESSION (IIFE)

(function chaai(){
    // NAMED IFFE 
    console.log("bala");
}());
// global variable ke  pollution ko frree krne ke liye iife funtn use krte he hum 

// un named iife
((name)=>{
    console.log(`jay ho ${name}`);
})("vishal")