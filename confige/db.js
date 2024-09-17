const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Personal-Blog-App').then(()=>{
        console.log("Server Start......");
}).catch(err => console.log(err));

module.exports = mongoose;



