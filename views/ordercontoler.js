const express= require('express');
const mongoose= require('mongoose');
const order= mongoose.model('order');

var router =expess.router();
mongoose.set('usefindandmodify',false);
router.get('/',(req,res)=>{
    res.render('menu');
});
router.get('/cart',(req,res)=>{res.render('cart');
});
router.get('/orders',(req,res)=>{res.render('orders');
});
router.get('/admin',(req,res)=>{order.find((err,docs)=>{
    if(!err){
        res.render("admin",{
            order:docs
        });
    }else {
        console.log('error in order:' +err);  
    }
    });
});
router.get('/order/:id',(req,res)=>{
    order.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.render("orders",{order:doc});
        }else{
            console.log('error findId:' +err);
        }
    });
});
router.get('/order/delete/:id',(req,res)=>{
    order.findByIdAndRemove(req.params.id,(err,doc)=>{
       if(!err){
           res.redirect('/admin');
     } else{
         console.log('error in delete:'+err);
       }
    });
});

router.post('/cart',(req,res)=>{
    insertorder(req,res);
});
router.post('/order',(req,res)=>{
    updateorder(req,res);
});

function updateorder(req,res){
    order.findOneAndUpdate({id:req.body._id},req.body,{new:true},(err,doc)=>{
        if(!err){
            res.redirect('/admin');
        }else{
            console.log('update error'+err);
        }
    });
}
function insertorder(req,res){
    var d=new date();
    var t=d.gettime();
    var counter=t;
    counter+=1;
    var order=new order();
    order.total=req.body.total;
    order.order=counter;
    order.save((err,doc)=>{
        if(!err) {
            console.log('order:'+order);
            res.redirect('/admin');
        }else{
            console.log('error insertorder:'+err);
        }
    });
}
module.exports=router;