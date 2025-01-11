var counter = 0;

function setClock(){
    console.clear();
    console.log(counter);
    counter = counter + 1;
}
setInterval(setClock, 3000);

var counter2 = 0;
for(let i = 0; i < 1000; i++) {
    counter2++;
}
console.log(counter2);