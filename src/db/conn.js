const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/stuapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(()=>{
      console.log("connection is successful");
  }).catch(()=>{
      console.log("no connection");
  })
