const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json()) 
function Pattern(counter) {
    var result = "";
    for(let i = 0; i <= counter; i++) {
        let str = "";
        for(let j = 0; j < i; j++) {
            str = str + "*";
        }
        result += str + "<br>";
    }
    return result;
}

function handleRequest(req, res) {
    console.log(req.body);
    let counter = req.body.counter;
    if(counter < 101) {
       var str = Pattern(counter);
       res.send(str); 
    } else {
        res.status(404).send("Invalid Input");
    }
}
app.get('/pattern', handleRequest);

function started() {
    console.log(`Example app listening on port ${port}`);
}
app.listen(port, started);