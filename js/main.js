let input = document.querySelector("#fileInput");
let button = document.querySelector("#submit");

input.addEventListener("change", stateHandle);

function stateHandle(){
    if(document.querySelector("#fileInput").value === ""){
        button.disabled = true;
    }else{
        button.disabled = false;
    }
}

var div = document.getElementById("loader");
var data= document.querySelector('.progress_bar__state');
var psedoElementStyle = getComputedStyle(data, '::before')

function show(){
    div.style.display = 'flex';
}
setInterval(function(){
    if(psedoElementStyle.content.length == 11){
        setTimeout(function(){
         div.style.display ="none";
         location.reload();
        },300);
    }
},10);