const express = require('express')
const app = express()
const port = 3000

function Sum (counter) {
    var sum = 0;
    for(let i = 1; i <= counter; i++) {
        sum = sum + i;
    }
    return sum;
}

function handleFirstRequest(req, res) {
    var counter = req.query.counter;
    var calc = Sum(counter);
    var answer = "The sum is "+ calc;
    res.send(answer);
}
function createUser(req, res) {
    // You can access the request body (if sent as JSON or URL encoded)
    console.log(req.body);
    res.send("hello");
}

app.get('/handleSum', handleFirstRequest)
app.post('/createUser', createUser);

function started() {
    console.log("Example app listening on port ${port}")
}

app.listen(port, started)