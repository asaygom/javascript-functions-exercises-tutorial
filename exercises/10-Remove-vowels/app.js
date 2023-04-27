const rapid = (myString) => {
    // Your code goes here
    let myNewString;
    for (let i=0;i<myString.length;i++){
        myNewString = myString.length(i).replace(/[aeiou]/i,"");
    }
   // let myNewString = myString.replace(/[aeiou]/gi,"");
   let myNewerString = myNewString.toUpperCase();
    return myNewerString
};

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
