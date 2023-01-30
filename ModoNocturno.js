let button = document.getElementById("myButton");
let isBlack = false;

button.addEventListener("click", function(){
    if(isBlack === true){
     document.getElementById("contenido").style.background = '#EFCEAD';
     document.getElementById("aside").style.background = '#F3E3D3';
     document.getElementById("info").style.background = '#F3E3D3';
     document.getElementById("header").style.background = '#C98860';
     document.getElementById("footer").style.background = '#F3E3D3';
    document.getElementById("nombre").style.color = '#EFCEAD';
     document.body.style.color = "black";
     button.innerHTML = 'Modo Oscuro'
     isBlack = false
   } else {
     document.getElementById("contenido").style.background = "#BDBDBD";
     document.getElementById("aside").style.background = '#E0E0E0';
     document.getElementById("info").style.background = '#E0E0E0';
     document.getElementById("header").style.background = '#9E9E9E';
     document.getElementById("footer").style.background = '#E0E0E0';
     document.getElementById("nombre").style.color = 'white';
     button.innerHTML = 'Modo Claro'
     isBlack = true
   }
})
