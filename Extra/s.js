var counter = 0;

function setClock(){
    console.clear();
    console.log(counter);
    counter = counter + 1;
}
setInterval(setClock, 10);