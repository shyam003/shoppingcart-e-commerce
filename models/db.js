const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/ecommerceorders',{useNewlUrlParser:true},(err)
=>{
    if(!err){
        console.log('mongodb connected');
    }else{
        console.log('error: '+err);
    }
});
require('./order.model');