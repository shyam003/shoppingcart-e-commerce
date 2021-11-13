const { json } = require("body-parser");

var products=[];
var cartitems=[];
var cart_n=document.getElementById('cart_n');
var fruitDiv=document.getElementById('fruitDiv');
var juiceDiv=document.getElementById('juiceDiv');
var saladDiv=document.getElementById('saladDiv');

var fruit=[
    {name:'APPLE' ,price:1},
    {name:'orange' ,price:1},
    {name:'cherry',price:1},
    {name:'strawberry',price:1},
    {name:'kiwi',price:1},
    {name:'banana',price:1},
];

var JUICE=[
    {name:'juice #1',price:10},
    {name:'juice #2',price:10},
    {name:'juice #3',price:10},
];

var SALAD=[
    {name:'salad #1',price:10},
    {name:'salad #2',price:10},
    {name:'salad #3',price:10},
]; 

function htmlfruitproduct(con){
   // let url ='../img'/fruits/fruit${con}.jpeg;
    let btn= 'btnfruit${con}';
    return`
        <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                 <img class="card-img-top" style="${url}" alt="card image cap"></img>
                <div class="card-body">
                     <i style ="color:orange;" class="fa fa-star"></i>
                     <i style ="color:orange;" class="fa fa-star"></i>
                     <i style ="color:orange;" class="fa fa-star"></i>
                     <i style ="color:orange;" class="fa fa-star"></i>
                     <p class="card-text">${FRUIT[con-1]}.name</p>
                     <p class="card-text">price:${FRUIT[con-1].price}.00</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" onclick="cart2"('${FRUIT[con-1],name}','${FRUIT[con-1].price}','${url}','${con}','${btn}')"
                                class="btn btn-sm btn-outline-secondary"><a style="color:inherit;" href="/cart">BUY</a></button>
                                 
                                <button id="$(btn)" type="button" onclick="cart('${FRUIT[con-1].name},'${FRUIT[con-1].price}','${url}','$(con)','${btn}')"class="btn btn-sm btn-outline-secondary">add to cart</button>             
                             </div>
                             <small class="text-muted">Free shipping</small>
                     
                         
                         
                          </div>
                     </div>
                </div>
            </div>    
        </div>`
}
function htmlfruitproduct(con){
    // let url ='../img'/fruits/fruit${con}.jpeg;
     let btn= 'btnfruit${con}';
     return`
         <div class="col-md-4">
             <div class="card mb-4 shadow-sm">
                  <img class="card-img-top" style="height:16rem;" src="${url}" alt="card image cap"></img>
                 <div class="card-body">
                      <i style ="color:orange;" class="fa fa-star"></i>
                      <i style ="color:orange;" class="fa fa-star"></i>
                      <i style ="color:orange;" class="fa fa-star"></i>
                      <i style ="color:orange;" class="fa fa-star"></i>
                      <i style ="color:orange;" class="fa fa-star"></i>
                      <p class="card-text">${JUICE[con-1]}.name</p>
                      <p class="card-text">price:${JUICE[con-1].price}.00</p>
                         <div class="d-flex justify-content-between align-items-center">
                             <div class="btn-group">
                                 <button type="button" onclick="cart2"('${JUICE[con-1],name}','${JUICE[con-1].price}','${url}','${con}','${btn}')"
                                 class="btn btn-sm btn-outline-secondary"><a style="color:inherit;" href="/cart">BUY</a></button>
                                  
                                 <button id="$(btn)" type="button" onclick="cart('${FRUIT[con-1].name},'${JUICE[con-1].price}','${url}','$(con)','${btn}')"class="btn btn-sm btn-outline-secondary">add to cart</button>             
                              </div>
                              <small class="text-muted">Free shipping</small>
                             </div>
                      </div>
                 </div>
             </div>    
         </div> 
         `   
 }
 function htmlfruitproduct(con){
    // let url ='../img'/fruits/fruit${con}.jpeg;
     let btn= 'btnfruit${con}';
     return `
         <div class="col-md-4">
             <div class="card mb-4 shadow-sm">
                  <img class="card-img-top" style="height:16rem;" src="${url}" alt="card image cap"></img>
                 <div class="card-body">
                      <i style ="color:orange;" class="fa fa-star"></i>
                      <i style ="color:orange;" class="fa fa-star"></i>
                      <i style ="color:orange;" class="fa fa-star"></i>
                      <i style ="color:orange;" class="fa fa-star"></i>
                      <i style ="color:orange;" class="fa fa-star"></i>
                      <p class="card-text">${SALAD[con-1]}.name</p>
                      <p class="card-text">price:${SALAD[con-1].price}.00</p>
                         <div class="d-flex justify-content-between align-items-center">
                             <div class="btn-group">
                                 <button type="button" onclick="cart2"('${SALAD[con-1],name}','${SALAD[con-1].price}','${url}','${con}','${btn}')"
                                 class="btn btn-sm btn-outline-secondary"><a style="color:inherit;" href="/cart">BUY</a></button>
                                  
                                 <button id="$(btn)" type="button" onclick="cart('${SALAD[con-1].name},'${JUICE[con-1].price}','${url}','$(con)','${btn}')"class="btn btn-sm btn-outline-secondary">add to cart</button>             
                              </div>
                              <small class="text-muted">Free shipping</small>
                             </div>
                      </div>
                 </div>
             </div>    
         </div>   
         ` 
}

 function animation(){
     const toast=swal.mixin({
         toast:true,
         position:'top-end',
         showconfirmbutton:false,
         timer:1000
     });
     toast({
         type:'success',
         title:'added to shopping cart'
     });    
 }
 function cart(cart,price,url,con,btncart){
     var item={
         name:name,
         price:price,
         url:url
     } 
     cartitems.push(item);
     let storage=json.parse(localStorage.getItem("cart"));
     if(storage==null){
         products.push(item);
         localStorage.setItem("cart",json.stringify(products));
     } else{
         products=json.parse(localStorage.getItem("cart"));
         products.push(item);
         localStorage.setItem("cart",json.stringify(products));
     }
     products=json.parse(localStorage.getItem("cart"));
     cart_n.innerHTML='[${products.length}]';
     document.getElementsByid(btncart).style.display="none";
     animation();
    }
    function cart2(cart,price,url,con,btncart){
        var item={
            name:name,
            price:price,
            url:url
        } 
        cartitems.push(item);
        let storage=json.parse(localStorage.getItem("cart"));
        if(storage==null){
            products.push(item);
            localStorage.setItem("cart",json.stringify(products));
        } else{
            products=json.parse(localStorage.getItem("cart"));
            products.push(item);
            localStorage.setItem("cart",json.stringify(products));
        }
        products=json.parse(localStorage.getItem("cart"));
        cart_n.innerHTML='[${products.length}]';
        document.getElementsByid(btncart).style.display="none";
        animation();
}   

(()=>{
    for (let index =1; index<=6;index++){
        fruitDiv.innerHTML+='${htmlfruitproduct(index)}';
    }
    for (let index =1; index<=3;index++){
        juiceDiv.innerHTML+='${htmlfruitproduct(index)}';
        saladDiv.innerHTML+='${htmlfruitproduct(index)}';
    }
    if(localStorage.getItem("cart")==null){

    }else{
        products=json.parse(localStorage.getItem("cart"));
        cart_n.innerHTML='[${products.length}]';
    }
})();

 
