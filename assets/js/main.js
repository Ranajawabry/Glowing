var navBtn = document.getElementById("nav-btn");
var sideMenu = document.getElementById("side-menu");

navBtn.addEventListener('click',function(){
    navBtn.style.boxShadow = "unset";
    if(sideMenu.classList.contains("active")){
        hideSide();
    }
    else{
        showSide();
    }
});

function showSide(){
    document.body.style.paddingLeft = "300px";
    sideMenu.classList.add("active");
}
function hideSide(){
    document.body.style.paddingLeft = "0";
    sideMenu.classList.remove("active");
}