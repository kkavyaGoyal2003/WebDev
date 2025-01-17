function arrayFromString(str) {

    var arr = str.split(" ");
    return arr;

} 
function sortAnArray(str) {
    var arr = arrayFromString(str);
    var sortArr = arr.sort();
    return sortArr;
}

function  arrayToString(str) {
    
    var str1 = sortAnArray(str);
    var str2 = str1.join(" ");

    return str2;
}
console.log("I own a car");
var ans = arrayFromString("I own a car");
var sol = arrayToString("I own a car");
console.log(ans);
console.log(sol);