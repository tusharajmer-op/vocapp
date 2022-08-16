const express= require('express');
const route= require('./routes/route');
const database= require('./databse/mongoose')
const ejs= require('ejs');
const app= express();
app.use(express.static('public'));
app.set('view engine','ejs');
app.use(route);
const port=3000;

app.listen(port,(req,res)=>{
    console.log(`app started successfully on port ${port}`);
})

database();