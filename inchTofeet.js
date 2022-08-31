
function inchTofeet(inches){
    var feet = inches/12;
    return feet;
}


var myInches = 132;
var feet = inchTofeet(myInches);
console.log(feet);

var dadiInch = 144;
var feet = inchTofeet(dadiInch);
console.log(feet);

var nanaInch = 156;
var feet = inchTofeet(nanaInch);
console.log(feet);

var baiInch = 180;
var feet = inchTofeet(baiInch);
console.log(feet);

// mile to kelometers

function mileToKm (miles){
    var km = miles * 1.60934;
    return km;
}
 var khaloMiles = 10;
 var km = mileToKm(khaloMiles);
 console.log(km);

 var akmiles = 120;
 var km = mileToKm(akmiles);
 console.log(km);

 var hmiles = 150;
 var km = mileToKm(hmiles);
 console.log(km);


 function kgToGram(kg){
    var gram = kg * 1000;
    return gram;
 }

 var tasnimKg = 10;
 var gram = kgToGram(tasnimKg);
 console.log(gram);

 var niraKm = 20;
 var gram = kgToGram(niraKm);
 console.log(gram);

 var danKm = 40;
 var gram = kgToGram(danKm);
 console.log(gram);

 function kmToFeet(km){
    var feet = km * 3280.84;
    return feet;
 }

 var kokoKm = 3;
 var feet = kmToFeet(kokoKm);
 console.log(feet);