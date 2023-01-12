const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

document.querySelector('.customer-service').style.cssText=
    `transform: translateY(180px);
    visibility:hidden;
    opacity: 0;`;
window.addEventListener('scroll', function(){
let carouselindicators = document.querySelector('.carousel-indicators').offsetTop;
if(window.scrollY > carouselindicators){
    document.querySelector('.customer-service').style.cssText=
    `transform: translateY(0px);
    transition: .7s;
        opacity: 1;
        visibility: visible;`;
}

});
document.getElementById('header').style.cssText=
    `transform: translateY(100px);
    visibility:hidden;
    opacity: 0;`;
window.addEventListener('scroll', function(){
        let customerservice = document.querySelector('.customer-service').offsetTop;
        if(window.scrollY > customerservice){
            document.getElementById('header').style.cssText=
            ` transform: translateY(0px);
            transition: .7s;
            opacity: 1;
            visibility: visible;`;
}});

/////////////////////////////////////
document.getElementById('item1').style.cssText=
    `transform: translateY(180px);
    visibility:hidden;
    opacity: 0;`;
window.addEventListener('scroll', function(){
        let customerservice = document.querySelector('.customer-service').offsetTop;
        if(window.scrollY > customerservice){
            document.getElementById('item1').style.cssText=
            ` transform: translateY(0px);
            transition: .5s;
            opacity: 1;
            visibility: visible;`;
}});
document.getElementById('item2').style.cssText=
    `transform: translateY(100px);
    visibility:hidden;
    opacity: 0;`;
window.addEventListener('scroll', function(){
        let customerservice = document.querySelector('.customer-service').offsetTop;
        if(window.scrollY > customerservice){
            document.getElementById('item2').style.cssText=
            ` transform: translateY(0px);
            transition: .7s;
            opacity: 1;
            visibility: visible;`;
}});
document.getElementById('item3').style.cssText=
    `transform: translateY(100px);
    visibility:hidden;
    opacity: 0;`;
window.addEventListener('scroll', function(){
        let customerservice = document.querySelector('.customer-service').offsetTop;
        if(window.scrollY > customerservice){
            document.getElementById('item3').style.cssText=
            ` transform: translateY(0px);
            transition: 2s;
            opacity: 1;
            visibility: visible;`;
}});
document.getElementById('item4').style.cssText=
    `transform: translateY(100px);
    visibility:hidden;
    opacity: 0;`;
window.addEventListener('scroll', function(){
        let customerservice = document.querySelector('.customer-service').offsetTop;
        if(window.scrollY > customerservice){
            document.getElementById('item4').style.cssText=
            ` transform: translateY(0px);
            transition: 2.5s;
            opacity: 1;
            visibility: visible;`;
}});

