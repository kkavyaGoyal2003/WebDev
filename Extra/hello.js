console.log(2+3) ;
var user = {
  name : "kkavya" ,
  age : 21 
}
console.log(user) ;

var arr = ["kk" , "ak" , "sb" , "sg"] ;
for(var i = 0 ; i < arr.length ; i++) {
  console.log(arr[i]) ;
}

// function printinfo(info) {
//   for(var i = 0 ; i < info.length ; i++) {
//     console.log(info[i].name + " is " + info[i].age + " years old!!") ;
//   }
// }

// var info = [
//   {name:"Kkavya" , age:21} ,
//   {name:"Simran" , age:29} ,
// ]

// var info2 = [
//   {name:"aditya" , age:23} ,
//   {name:"akshit" , age:33} ,
// ]

// printinfo(info) ;
// console.log();
// printinfo(info2) ;


// console.log();
// console.log();


// function print( n) {
//   for (var i = 1 ; i < n+1 ; i++) {
//     console.log(i) ;
//   }
// }

// print(100) ;


function sum(ele1 , ele2) {
    return ele1 + ele2 ;
  }
  
  function sub(ele1 , ele2) {
    return ele1 - ele2 ;
  }
  
  function mul(ele1 , ele2) {
    return ele1 * ele2 ;
  }
  
  function div(ele1 , ele2) {
    return ele1 / ele2 ;
  }
  
  function doarth(ele1 , ele2 , arth) {
    return arth(ele1 , ele2) ;
  }
  
  var sum1 = doarth(10 , 20 , mul) ;
  console.log(sum1) ;


  
  
  