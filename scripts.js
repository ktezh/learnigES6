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
     talk(){},
     walk(){}
 }
 
 person.name = 'Pedro';
 person.talk();
 let targetProperty = 'name';
 person[targetProperty] = 'Pablo'; // It worked fine but I dislike it