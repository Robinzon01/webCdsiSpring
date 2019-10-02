// BOTON DESCARGAR: PCPE PRODUCCIÓN
var btnIniciar = document.getElementById("btnIniciar");
btnIniciar.addEventListener("click",function(){
    document.getElementById("pRes").innerHTML=" ";
    var txtUsu = document.getElementById("txtUsuario");
    var txtPas = document.getElementById("txtPassword");
    //alert("Usuario : "+txtUsu.value+" Contraseña : "+txtPas.value);
    var xhr = new XMLHttpRequest();
    xhr.open("POST","controlador/veri_login_regAct.php",true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("usuario="+txtUsu.value+"&password="+txtPas.value);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){

           txtUsu.disabled=" ";
           txtPas.disabled=" ";

           var respuesta = document.getElementById("resultado");
           respuesta.className="fa fa-spinner fa-pulse fa-5x fa-fw btn-primary";
           setTimeout(function (){
             var etqI = document.createElement("i");
             etqI.className = "fa fa-spinner fa-pulse fa-5x fa-fw";
             //alert("Verificar : "+xhr.responseText);
             setTimeout(verificar(xhr.responseText),1000); 
             
           },1500);
        }
    }   
 }        
);
// FUNCION DE TIEMPO
function mostrarTiempo(cantidad){

    var etqI = document.createElement("i");
    etqI.className = "fa fa-spinner fa-pulse fa-5x fa-fw";
    var respuesta = document.getElementById("resultado");    
    setTimeout(verificar(cantidad),5);
    
}
//FUNCION QUE NOS PERMITE MOSTRAR ICONOS DE VERDAD Y FALSO
function verificar(cantidad){
   
   var respuesta = document.getElementById("resultado");
   var txtUsu = document.getElementById("txtUsuario");
   var txtPas = document.getElementById("txtPassword");
   txtUsu.removeAttribute("disabled");
   txtPas.removeAttribute("disabled");
   //var res = document.getElementById("pRes");

  if(cantidad >0){   
     respuesta.className="fa fa-smile-o fa-5x btn-primary bueno";   
     //window.location.href="?pagina=modulos";
     window.location.href="http://cdsi.ngrok.io/forms/frmservlet?form=Main_Siea&config=Siea_star";
  }else{
     respuesta.className="fa fa-frown-o fa-5x btn-primary malo"; 
     document.getElementById("pRes").innerHTML="El Usuario o Contraseña es Incorrecto.";
  }
}
