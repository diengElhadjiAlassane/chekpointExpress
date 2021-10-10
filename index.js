//Server with ExpressJs
const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.set('views','./views');

const myLogger = function (req, res, next) {
   console.log("A new request received at " + Date.now());
    next();
 }
 
 app.use(myLogger);
 
 app.get('/', function (req, res) {
   res.send('Site non accessible!')
   
 })

app.get('/Contact', function(req, res){
   res.render('Contact');
});
app.get('/Home', function(req, res){
   res.render('Home');
});
app.get('/Services', function(req, res){
   res.render('Services');
});
app.listen(3001);


