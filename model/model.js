const mongoose=require('mongoose');
const dataschema=new mongoose.Schema({
    word: { type: String, require:true},
    meaning: { type: String, require:true},
    sent1: { type: String, require:true},
    sent2: { type: String, require:true},
    sent3: { type: String, require:true},
    sent4: { type: String, require:false},
    sent5: { type: String, require:false}
});


module.exports=mongoose.model('vocab',dataschema);