let catagory = document.getElementById("catagory");
document.getElementById("top_btn").style.opacity='0';
window.addEventListener("scroll",function(){
    if(window.scrollY>=catagory.offsetTop){
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