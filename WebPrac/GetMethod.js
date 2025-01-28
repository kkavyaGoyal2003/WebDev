const express = require('express');
const app = express();
const port = 3000

function Message(str) {
    return str;
}

function handleFirstRequest(req, res) {
    let ans = Message("This is working!!");
    res.send(ans);
}

app.get('/message', handleFirstRequest);

function started() {
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);