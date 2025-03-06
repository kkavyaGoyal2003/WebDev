const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

// Middleware for email authentication
function authenticateEmail(req, res, next) 
{
    const { email } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!email || !emailREgex.test(email)) 
    {
        return res.status(400).send("Invalid or missing email. Please provide a valid email address");
    
    }
    next();
}
function Info() 
{
    return {
        status: " server is running ",
        time: new Date().toLocaleString(),
        message: "Welcome to the API"
    };
}

function getUserInfo(req, res)
{
    res.send("Please enter your user information");
}
function greetUser(req, res) {
    res.send("Hello, welcome to our server");
}
function handleFirstRequest(req, res)
{
    const userInfo = req.body;
    // if(Object.keys(userInfo).length == 0)
    // {
    //     res.send("No user Information recieved");
    // } else {
    //     res.send(`Received user info: ${JSON.stringify(userInfo)}`);
    // }
    res.send(`Received user info: ${JSON.stringify(userInfo)}`);
}
app.get('/user-info', getUserInfo);
app.get('/greet', greetUser);
app.post('/info', authenticateEmail, handleFirstRequest) ;

function started() 
{
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);