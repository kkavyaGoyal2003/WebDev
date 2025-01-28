const express = require('express');
const app = express();
const port = 3000

// function middleware(req, res, next) {
//     console.log("Inside middleware!!" + req.headers.counter);
//     next();
// }

// app.use(middleware);
function Message(str) {
    return str;
}

function handleFirstRequest(req, res) {
    let ans = Message("This is working!!");
    res.send(ans);
}

// app.get('/message', handleFirstRequest);
app.post('/message', handleFirstRequest);

function started() {
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);