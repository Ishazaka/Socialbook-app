
 
var settingsmenu = document.querySelector(".settings-menu");
var darkbtn = document.getElementById("dark-btn");


function settingsmenutoggle(){
 
  settingsmenu.classList.toggle("settings-menu-height")
}

darkbtn.onclick = function (){
  darkbtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");

 if(localStorage.getItem("theme") == "light"){
    localStorage.setItem("theme" , "dark");
 }else{
    localStorage.setItem("theme" , "light");
 }


}
