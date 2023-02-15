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
wish.innerHTML= wish_list.length;


 console.log(card_list);
  table_body = document.getElementById('table_body');
  console.log(table_body);

let result="";
let Total_Cost;




function display_list(){
    result = "" ;
   
    wish_list=JSON.parse(localStorage.getItem('wish_list'));

    wish_list.forEach((element,index )=> {
    
        result += `
    
        <tr>
          <th scope="col" class="fs-md-4">${element.name}</th>
          <th scope="col" class="fs-md-5">${element.price}</th>
          <th scope="col">1</th>
          <th scope="col"><img src=${element.url} alt =""  class="w-25"/></th>
          <th scope="col"><button class="btn btn-danger fs-6" onclick="Delete(${index})">Delete</button></th>
          </tr>
        
        
        `  
    });

    table_body.innerHTML=result;

  
}



display_list();
function Delete(index){

    wish_list.splice(index,1);
    
    localStorage.setItem('wish_list',JSON.stringify(wish_list));
    
    display_list();

    wish.innerHTML= wish_list.length;

}
DeleteAll=document.getElementById('DeleteAll');
console.log(DeleteAll);

DeleteAll.onclick = function(){
    wish_list=[];
    localStorage.setItem('wish_list',JSON.stringify(wish_list));
    display_list();
    wish.innerHTML=wish_list.length;
   

    
 }


