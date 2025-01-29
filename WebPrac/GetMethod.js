const express = require('express');
const app = express();
const port = 3000

function middleware2(req, res, next) {
    const strheader = req.headers.str || "Nod headers available";
    res.send("Error in middleware");
    console.log("Inside middleware!!" + strheader);
}
app.use(middleware2);

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