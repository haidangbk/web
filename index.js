const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('css'))

app.get('/', function(req, res) {
    res.render('index')
})

app.listen(port, function() {
    console.log("info", 'Server is running at port: ' + port)
})