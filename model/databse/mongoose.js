
const mongoose = require('mongoose');

function connect(){
  mongoose.connect('mongodb://localhost:27017/vocabulary', {useNewUrlParser: true, useUnifiedTopology: true});
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('database connected successfully');
  });
}

module.exports=connect;