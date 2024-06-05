var tab1= document.getElementById("tab1-content");
var tab2= document.getElementById("tab2-content");
var tab3= document.getElementById("tab3-content");

function getLondon(){

   
    var tab1btn= document.getElementById("tab1-button");
    tab1.classList.remove("dp-none");
    tab2.classList.add("dp-none");
    tab3.classList.add("dp-none");
    tab1btn.classList.add("btn-color");
}

function getParis(){
    
    var tab2btn= document.getElementById("tab2-button");
    tab2.classList.remove("dp-none");
    tab1.classList.add("dp-none");
    tab3.classList.add("dp-none");
    tab2btn.classList.add("btn-color");
    
}
function getTokyo(){
    
    var tab3btn= document.getElementById("tab3-button");
    tab3.classList.remove("dp-none");
    tab1.classList.add("dp-none");
    tab2.classList.add("dp-none");
    tab3btn.classList.add("btn-color");
}