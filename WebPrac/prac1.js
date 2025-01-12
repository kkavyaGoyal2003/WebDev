let start = Date.now();
function Sum(n) {
    var sum = 0;
    for(let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}

var ans1 = Sum(1000000);
console.log(ans1);
let end = Date.now();

console.log ((end - start) / 1000);
