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
 
 // Understanding and using arrow functions on the road
  // Manage a real Jobs Opening Recruit list
    const jobs = [
        {id:1, isActive:true ,name:'Senior Developer'},
        {id:2, isActive:true,name:'Devops Software Manager'},
        {id:3, isActive:false,name:'Software development Sheef'},
        {id:4, isActive:true,name:'UX/UI senior Designer'}
    ];
   // Using the arrow function over all his power with Objects filter properties
const activeJobs =jobs.filter(a => a.isActive) // filter returns all the occurrence
console.log('Lista de Trabajos activos:\n',activeJobs);


// Using objets map() property

let avaliableJobs = jobs.map((jb,index)=>{
    if(jb.isActive) return '<li>'+jb.name+'</li>';
} )

// Another way to do same is having use of the template for string using variables direct to the string
// Avobe are no problem's  bcause the next code  just override the 
 avaliableJobs = jobs.map((jb, index) => {
    if (jb.isActive) return `<li>${jb.name}</li>`;
 })

console.log(avaliableJobs);

const avaliable = document.getElementById('avaliable');
avaliable.innerHTML = avaliableJobs; 

// Objects destructuring

  const address = {
      street: 'Ave 25',
      apartmentNumber: '28239',
      city: 'Havana',
      country:'Cuba'
  }
  
  // to have independient variables from the object containing that info we can make it as old days 
  /*
  let street = address.street; // ----> one by one
  ...
  */
  
  // modern JavaScript help us with 
  const {street:st,apartmentNumber,city,country} = address;// let us use street against address.street and so on
   console.info('Get street values as st aliases: ' + st); // using aliases against full key, this : let us use st against the original street as key to get the value
     console.info('Apartment no:'+apartmentNumber);
     
     address.street = 'John Stanton';
      console.info('Modified address objetc:',st); // --> it will show old copy 
      console.info('Modified address objetc:',address.street); // ---> it will show updated value
      
// Spread Operaator
 const frst = [1,2,3];
 const sec  = ['a','b','c'];
   
    const joined = ['initialItem',...frst,'middleItem',...sec,'lastItem'];
    console.info('New array joined:',joined);
// new object to test spread Ops 
 const fr = {name: 'Konrad'}
 const snd = {job: 'IT Support'};
  const personalInfo = {...fr,...snd,location: 'Cuba'};
   console.info('Creating a new object personalInfo:', personalInfo);


// Using Classes of object and constructor spetial method
class Person {
    constructor(name){
        this.name = name; // init name property
    }
    
    
    // methods here ------------> setters
    setName(name){
        this.name = name;  
    }
    
    // methods here ------------> getters
    getName(){ 
        return this.name;
    }
    
    sayHello(someone) { 
                       console.log("Hello ", someone); 
                       };
}
     
     // -- instancing new people object init named 'Mosh'
     const people = new Person('Mosh') ;
        people.setName('Konrad'); // -- >> Re name the people obj. as 'Konrad'
         console.info('Renamed the person Mosh to :',people.getName());
         
// Using inheritage and classes 
   class Friend extends Person {
       constructor(name,friendship) // refactoring the constructor
       {
           super(name); // passing the args which belong to superclass
           // cath exact friend class attributes
           this.friendship = friendship;
           
       }
       getFriendship(){return this.friendship;}
       doParty(){console.log("We are doing a great party!!");};
       
       
   }

const afriend = new Friend('Andrew Tanembaun', 'Best friend.');
// a friend has no implemented this methods  or even the constructos... it tooks it from his father super class
console.info('The new friend name is:',afriend.getName());
afriend.sayHello('Konrad!!'); 
console.info('Geting friendship level:',afriend.getFriendship());

//----------------------------------------------------------------
//   Solviing  Js Chalenging Projects for school and Bgner
//   https://jsbeginners.com/javascript-projects-for-beginners/ 
//----------------------------------------------------------------

// Pusle one is change bg-color randomice with a button

class BgColor{
constructor(){
    this.red= this.randInteger();
    this.green = this.randInteger();
    this.blue = this.randInteger();
    
}

  // ---- Methods here ---
  randInteger(){return parseInt(Math.random()*255);}
  
  getBgColor(){return "rgba("+`${this.red},${this.green},${this.blue}`+")";  }

}

// -- Add an OnClick Listener to the button
document.getElementById('btn').onclick = function(){changeBg();}

// Called function to change colors from button and body background Randomly
function changeBg(){
    const bg = new BgColor();
    const btC = new BgColor();
     const bdy = document.getElementById('bd');
     const bt = document.getElementById('btn')
       bdy.style.backgroundColor = bg.getBgColor();
       bt.style.backgroundColor  = btC.getBgColor();
}
   


