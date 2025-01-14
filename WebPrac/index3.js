const express = require('express')
const app = express()
const port = 3000

function middleware(req, res, next) {
    console.log("from inside middleware" + req.headers.counter);
    next();
}
app.use(middleware);
function Sum (counter) {
    var sum = 0;
    for(let i = 1; i <= counter; i++) {
        sum = sum + i;
    }
    return sum;
}
function handleFirstRequest(req, res) {
    console.log(req.headers);
    var counter = req.headers.counter;
    var calc = Sum(counter);
    var answer = "The sum is "+ calc;
    res.send(answer);
}
app.post('/handleSum', handleFirstRequest)

function started() {
    console.log("Example app listening on port ${port}")
}

app.listen(port, started)