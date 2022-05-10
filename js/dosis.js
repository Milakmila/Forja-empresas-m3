let button=document.querySelector("#enviar");
let first=document.querySelector(".modal1");
let second=document.querySelector(".modal2");
let third=document.querySelector(".modal3");
let fourth=document.querySelector(".modal4");



button.onclick=function modales(e){
    e.preventDefault()
    let UserChoice=document.getElementById("search1").value;

    UserChoice=parseInt(UserChoice);
    if(UserChoice=="52368795"){
        first.style.visibility="visible";
        first.style.opacity="1";
        console.log("Haga click para volver a " + textoActivo.link(URL))
    }else if (UserChoice=="1001235478"){
        second.style.visibility="visible";
        second.style.opacity="1";
    }else if (UserChoice=="25413574"){
        third.style.visibility="visible";
        third.style.opacity="1";
    }else if (UserChoice=="1007203506"){
        fourth.style.visibility="visible";
        fourth.style.opacity="1";
    }else{
        alert("No es un número existente")
        console.log(first);
    }
}