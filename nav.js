

console.log("import");
import {navbar001,footer8875} from "./navexport.js";
  
document.getElementById("navbar887575").innerHTML=navbar001();
document.getElementById("footer").innerHTML=footer8875();






var logincount = 1;
var loginbox = document.getElementById("login-hidden1");
loginbox.style.display = "none";
let data=JSON.parse(localStorage.getItem("project-2userdata")) || [];

var login1 = document.getElementById("login-form101");
// login.style.display="none";
var reg1 = document.getElementById("ajay1");
reg1.style.display = "none";
var reg_button = document.getElementById("reg-button101");
// reg_button.style.display="none";
var log_button = document.getElementById("login-buttom101");
log_button.style.display = "none";

console.log("1")
document.getElementById("profile101").addEventListener("click",showprofile);
console.log("2")
document.getElementById("regfun887575").addEventListener("click",regfun);
console.log("3")
document.getElementById("loginfun887575").addEventListener("click",loginfun);
console.log("4")








function showprofile(){
    console.log("ajay")
  
    
        logincount++;
        if (logincount % 2 == 1) {
            // let blr=document.getElementById("top_navbar");
            // blr.style.filter="blur(2px);"
            loginbox.style.display = "none"

        } else {
            loginbox.style.display = "block"
        }
   
}
////////////////////////////////////


console.log("5")




function regfun(){

    let obj={
     name:document.getElementById("FirstNamereg1").value,
   last:document.getElementById("LastNamereg").value,
   email:document.getElementById("reg_emailreg").value,
   password:document.getElementById("reg_passwordreg").value,
    }
    data.push(obj);
    localStorage.setItem("project-2userdata",JSON.stringify(data));
    window.location.href="#";                       
}


function loginfun(){
  let emai=document.getElementById("usernameside").value;
   let passwor=document.getElementById("passwordside").value;
    let flag=0;
   data.forEach(function(el){
      if(el.email===emai && el.password===passwor){
        flag++;
        localStorage.setItem("project-2logindata",JSON.stringify(el));
        alert("succ")
        window.location.href="#"; 
      }

   })
   if(flag===0){
    alert("something is wrong")
   }


}
console.log("6")

document.getElementById("reg-button101").addEventListener("click",reg);

console.log("7")
document.getElementById("login-buttom101").addEventListener("click",log);



function reg() {
    console.log("1")
    reg1.style.display = "block";
    login1.style.display = "none";


    reg_button.style.display = "none";
    log_button.style.display = "block";

}

function log() {
    console.log("2")
    login1.style.display = "block";
    reg1.style.display = "none";

    reg_button.style.display = "block";
    log_button.style.display = "none";
}