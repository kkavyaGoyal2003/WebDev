const express = require('express');
const app = express();
const port = 3000

function middleware1(req, res, next){
    console.log("from inside middleware" + req.headers.counter);
    res.send("Error in middleware");
    next();
}
app.use(middleware1);
function Pattern(num) {
    var result = "";
    for(let i = 1; i <= num; i++) {
        let str = "";
        for(let j = num; j >= i; j--) {
            str = str + "*";
        }
        result += str + "<br>";
    }
    return result;
}

function handleFirstRequest(req, res) {
    var counter = req.query.counter;
    var str = Pattern(counter);
    res.send(str);
}

app.get('/', handleFirstRequest);

function started() {
    console.log(`Example app listening on port ${port}`);
}
app.listen(port,started);