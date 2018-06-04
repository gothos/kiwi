const express = require('express');

const app = express();
const port = 9000;

require('./routes')(app);

app.listen(port, () => {
    console.log("T9 convertion app listening on port " + port)
})


module.exports = app; // for testing