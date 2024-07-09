# projects related to dom 
## projects link 

[click]https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html


## projects 1
```javascript
console.log("js hindi ")
const  buttons =document.querySelectorAll('.button')
 const  body =document.querySelector("body")

 buttons.forEach(function (button){
   console.log(button);
   button.addEventListener('click' ,function (e){
     console.log(e);
     console.log(e.target);
     if(e.target.id === "grey"){
       body.style.backgroundColor =e.target.id
     }
     else if (e.target.id === "blue"){
       body.style.backgroundColor=e.target.id
     }
     else if (e.target.id === "yellow"){
      body.style.backgroundColor=e.target.id
    }
    else if (e.target.id === "white"){
      body.style.backgroundColor=e.target.id
    }
    else if (e.target.id === "orange"){
      body.style.backgroundColor=e.target.id
    }
  
  
   

   })
 });
```
## Project-2
## BMI 
```javascript
const form  = document.querySelector('form');
 form.addEventListener('submit', function(e){
   e.preventDefault();
  const height =  parseInt(document.querySelector('#height').value);
 const weight = parseInt(document.querySelector('#weight').value);
   const results = document.querySelector('#results');

    if(height === ''|| height < 0|| isNaN(height))
    {
      results.innerHTML =`please give the valid digit ${height}`;}
      // results.innerHTML= ` ${height}`;
     else if(weight === ''|| weight < 0|| isNaN(weight))
    {
        results.innerHTML =`please give the valid digit ${weight}`;}
        else{
        const bmi=  (weight/(height*height/1000)).toFixed(2);
        // ahow the results 
        results.innerHTML=`<span>${bmi}</span>`;
        }
    });
```


## Project3
```javascript
// const clock  = document.querySelector("#center");
const clock =  document.getElementById('clock');
 setInterval(function() {
   let date = new Date();
   clock.innerHTML = date.toLocaleTimeString();
  //  console.log(date.toLocaleDateString());
 },1000);
```


## Project4(number guessing)
```javascript
// const form  = document.querySelectorAll('form');
// const results  = documennt.querySelectorAll('results')
const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessfeild');
const guessslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhigh = document.querySelector('.lowOrHi');

```
## project 5(unlimited colors)
```javascript
//  generate the randome color

const randomColor = function () {
  const hex = '123456789ABCDEF';
  let Color = '#';
  for (let i = 0; i < 6; i++) {
    Color += hex[Math.floor(Math.random() * 16)];
  }
  return Color;
};

let intervalId;
const startchangingcolor = function(){
   if(!intervalId){
    intervalId= setInterval(changebgcolor,1000);
   }
  function changebgcolor(){
    document.body.style.backgroundColor = randomColor();
  }
};
const stopchangingcolor = function(){
  clearInterval(intervalId);
  intervalId= null;
};

// console.log(randomColor);
document.querySelector('#start').addEventListener('click',startchangingcolor);
document.querySelector('#stop').addEventListener('click',stopchangingcolor);


```

## project 6 (keyboard)
```javascript
// console.log('Project 5');\
const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class ='color'>     
  <table>
  <tr>   
  <th>key</th>
  <th>keycode</th>
  <th>Codes</th>
</tr>
<tr>
  <td>${e.key === ' ' ? 'space' : e.key}</td>
  <td>${e.keyCode}</td>
  <td>${e.codes}</td>
</tr>
</table>
</div>
  `;
});

```