function verificarContrasena(){
    pass1 = document.getElementById('contrasenaUsuarioModal').value
    pass2 = document.getElementById('verificacionContrasenaModal').value
console.log(pass1);
    console.log(pass2)
    
    if(pass1 !== pass2){        
        document.getElementById("error").classList.add("mostrar")
        document.getElementById("correcto").classList.remove("mostrar")
    }else{
        document.getElementById("correcto").classList.add("mostrar")
        document.getElementById("error").classList.remove("mostrar")  
    }

    setTimeout(function() {
        document.getElementById("correcto").classList.remove("mostrar");
        document.getElementById("error").classList.remove("mostrar"); 
    }, 3000);
}