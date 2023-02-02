let plus = document.getElementsByClassName('fa-plus');
let minus = document.getElementsByClassName('fa-minus');
console.log(minus);

let ans= document.getElementsByClassName('ans');
console.log(ans);
for(let i=0 ;i<ans.length;i++){
    ans[i].classList.add('d-none');
    minus[i].classList.add('d-none');
}

for(let i=0 ;i<plus.length;i++){
   plus[i].addEventListener('click',function(e){
        e.preventDefault();
        if(ans[i].classList.contains('d-none')){
            ans[i].classList.replace('d-none','d-block');
        }
        if(minus[i].classList.contains('d-none')){
            minus[i].classList.replace('d-none','d-block');
        }
        plus[i].classList.add('d-none');
            
    })
}
for(let i=0 ;i<plus.length;i++){
    minus[i].addEventListener('click',function(e){
         e.preventDefault();
         if(ans[i].classList.contains('d-block')){
             ans[i].classList.replace('d-block','d-none');
         }
         if(plus[i].classList.contains('d-none')){
             plus[i].classList.replace('d-none','d-block');
         }
         minus[i].classList.add('d-none');
             
     })
 }
 
 /* top button ////*/
 let freq = document.getElementById("freq");
document.getElementById("top_btn").style.opacity='0';
window.addEventListener("scroll",function(){
    if(window.scrollY>=freq.offsetTop){
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
////////////////////////////////////////////////
/*
for(let i=0 ;i<ans.length;i++){
    ans[i].style.height='0';
    minus[i].style.display='none';
}

 let question = document.getElementById('question');
question.addEventListener('click',function(e){
             e.preventDefault();
             for(let i=0;i<ans.length;i++){
             if(ans[i].style.height=='0'){
                ans[i].style.height=='auto';
                ans[i].style.transition='1s';
                plus[i].style.display="none";
                minus[i].style.display='block';
                
                
            }
            else{
                ans[i].style. height='0';
                ans[i].style.transition='1s';
                minus[i].style.display='none';
                plus[i].style.display="block";
            }
        }
                
            })
            
*/

