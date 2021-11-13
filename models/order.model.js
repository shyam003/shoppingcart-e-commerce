const mongoose=require('mongoose');

var orderschema= new mongoose.Schema({
    order:{type:String},
    total:{type:String}
});

mangoose.model('order',orderschema);