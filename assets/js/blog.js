let six_term = document.getElementById("six_term");
document.getElementById("top_btn").style.opacity='0';
window.addEventListener("scroll",function(){
    if(window.scrollY>=900){
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