var cbxCompania = document.getElementById("compania");
var cbxRed = document.getElementById("red");
//var btnCambiar = document.getElementById("btnCambiar");
//LLENAR EL COMBOX COMPAÑIA
window.onload= function (){

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var compania = JSON.parse(this.responseText);
       for(var i in compania ){
           //console.log(campani[i].configuracion);
           var option = document.createElement("option");
           var contenido = document.createTextNode(compania[i].razon_social);
           option.appendChild(contenido);
           option.value = compania[i].configuracion;
           cbxCompania.appendChild(option);
       }
    }
  };
  
  xhttp.open("POST", "controlador/llenado.php", true);
  xhttp.send();
  
}
//CAMBIAR EL URL 
function cambiar_url (){
   var vRed = cbxRed.value;
   //console.log("RED : "+vRed);
   if( vRed =="w" ){
      salida_web("cdsif.ngrok.io");
   }else{
     salida_web("192.168.1.5:9001"); 
   }
   

}
//EVENTO PARA EL BOTON CAMBIAR
cbxCompania.addEventListener("change",cambiar_url);
cbxRed.addEventListener("change",cambiar_url);
//FUNCION QUE NOS PERMITE TENER SALIDA A WEB
function salida_web(url){
   var vCompania = cbxCompania.value;
   //console.log("Compañia : "+vCompania);
   //COMPRAS
   //WEB
   var aCompWeb = document.getElementById("comp_web");
   aCompWeb.href ="http://"+url+"/forms/frmservlet?form=Main_Compras&config=compa"+"_"+vCompania+"_web";
   //DESCARGA
   var aCompSta = document.getElementById("comp_star");
   aCompSta.href ="http://"+url+"/forms/frmservlet?form=Main_Compras&config=compa"+"_"+vCompania+"_star";
   
   
   //IMPORTACION 
   var aImporWEb = document.getElementById("impo_web");
   aImporWEb.href = "http://"+url+"/forms/frmservlet?form=Main&config=Impor"+"_"+vCompania+"_web";
   var aImporStar = document.getElementById("impo_star");
   aImporStar.href = "http://"+url+"/forms/frmservlet?form=Main&config=Impor"+"_"+vCompania+"_star";
   
   //Inventario 
   var aInveWEb = document.getElementById("inve_web");
   aInveWEb.href = "http://"+url+"/forms/frmservlet?form=Main_Inve&config=INVE"+"_"+vCompania+"_web";
   var aInveStar = document.getElementById("inve_star");
   aInveStar.href = "http://"+url+"/forms/frmservlet?form=Main_Inve&config=INVE"+"_"+vCompania+"_star";
   
   //Promoción 
   var aPromoWEb = document.getElementById("prom_web");
   aPromoWEb.href = "http://"+url+"/forms/frmservlet?form=Main_Promo&config=Promo"+"_"+vCompania+"_web";
   var aPromoStar = document.getElementById("prom_star");
   aPromoStar.href = "http://"+url+"/forms/frmservlet?form=Main_Promo&config=Promo"+"_"+vCompania+"_star";
   
   //Producción 
   var aProducWEb = document.getElementById("prod_web");
   aProducWEb.href = "http://"+url+"/forms/frmservlet?form=FPCP_MAIN&config=Produ"+"_"+vCompania+"_web";
   var aProducStar = document.getElementById("prod_star");
   aProducStar.href = "http://"+url+"/forms/frmservlet?form=FPCP_MAIN&config=Produ"+"_"+vCompania+"_star";
   
   //Incentivos 
   var aIncenWEb = document.getElementById("ince_web");
   aIncenWEb.href = "http://"+url+"/forms/frmservlet?form=Main_Incen&config=INCEN"+"_"+vCompania+"_web";
   var aIncenStar = document.getElementById("ince_star");
   aIncenStar.href = "http://"+url+"/forms/frmservlet?form=Main_Incen&config=INCEN"+"_"+vCompania+"_star";
   
    //Facturación 
   var aFactWEb = document.getElementById("fact_web");
   aFactWEb.href = "http://"+url+"/forms/frmservlet?form=Main_Factu&config=FACTU"+"_"+vCompania+"_web";
    var aFactStar = document.getElementById("fact_star");
   aFactStar.href = "http://"+url+"/forms/frmservlet?form=Main_Factu&config=FACTU"+"_"+vCompania+"_star";
   
   //Punto Venta 
   var aPventWEb = document.getElementById("pven_web");
   aPventWEb.href = "http://"+url+"/forms/frmservlet?form=Main_PVENTA&config=PVENTA"+"_"+vCompania+"_web";
      var aPventStar = document.getElementById("pven_star");
   aPventStar.href = "http://"+url+"/forms/frmservlet?form=Main_PVENTA&config=PVENTA"+"_"+vCompania+"_star";
   
   //Activos Fijos
   var aActFiWEb = document.getElementById("acfi_web");
   aActFiWEb.href = "http://"+url+"/forms/frmservlet?form=MAIN&config=ACTIVOS"+"_"+vCompania+"_web";
   var aActFiStar = document.getElementById("acfi_star");
   aActFiStar.href = "http://"+url+"/forms/frmservlet?form=MAIN&config=ACTIVOS"+"_"+vCompania+"_star";
   
   //Personal
   var aPersoWEb = document.getElementById("pers_web");
   aPersoWEb.href = "http://"+url+"/forms/frmservlet?form=MAIN&config=Perso"+"_"+vCompania+"_web";
   var aPersoStar = document.getElementById("pers_star");
   aPersoStar.href = "http://"+url+"/forms/frmservlet?form=MAIN&config=Perso"+"_"+vCompania+"_star";
   
   //Personal
   var aPersoWEb = document.getElementById("pers_web");
   aPersoWEb.href = "http://"+url+"/forms/frmservlet?form=MAIN&config=Perso"+"_"+vCompania+"_web";
   var aPersoStar = document.getElementById("pers_star");
   aPersoStar.href = "http://"+url+"/forms/frmservlet?form=MAIN&config=Perso"+"_"+vCompania+"_star";
   
   //Cuenta x Pagar
   var aCxpWEb = document.getElementById("cxp_web");
   aCxpWEb.href = "http://"+url+"/forms/frmservlet?form=Main_Cxp&config=CXP"+"_"+vCompania+"_web";
   
   var aCxpStar = document.getElementById("cxp_star");
   aCxpStar.href = "http://"+url+"/forms/frmservlet?form=Main_Cxp&config=CXP"+"_"+vCompania+"_star";
   
   //Cuenta Cobrar
   var aCxpWEb = document.getElementById("cxc_web");
   aCxpWEb.href = "http://"+url+"/forms/frmservlet?form=Main_Cxc&config=CXC"+"_"+vCompania+"_web";
   var aCxpStar = document.getElementById("cxc_star");
   aCxpStar.href = "http://"+url+"/forms/frmservlet?form=Main_Cxc&config=CXC"+"_"+vCompania+"_star";
   
   //Tesorería
   var aCxpWEb = document.getElementById("teso_web");
   aCxpWEb.href = "http://"+url+"/forms/frmservlet?form=Main_Teso&config=Tesor"+"_"+vCompania+"_web";
   var aCxpStar = document.getElementById("teso_star");
   aCxpStar.href = "http://"+url+"/forms/frmservlet?form=Main_Teso&config=Tesor"+"_"+vCompania+"_star";
   
   //Contabilidad
   var aContWEb = document.getElementById("cont_web");
   aContWEb.href = "http://"+url+"/forms/frmservlet?form=Main&config=CONTA"+"_"+vCompania+"_web";
   var aContStar = document.getElementById("cont_star");
   aContStar.href = "http://"+url+"/forms/frmservlet?form=Main&config=CONTA"+"_"+vCompania+"_star";
   
   //Sig. Gestión
   var aSigesWEb = document.getElementById("sige_web");
   aSigesWEb.href = "http://"+url+"/forms/frmservlet?form=Main_Gest&config=Gesti"+"_"+vCompania+"_web";
   var aSigesStar = document.getElementById("sige_star");
   aSigesStar.href = "http://"+url+"/forms/frmservlet?form=Main_Gest&config=Gesti"+"_"+vCompania+"_star";
}