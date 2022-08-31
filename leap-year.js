function isLeapYear(year){
    if((year %4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        return true;
    }
    else{
        return false;
    }
}

// // program to check leap year
// function checkLeapYear(year) {

//     //three conditions to find out the leap year
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }

// // take input
// const year = prompt('Enter a year:' );

// checkLeapYear(year);




const bYear = 1988;
const isbYearLeapYear = isLeapYear(bYear);
console.log(isbYearLeapYear);

const joniYear = 1989;
const isJoniYearLeapYear = isLeapYear(joniYear);
console.log(isJoniYearLeapYear);

const sakiYear = 1992;
const isSakiYearLeapYear = isLeapYear(sakiYear);
console.log(isSakiYearLeapYear);

const naniYear = 2100;
const isNaniYearLeapYear = isLeapYear(naniYear);
console.log(isNaniYearLeapYear);