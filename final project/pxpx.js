function menu(){
    var m = document.getElementById('divmenu');
    
    if (m.style.display=="none") {
        m.style.display="block";
    }
    else if (m.style.display=="block"){
        m.style.display="none";
    }
    
}
function show() {
var mobileMenu = document.getElementById("mobile-menu");

if (mobileMenu.style.display == "block") {
   mobileMenu.style.display = "none";
   mobileMenu.classList.toggle("block");
}else {
   mobileMenu.style.display = "block";
   mobileMenu.classList.toggle("block");
}
}