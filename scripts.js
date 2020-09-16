// Created the functiion
function sayHello(){
    
    for( let i = 0; i <5 ;i++) {
        const m = 2;
        console.log(i+m)  ;
        
    } 
    // ---- Commented to erase these errors ----
   // console.log(i)  // here blow an error because of scope 
   // console.log(m); // here blow an error because of scope 
}


// call the function
sayHello();


// create a person object with twoe methods
 const person = {
     name:'Konrad',
     walk() {
         console.log(this); 
     },
     talk(){},
     
 }
 
 person.name = 'Pedro';
 person.talk();
 let targetProperty = 'name';
 person[targetProperty] = 'Pablo'; // It worked fine but I dislike it
 
 // Testing the this js keyword
 person.walk(); // With the console.log to a simple this will return a reference to current object to the console


 // Understandig Arrow function
   
   // old way function creation as object
      let squareOld = function (n){
          return n*n;
      }
      
      // Modern Js implements arrow functions hommiting function keyword as follows
      let squareModern = (n)=>{ // the parentesis here are for more than one args
          return n*n;
      }
      
      // more modern users usually have 
      let squareRenewed = n => {return n*n ; }
      
      // even more amasing having no args just type
       let noArgs = ()=>{
           console.log('No args function object declaring with arrow function');
       }
      
      
   const square = number => {
       return number * number;
   }
 square(3);
 