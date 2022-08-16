const router = require('express').Router();
const bodyparser = require('body-parser');
const { urlencoded } = require('express');
const path = require('path');
const mod = require('../model/model')

var avi=bodyparser.json({type:'application/json',strict:false})

way= path.join(__dirname,'../','public','home.html')
router.get('/' ,(req,res)=>{
    res.render('home');
})
router.get('/Dictionary',(req,res)=>{
    res.render('yourProgress');
})
router.get('/view' ,(req,res)=>{
    res.render('view');
})
router.post('/add',avi,async(req,res)=>{
    
    const mongo = new mod({
        word: req.body.word,
        meaning: req.body.meaning,
        sent1: req.body.sentance1,
        sent2: req.body.sentance2,
        sent3: req.body.sentance3, 
        sent4: req.body.sentance4,
        sent5: req.body.sentance5
    });
    const resp = await mongo.save().then(console.log('data saved to database'));
    
    
    


})

router.post('/find', avi,async(req,res)=>{
    // console.log(req.body)
    try{
        const file= await mod.findOne({word: req.body.word})
            if(!file){
                console.log("no such word in you vocabulary")
                res.send({"error":"500"});

            }
            else{
                console.log(file);
                res.json(file)
            }

        }
    catch(error){
        res.send(error);
    }
    
})

module.exports=router;
