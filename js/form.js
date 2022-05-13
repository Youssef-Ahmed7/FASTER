let nav_icon = document.getElementById("navicon");
nav_icon.addEventListener("click" , function(){
    document.querySelector("nav .container .headers").classList.toggle("free");
})
// /*************************** */

let signupspan = document.getElementById("spansignup");
let formdiv = document.getElementById("forme");
let logindiv = document.getElementById("logging");
let regesterdiv =document.getElementById("reg");
let loginspan = document.getElementById("loginspan");

signupspan.addEventListener("click" , function(){
    formdiv.classList.add("jsheight");
    logindiv.classList.add("jsmovelogin");
    regesterdiv.classList.add("jsmovereg");
});
loginspan.addEventListener("click" , function(){
    formdiv.classList.remove("jsheight");
    logindiv.classList.remove("jsmovelogin");
    regesterdiv.classList.remove("jsmovereg");
});
// ***********************************************************************
let register = document.getElementById("subreg");
let k = 0 ;
register.addEventListener("submit" , function(e){
    
    let passwordone = document.getElementById("passwordone").value;
    let passwordtwo = document.getElementById("passwordtwo").value;
    let check =true;
    for (let i = 0 ; i< passwordone.length ;i++){
        if (passwordone[i] !== passwordtwo[i]){
            check =false;
            break;
        }
    }
    if (check ==false){
    e.preventDefault();
    if (k == 0){
        let p = document.createElement("p");
        p.textContent="there's a difference in two passwords";
        p.style.color="red";
        p.style.marginBottom = "5px";
        p.setAttribute("id" ,"newp");
        console.log(passwordone);
        document.getElementById("cpassword").append(p);
        k++;
    }
    
      document.getElementById("passwordone").addEventListener("focus" , function(){
        document.getElementById("newp").remove();
        k=0;
    })
      document.getElementById("passwordtwo").addEventListener("focus" , function(){
        document.getElementById("newp").remove();
        k=0;
    })
    }
});
