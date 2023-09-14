express = require("express");
app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("We are Back!")
})

app.listen(port, () => {
    console.log(`Server is Running!!`);
})



