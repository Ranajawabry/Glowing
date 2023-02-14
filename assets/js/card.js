 let card_list;
 let wish_list;

 if (JSON.parse(localStorage.getItem('card_list'))==null){
    card_list =[];
 }
else{
    card_list=JSON.parse(localStorage.getItem('card_list'));
}

if (JSON.parse(localStorage.getItem('wish_list'))==null){
    wish_list =[];
 }
else{
    wish_list=JSON.parse(localStorage.getItem('wish_list'));
}
let wish = document.getElementById('wish');
let card=document.getElementById('card');
card.innerHTML= card_list.length; 
wish.innerHTML=wish_list.length;


 console.log(card_list);
  table_body = document.getElementById('table_body');
  console.log(table_body);

let result="";
let Total_Cost;

function calculat_price(){
    Total_Cost=0;
   
    card_list=JSON.parse(localStorage.getItem('card_list'));

    card_list.forEach((element)=>{

     Total_Cost += element.price;
     Total_price.innerHTML=`Total Cost: ${Total_Cost}$`;

   })


}
function display_list(){
    result = "" ;
   
    card_list=JSON.parse(localStorage.getItem('card_list'));

    card_list.forEach((element,index )=> {
    
        result += `
    
        <tr>
          <th scope="col" class="fs-4">${element.name}</th>
          <th scope="col" class="fs-5">${element.price}</th>
          <th scope="col">1</th>
          <th scope="col"><img src=${element.url} alt =""  class="w-25"/></th>
          <th scope="col"><button class="btn btn-danger fs-6" onclick="Delete(${index})">Delete</button></th>
          </tr>
        
        
        `  
    });

    table_body.innerHTML=result;
    calculat_price();

}
let price = document.getElementById('price');
console.log(price);


display_list();
function Delete(index){

    card_list.splice(index,1);
    localStorage.setItem('card_list',JSON.stringify(card_list));
    display_list();
    card.innerHTML= card_list.length;

}
DeleteAll=document.getElementById('DeleteAll');
console.log(DeleteAll);

DeleteAll.onclick = function(){
    card_list=[];
    localStorage.setItem('card_list',JSON.stringify(card_list));
    display_list();
    card.innerHTML=card_list.length;
    Total_price.innerHTML=`Total Cost:0$`;

    
 }


