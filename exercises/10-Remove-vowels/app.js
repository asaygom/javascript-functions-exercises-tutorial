const rapid = (myString) => {
    // Your code goes here
    
   let myNewString = "";
    for (let i=0;i<myString.length;i++){
        myNewString = myNewString + myString.charAt(i).replace(/[aeiou]/i,"");
    } 
   let myNewerString = myNewString.toUpperCase();
    return myNewerString
};

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
