const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './pages');

// TO DISPLAY HOMEPAGE
app.get('/', function (request, response) {
    response.render("home");
});

// TO LOG SERVER START
app.listen(3000, function () {
    console.log("Server started at port 3000");
})