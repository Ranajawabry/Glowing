var submit= document.getElementById("submit");
var email =document .getElementById("email");


submit.addEventListener('click',function(e){
    e.preventDefault();
    if(email.value==""){
    document.querySelector('.massege').style.opacity='1';
    document.querySelector('.massege').style.transition='1s';
    setInterval(() => {
     document.querySelector('.massege').style.opacity='0'; 
    }, 2000);
    }
  else{
    document.querySelector('.massege').style.opacity='0';
  }
})
