
//not applied, must be modified to work
/* <a href="javascript:void(0);" id="navtoggle" onclick="navtoggle()">&#9776;</a>*/


displaynav = false;
function navtoggle(){
    var navbar= document.getElementById("navbar");
    console.log(navbar.style.display)
    if(displaynav=false){
        navbar.style.display = "block";
        displaynav = true;
    }else{
        navbar.style.display = "none";
        displaynav = false;
    }
    
    
}


