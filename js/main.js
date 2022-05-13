
// starting nav section width dropmenu
let nav_icon = document.getElementById("navicon");
nav_icon.addEventListener("click" , function(){
    document.querySelector("nav .container .headers").classList.toggle("free");
})
// starting abouttwo ul services menu
let Services = document.getElementById("fekra");
Services.addEventListener("click" ,function(){
    document.getElementById("drop").classList.toggle("done");
  
    let choose =document.querySelectorAll(".abouttwo .container .form .srvices #drop li");
    choose[0].addEventListener("click" , function (){
        Services.setAttribute("value" , choose[0].textContent); 
        document.getElementById("drop").classList.remove("done")
    });
    
    choose[1].addEventListener("click" , function (){
        Services.setAttribute("value" , choose[1].textContent); 
        document.getElementById("drop").classList.remove("done") 
    });
    
    choose[2].addEventListener("click" , function (){
        Services.setAttribute("value" , choose[2].textContent); 
        document.getElementById("drop").classList.remove("done") 
    });
    
});
// *****************************************************************************
//************************************************************************************ */
