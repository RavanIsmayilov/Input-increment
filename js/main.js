var number  =  document.querySelector(".number");
var btn  = document.getElementById("animate");
var input  = document.querySelector(".input");


btn.addEventListener("click", function(){

    number.textContent = input.value  
    input.value = "";


})