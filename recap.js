
// variable
var time = '1.15pm';
var bookPrice = 125;
var isWhiteColor = false;
 
// array
var partners = ['sajid', 'alom', 'kabir', 'hasan'];
var elementCount = partners.length;
var kabirIndex = partners.indexOf('kabir');
partners.push('kajid');
partners.pop('hasan');


// conditionals
if(bookPrice < 500) {
    console.log('I will buy this book');
}
else {
    console.log('mama, kicho discoun den na, aponi na mama!');
}

// loop
var i = 0;
while(i <= 15){
    // do some work
    i++;
}

for(i = 0; i <= 20; i++){

}

// function
function isMoonUp (time){
    if(time >= 19 && time <= 5){
         return true;
    }
   return false;
}
var moonStatus = isMoonUp(21);

// let const

// value of variable could change
let price = 27;
price = 29;
price =30;

// value of variable will not change
const myName = 'lal e lal mr. helal';
console.log(myName);
// myName = 22;

// (class of 20-1. is end.)