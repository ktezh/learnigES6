// Created the functiion
function sayHello(){
    
    for( let i = 0; i <5 ;i++) {
        const m = 2;
        console.log(i+m)  ;
        
    } 
    console.log(i)  // here blow an error because of scope 
    console.log(m); // here blow an error because of scope 
}


// call the function
sayHello();