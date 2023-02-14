
let loading = document.getElementById('loading');
let glow_products=[
    {id: "condtioner",name : 'ShieldConditioner', price :15.00 , catagory :'skin care',sale:'-17%' ,color:'green' ,url:'assets/img/conditioner.jpg'},
    {id: "brown_product",name : 'Perfecting Facial Oil', price :20.00 , catagory :'skin care',sale:'0%' , color:'yellow',url:'assets/img/brown-product2.jpg' },
    {id:"toner",name : 'Enriched Hand & Body Wash', price :23.00 , catagory :'body care',sale:'0%' , color:'blue',url:"assets/img/toner.jpg"},
    {id: "hair_oil",name : 'Shield Shampoo', price :45.00 , catagory :'hair care',sale:'0%' , color:'yellow',url:'assets/img/hair-oil1.jpg'},
    {id: "cleanser",name : 'Enriched Hand Wash', price :90.00 , catagory :'body care',sale:'0%' , color:'gray',url:'assets/img/cleanser.jpg'},
    {id: "enriched",name : 'Enriched Duo', price :70.00 , catagory :'body care',sale:'0%', color:'gray',url:'assets/img/enriched.jpg'},
    {id: "spray",name : 'Shield Spray', price :45.00 , catagory :'hair care',sale:'0%' , color:'gray',url:'assets/img/spray1.jpg'},
    {id: "eye_cream",name : 'Vital Eye Cream', price :18.00 , catagory :'skin care',sale:'-10%',color:'gray',url:'assets/img/eye-cream.jpg'},
    {id: "scrub",name : 'Supreme Moisture Mask', price :18.0, catagory :'skin care',sale:'-17%',color:'yellow',url:'assets/img/scrub.jpg'},
    {id: "polishing",name : 'Supreme Polishing Treatment', price :45.0 , catagory :'hair care',sale:'-10%',color:'red',url:'assets/img/white-product.jpg'},
    {id: "body_balm" ,name : 'Scalp Moisturizing Cream', price :43.00 , catagory :'skin care',sale:'-7%' ,color:'green',url:'assets/img/body-balm-1.jpg'},
    {id: "cleansing_oil_blue",name : 'Natural Coconut Cleansing Oil', price :18.00 , catagory :'skin care',sale:'-17%',color:'blue',url:'assets/img/cleansing-oil-blue.jpg'},
    {id: "blue_mirror",name : 'hideaway mirror', price : 11.05 , catagory :'Accessories',sale:'-7%',color:'Gray',url:'assets/img/blue-mirror.jpg'},
    {id: "14",name : 'getaway Travel case set', price : 16.00 , catagory :'Accessories',sale:'-10%',color:'Gray',url:'assets/img/blue-bag.jpg'},
    {id: "15",name : 'sideway Travel case set', price : 18.00, catagory :'Accessories',sale:'-17%',color:'yellow',url:'assets/img/nude-case.jpg'},
    {id: "16",name : 'Detangling comb', price : 2.00 , catagory :'hair care',sale:'-3%',color:'gray',url:'assets/img/blue-comb.jpg'},
];

let wish=document.getElementById('wish');
let card=document.getElementById('card');
let wish_list;
let card_list;
if(JSON.parse(localStorage.getItem('wish_list'))==null){
  wish_list=[];
}
else{
  wish_list=JSON.parse(localStorage.getItem('wish_list'))
}
/////////////////////
if(JSON.parse(localStorage.getItem('card_list'))==null){
  card_list=[];
}
else{
  card_list=JSON.parse(localStorage.getItem('card_list'))
}
 
wish.innerHTML = wish_list.length;
card.innerHTML = card_list.length;
let result = "";
let row_product= document.getElementById('row_product');
//////////////// loading JS////////////
function display_prduct(){

  for(let i=0 ; i<glow_products.length ;i++ ){
    result += `
    <div class="product col-xl-3 col-md-6 col-sm-12 mt-3">
    <div class="card border-0 position-relative overflow-hidden" style="width: 18rem;">
        <img src=${glow_products[i].url} class="card-img-top" id=${glow_products[i].id} alt="...">
        <div class="card-body">
          <h5 class="card-title">$${glow_products[i].price}.00</h5>
          <a href="#" class="text-black text-capitalize">${glow_products[i].name}</a>
          <div class="stars mt-1">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <div class="sale position-absolute">
            <span class='px-2 rounded py-1'>${glow_products[i].sale}</span>
        </div>
        <div class="icons position-absolute">
        <a  class="d-block "><span class="fs-6">add to card</span><i class= "fa-solid fa-cart-shopping fs-4"  onclick="AddToCard(${i})"></i></a>
       <a  class="d-block"><span class="fs-6">add to wish list</span><i class=" fa-regular fa-star fs-4 " onclick="AddToWish(${i})"></i></a>
      </div>
    </div>
      </div>

</div>

    `
    
   
}


setTimeout(() => {
  row_product.style.padding='0px';

  document.getElementById("row_product").innerHTML = result;
}, 1000);

}

window.addEventListener('load',()=>{
  loading.style.opacity='1';
  setInterval(() => {
    loading.style.opacity='0';
    loading.style.zIndex = '0';
    loading.style.transition='1s';
  }, 1000);

  display_prduct();

})

let condtioner = document.getElementById('condtioner');
let brown_product= document.getElementById('brown_product');
let toner =document.getElementById('toner');
let hair_oil=document.getElementById('hair_oil');
let cleanser =document.getElementById('cleanser');
let enriched = document.getElementById('enriched');
let spray = document.getElementById('spray');
let eye_cream=document.getElementById('eye_cream');
let scrub = document.getElementById('scrub');
let polishing = document.getElementById('polishing');
let body_balm= document.getElementById('body_balm');
let  cleansing_oil_blue=document.getElementById('cleansing_oil_blue');
let blue_mirror=document.getElementById('blue_mirror');
/*let products = document.querySelectorAll('.product img');

for (const singleItem in products ){
    let imgSrc = products[singleItem].src
    console.log(typeof(imgSrc));
    imgSrc.split("/");
    products[singleItem].addEventListener("mouseover",function(){
        products[singleItem].src= `${imgSrc}1`;
    })

    products[singleItem].addEventListener("mouseout",function(){
        products[singleItem].src=imgSrc;
    })

}
*/
//console.log(polishing);

//////////////////////// top button js//////////////
 let products = document.getElementById("products");
document.getElementById("top_btn").style.opacity='0';
window.addEventListener("scroll",function(){
    if(window.scrollY>=1000){
        document.getElementById("top_btn").style.opacity='1';
        document.getElementById("top_btn").style.transition = '.7s';
    }
    else{
        document.getElementById("top_btn").style.opacity='0';
        document.getElementById("top_btn").style.transition ='.7s';
}

})

document.getElementById("top_btn").addEventListener("click",function(){
   window.scroll({
    top:0,
    behavior:"smooth"
   })
})
////////////////////////////////////////

////////////////////////////////// Hover JS/////////////////////////////////

 condtioner.addEventListener("mouseover",function(){
     condtioner.src="assets/img/conditioner1.jpg";
 })
condtioner.addEventListener("mouseout",function(){
    condtioner.src="assets/img/conditioner.jpg";
 })
// //   //
 brown_product.addEventListener("mouseover",function(){
    brown_product.src="assets/img/brown-product.jpg";
 })
brown_product.addEventListener("mouseout",function(){
    brown_product.src="assets/img/brown-product2.jpg";
})
//      //
toner.addEventListener("mouseover",function(){
    toner.src="assets/img/toner2.jpg";
})
toner.addEventListener("mouseout",function(){
    toner.src="assets/img/toner.jpg";
})
//         //
hair_oil.addEventListener("mouseover",function(){
    hair_oil.src="assets/img/hair-oil2.jpg";
})
hair_oil.addEventListener("mouseout",function(){
    hair_oil.src="assets/img/hair-oil1.jpg";
})
//         //
cleanser.addEventListener("mouseover",function(){
    cleanser.src="assets/img/cleanser2.jpg";
})
cleanser.addEventListener("mouseout",function(){
    cleanser.src="assets/img/cleanser.jpg";
})
//   //     //
enriched.addEventListener("mouseover",function(){
    enriched.src="assets/img/cleanser2.jpg";
})
enriched.addEventListener("mouseout",function(){
    enriched.src="assets/img/enriched2.jpg";
})
//            //
spray.addEventListener("mouseover",function(){
    spray.src="assets/img/spray2.jpg";
})
spray.addEventListener("mouseout",function(){
    spray.src="assets/img/spray1.jpg";
})
///           // 
eye_cream.addEventListener("mouseover",function(){
    eye_cream.src="assets/img/eye-cream2.jpg";
})
eye_cream.addEventListener("mouseout",function(){
    eye_cream.src="assets/img/eye-cream.jpg";
})
 //          //
scrub.addEventListener("mouseover",function(){
    scrub.src="assets/img/scrub2.jpg";
})
scrub.addEventListener("mouseout",function(){
    scrub.src="assets/img/scrub.jpg";
})
//         // 
polishing.addEventListener("mouseover",function(){
    polishing.src="assets/img/white-product-2.jpg";
})
polishing.addEventListener("mouseout",function(){
    polishing.src="assets/img/white-product.jpg";
})
// //
body_balm.addEventListener("mouseover",function(){
    body_balm.src="assets/img/body-balm.jpg";
})
body_balm.addEventListener("mouseout",function(){
    body_balm.src="assets/img/body-balm-1.jpg";
})
// //       //
cleansing_oil_blue.addEventListener("mouseover",function(){
    cleansing_oil_blue.src="assets/img/cleansing-oil-pink.jpg";
})
cleansing_oil_blue.addEventListener("mouseout",function(){
    cleansing_oil_blue.src="assets/img/cleansing-oil-blue.jpg";
})
// ///// /////
blue_mirror.addEventListener("mouseover",function(){
    blue_mirror.src="assets/img/nude-mirror.jpg";
})
blue_mirror.addEventListener("mouseout",function(){
    blue_mirror.src="assets/img/blue-mirror.jpg";
})
////////////////////////// Display JS///////////////////////////// 




let colum=document.getElementById('colum');
let row= document.getElementById('row');
let product=document.getElementsByClassName('product');
console.log(product);

row.addEventListener('click', function(){

  ////////////for loading ////////
  row_product.style.padding='80px';
  document.getElementById("row_product").innerHTML="";
  
  loading.classList.remove('d-none');
  loading.style.opacity='1';

  setTimeout(() => {
    loading.style.opacity='0';
    loading.style.zIndex = '0';
    loading.style.transition='1s';
    loading.classList.add('d-none');
  },2000);


    /////////////////////////////////

    
    result="";
    for(let i=0 ; i<glow_products.length ;i++ ){
        result +=`
        <div class="col-12 mt-3">
        <div class="row_display d-flex gap-3 ">
          <div class="img_con position-relative">
            <img src=${glow_products[i].url} alt="" id= ${glow_products[i].id}>
            <span class="sale position-absolute px-2 rounded py-1">-17%</span>
          </div>
          <div class="py-5 mt-3 px-4">
            <p class="fs-4 fw-bold">$${glow_products[i].price}.00</p>
            <h5 class="fs-3">${glow_products[i].name}</h5>
            <div class="stars mt-4">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p class="fs-5 mt-4 text-secondary">This is a simple, virtual product.</p>
            <div class="icons ">
              <div class=" d-flex">
                <div class="shop">
                  <span class="fs-6 mb-2">add to card</span>
                  <i class="fa-solid fa-cart-shopping  fs-4" onclick="AddToCard(${i})"></i>
                </div>
                <div class="wish">
                  <span class="fs-6 mb-2">add to wish list</span>
                 <i class="fa-regular fa-star fs-4" onclick="AddToWish(${i})"></i>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
        `
        
    }
    setTimeout(() => {

      row_product.style.padding='0px';
      document.getElementById("row_product").innerHTML = result;
    }, 1000);
    
    row.style.color='black';
    
    colum.style.color= '#ababab';

})

colum.addEventListener('click',function(){
    result="";

    ///////////// loading /////////////////
    row_product.style.padding='80px';
    document.getElementById("row_product").innerHTML="";
    loading.classList.remove('d-none');
    loading.style.opacity='1';
    setTimeout(() => {
      loading.style.opacity='0';
      loading.style.zIndex = '0';
      loading.style.transition='1s';
    },2000);
/////////////////////////////////////////



    for(let i=0 ; i<glow_products.length ;i++ ){
        result += `
        <div class="product col-xl-3 col-md-6 col-sm-12 mt-3">
        <div class="card border-0 position-relative overflow-hidden" style="width: 18rem;">
            <img src=${glow_products[i].url} class="card-img-top"id=${glow_products[i].id} alt="...">
            <div class="card-body">
              <h5 class="card-title">$${glow_products[i].price}.00</h5>
              <a href="#" class="text-black text-capitalize">${glow_products[i].name}</a>
              <div class="stars mt-1">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div class="sale position-absolute">
                <span class='px-2 rounded py-1'>${glow_products[i].sale}</span>
            </div>
            <div class="icons position-absolute">
            <a  class="d-block "><span class="fs-6">add to card</span><i class= "fa-solid fa-cart-shopping fs-4"  onclick="AddToCard(${i})"></i></a>
           <a  class="d-block"><span class="fs-6">add to wish list</span><i class=" fa-regular fa-star fs-4 " onclick="AddToWish(${i})"></i></a>
          </div>
        </div>
          </div>

    </div>

        `
        
       
    }


    setTimeout(() => {
      row_product.style.padding='0px';

      document.getElementById("row_product").innerHTML = result;
    }, 1000);
    
    row.style.color='#ababab';
    colum.style.color= 'black';

})
//////////// Add to wish list function /////////////////

function AddToWish(a) {

    let wish_item={};
    wish_item.id=glow_products[a].id;
    wish_item.name=glow_products[a].name;
    wish_item.url=glow_products[a].url;
    wish_item.catagory=glow_products[a].catagory;
    wish_item.sale=glow_products[a].sale;
    wish_item.color=glow_products[a].color;
    
    let arr = wish_list.filter((ele)=>{
      return ele.name == wish_item.name;
    });
    if(arr.length==0){
      wish_list.push(wish_item);
      localStorage.setItem("wish_list" , JSON.stringify(wish_list));
      wish.innerHTML=wish_list.length;
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Product has been Added to wish List',
      showConfirmButton: false,
      timer: 1500
    })
    }
    else{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Product already exist in wish List',
        showConfirmButton: false,
        timer: 1500
      })
    }
    
    console.log(wish_list);

}
///////////////////Add to card_list/////////////////

 let totalCoast = 0;
function AddToCard(a) {
    let card_item={};
    card_item.id=glow_products[a].id;
    card_item.name=glow_products[a].name;
    card_item.price=glow_products[a].price;
    card_item.url=glow_products[a].url;
    card_item.catagory=glow_products[a].catagory;
    card_item.sale=glow_products[a].sale;
    card_item.color=glow_products[a].color;
    card_list.push(card_item);
    localStorage.setItem("card_list" , JSON.stringify(card_list));
    card.innerHTML=card_list.length;
    totalCoast += card_item.price;
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: `Product has been Added to card List , total cost : ${totalCoast}$`,
    showConfirmButton: false,
    timer: 1500
  })
   
    console.log(wish_list);
    console.log(card_list);

}



//////// /////////////Division and filter JS     ////////////////////////
let filter= document.getElementById('filter');
let Division= document.getElementById('Division');
//console.log(Division);
Division.classList.add('d-none');

filter.addEventListener('click',()=>{
    if(Division.classList.contains('d-block')){
        Division.classList.replace('d-block','d-none');
    }
    else{
        Division.classList.replace('d-none','d-block');
    }
}
)

result = " ";
Division.addEventListener('click',(e)=>{

 



    e.preventDefault();
    let x= e.target.innerText;
  //console.log(x.toUpperCase());
      result="";
      ////////////////////////////////filter by price/////////////////////////////
     
     if(x=="All"){

        for(let j=0 ; j< glow_products.length ;j++){
              result +=
              `
             <div class="product col-3 mt-3">
             <div class="card border-0 position-relative" style="width: 18rem;">
                 <img src=${glow_products[j].url} class="card-img-top" id="condtioner" alt="...">
                 <div class="card-body">
                   <h5 class="card-title">$${glow_products[j].price}</h5>
                   <a href="#" class="text-black">${glow_products[j].name}</a>
                   <div class="stars mt-2">
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star"></i>
                   <i class="fa-solid fa-star"></i>
                 </div>
         
                   <div class="sale position-absolute">
                         <span class='px-2 rounded py-1'>${glow_products[j].sale}</span>
                     </div>
            
                  </div>
               </div>
            </div>
             `
            }

     
            document.getElementById("row_product").innerHTML = result;
            }

       
     
     
     else if(x == "$0 - $20"){
       
       for(let j=0 ; j< glow_products.length ;j++){
              if(glow_products[j].price>=0 && glow_products[j].price<20){
                result +=
                `
               <div class="product col-3 mt-3">
               <div class="card border-0 position-relative" style="width: 18rem;">
                   <img src=${glow_products[j].url} class="card-img-top" id="condtioner" alt="...">
                   <div class="card-body">
                     <h5 class="card-title">$${glow_products[j].price}</h5>
                     <a href="#" class="text-black">${glow_products[j].name}</a>
                     <div class="stars mt-2">
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                   </div>
           
                     <div class="sale position-absolute">
                           <span class='px-2 rounded py-1'>${glow_products[j].sale}</span>
                       </div>
              
                    </div>
                 </div>
              </div>
               `
              }
              
              }
    

              document.getElementById("row_product").innerHTML = result;
              
      }
     else if(x == "$20 - $40"){
       
        for(let j=0 ; j< glow_products.length ;j++){
               if(glow_products[j].price>=20 && glow_products[j].price<40){
                 result +=
                 `
                <div class="product col-3 mt-3">
                <div class="card border-0 position-relative" style="width: 18rem;">
                    <img src=${glow_products[j].url} class="card-img-top" id="condtioner" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">$${glow_products[j].price}</h5>
                      <a href="#" class="text-black">${glow_products[j].name}</a>
                      <div class="stars mt-2">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
            
                      <div class="sale position-absolute">
                            <span class='px-2 rounded py-1'>${glow_products[j].sale}</span>
                        </div>
               
                     </div>
                  </div>
               </div>
                `
               }
               
               }
    
 
               document.getElementById("row_product").innerHTML = result;
              
       }
       else if(x == "$40 - $60"){
       
        for(let j=0 ; j< glow_products.length ;j++){
               if(glow_products[j].price>=40 && glow_products[j].price<60){
                 result +=
                 `
                <div class="product col-3 mt-3">
                <div class="card border-0 position-relative" style="width: 18rem;">
                    <img src=${glow_products[j].url} class="card-img-top" id="condtioner" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">$${glow_products[j].price}</h5>
                      <a href="#" class="text-black">${glow_products[j].name}</a>
                      <div class="stars mt-2">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
            
                      <div class="sale position-absolute">
                            <span class='px-2 rounded py-1'>${glow_products[j].sale}</span>
                        </div>
               
                     </div>
                  </div>
               </div>
                `
               }
               
               }
    
               document.getElementById("row_product").innerHTML = result;
       }
       else if(x == "$60 - $80"){
       
        for(let j=0 ; j< glow_products.length ;j++){
               if(glow_products[j].price>=60 && glow_products[j].price<80){
                 result +=
                 `
                <div class="product col-3 mt-3">
                <div class="card border-0 position-relative" style="width: 18rem;">
                    <img src=${glow_products[j].url} class="card-img-top" id="condtioner" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">$${glow_products[j].price}</h5>
                      <a href="#" class="text-black">${glow_products[j].name}</a>
                      <div class="stars mt-2">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
            
                      <div class="sale position-absolute">
                            <span class='px-2 rounded py-1'>${glow_products[j].sale}</span>
                        </div>
               
                     </div>
                  </div>
               </div>
                `
               }
               
               }

     
 
               document.getElementById("row_product").innerHTML = result;
       }

   
//////////////////////filter by catagory///////////////////////////
      for (let i=0 ; i< glow_products.length ; i++){
    
   // console.log(glow_products[i].catagory)
     if(glow_products[i].catagory.toUpperCase() == x.toUpperCase()){
        console.log("hi");
            result +=
            `
           <div class="product col-3 mt-3">
           <div class="card border-0 position-relative" style="width: 18rem;">
               <img src=${glow_products[i].url} class="card-img-top" id="condtioner" alt="...">
               <div class="card-body">
                 <h5 class="card-title">$${glow_products[i].price}</h5>
                 <a href="#" class="text-black">${glow_products[i].name}</a>
                 <div class="stars mt-2">
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
               </div>
       
                 <div class="sale position-absolute">
                       <span class='px-2 rounded py-1'>${glow_products[i].sale}</span>
                   </div>
          
                </div>
             </div>
          </div>
           `;

    


           document.getElementById("row_product").innerHTML=result;

         }
         //////////////////filter By color
         if(glow_products[i].color.toUpperCase() == x.toUpperCase()){
            console.log("hi");
               
                result +=
                `
               <div class="product col-3 mt-3">
               <div class="card border-0 position-relative" style="width: 18rem;">
                   <img src=${glow_products[i].url} class="card-img-top" id="condtioner" alt="...">
                   <div class="card-body">
                     <h5 class="card-title">${glow_products[i].price}</h5>
                     <a href="#" class="text-black">${glow_products[i].name}</a>
                     <div class="stars mt-2">
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                     <i class="fa-solid fa-star"></i>
                   </div>
           
                     <div class="sale position-absolute">
                           <span class='px-2 rounded py-1'>${glow_products[i].sale}</span>
                       </div>
              
                    </div>
                 </div>
              </div>
               `;

      
               document.getElementById("row_product").innerHTML=result;
    
             }
              
        
}


})
///////////search
let search =document.getElementById("search");
search.onkeyup = ()=>{
    result=""; 

    for(let i=0;i< glow_products.length ; i++){
        if(glow_products[i].name.toUpperCase().includes((search.value).toUpperCase()) || glow_products[i].catagory.toUpperCase().includes((search.value).toUpperCase())){
            result +=
            `
           <div class="product col-3 mt-3">
           <div class="card border-0 position-relative" style="width: 18rem;">
               <img src=${glow_products[i].url} class="card-img-top" id="condtioner" alt="...">
               <div class="card-body">
                 <h5 class="card-title">$${glow_products[i].price}</h5>
                 <a href="#" class="text-black">${glow_products[i].name}</a>
                 <div class="stars mt-2">
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
               </div>
       
                 <div class="sale position-absolute">
                       <span class='px-2 rounded py-1'>${glow_products[i].sale}</span>
                   </div>
          
                </div>
             </div>
          </div>
           `

         }

        }

      
        document.getElementById("row_product").innerHTML=result;

    }
    

 ///////////// 
//export {wish_list};

