const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './pages');
app.use(express.static(__dirname + 'asset'));
app.use(express.static('./asset/images'));

app.get('/', function (request, response) {
    response.render("home");
});

app.get('/home', function (request, response) {
    response.render("home");
});

app.get('/new-post', function (request, response) {
    response.render("new-post");
});

app.get('/change-settings', function (request, response) {
    response.render("change-settings");
});

app.get('/login', function (request, response) {
    response.render('login');
});

app.get('/register', function (request, response) {
    response.render('register');
});

app.listen(3000, function () {
    console.log("Server started at port 3000");
})
