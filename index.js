// const fs = require("fs");
// function callbackFn(err, data) {
//     console.log(data);
// }

// fs.readFile("a.txt", "utf-8", callbackFn);

// const express = require("express");

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function Sum (counter) {
    var sum = 0;
    for(let i = 1; i <= counter; i++) {
        sum = sum + i;
    }
    return sum;
}
var CalculateSum = Sum(10);
console.log(CalculateSum);