let button=document.querySelector(".agregar-button");
let valid=document.querySelector(".form-label-largo");
var nothing=" ";



button.onclick=function validation(e){
       e.preventDefault();
      //valido el nombre
      if (valid== " "){
       alert("Tiene que escribir su nombre");
       console.log("no ingreso")
}

}