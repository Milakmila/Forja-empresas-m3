let button=document.getElementById("ingresar");
let res=document.getElementById('res');

button.onclick=function login(e){
    e.preventDefault()
    let user=document.getElementById("nombre").value;
    let password=document.getElementById("password").value; 

    if(user==="Admin" &&  password==="Kuepa2022"){
    window.location="dashboard.html"
    }else{
        res.textContent="Por favor ingrese correactemente password y Usuario"
        res.style.setProperty("visibility", "visible");
        res.style.textAlign="center";
        res.style.color="#A40101";
        res.style.fontWeight="800";
        res.style.setProperty("opacity", "1");
    }
}