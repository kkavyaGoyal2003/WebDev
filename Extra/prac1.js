var user = {
    name: "kkavya",
    age: 21,
    isLegalAgeToDrive: function() {
        if(user.age < 21) {
            return false;
        } else {
            return true;
        }
    }
}
console.log(user);
console.log(user.isLegalAgeToDrive());