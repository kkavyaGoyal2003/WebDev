const express = require('express')
const app = express()
const port = 3000

function Sum (counter) {
    var sum = 0;
    for(let i = 1; i <= counter; i++) {
        sum = sum + i;
    }
    return sum;
}
app.get('/', (req, res) => {
    var ans = Sum(100);
    console.log(ans);
    var ans2 = "The sum is " + ans;
  res.send(ans2);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})