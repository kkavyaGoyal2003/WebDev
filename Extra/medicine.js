function medicine2Get() {
    console.log("Medicine 2 Recieved");
}

function medicine1Get() {
    console.log("Medicine 1 recieved");
    setTimeout(medicine2Get, 2000);
}
setTimeout(medicine1Get, 1000);