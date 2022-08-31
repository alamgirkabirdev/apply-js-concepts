// const number = 4;
// const remainder = number % 2;
// console.log(remainder == 0)

const number = 145;
function isEven(number){
    if (number %2 == 0){
        return true;
    }
    return false;
}


const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
console.log('is my number even', isMyNumberEven);


const youNumber = 1899;
const isYouNumber =isEven(youNumber);
console.log( isYouNumber);



const herNumber = 2000;
const isHerNumber = isEven(herNumber);
console.log('is her number', isHerNumber);