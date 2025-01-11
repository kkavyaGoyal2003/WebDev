function promiseBody(resolve) {
    // setTimeout(resolve, 10000);
}
function medicine() {
    var ans = new Promise (promiseBody);
    return ans;
}
var med = medicine();
console.log(Object.keys(med));
console.log(med.then);
function print () {
    console.log("JavaDcript");
}
med.then(print);

// function a() {
//     console.log("Hi");
// }
// var kkavya = {
//     name:a
// }
// kkavya.a();
 