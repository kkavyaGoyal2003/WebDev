const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json()) 
function Sum (counter) {
    var sum = 0;
    for(let i = 1; i <= counter; i++) {
        sum = sum + i; 
    }
    return sum;
}

function handleRequest(req, res) {
    console.log(req.body);
    let counter = req.body.counter;
    if(counter < 101) {
        let ans = Sum(counter);
        res.send(ans.toString());
    } else {
       res.status(404).send("Invalid input") 
    }
    
}

app.get('/sum', handleRequest);

function started() {
    console.log(`Example app listening on port ${port}`);
}
app.listen(port,started);