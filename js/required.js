let form=document.getElementById("frm-usuario");
let campos=document.querySelectorAll("#frm-usuario input");
 
const reglas={
textos: /^[A-Za-z\s]{1,50}$/, //Letras, min, may, tildadas, dieresis, espacios de 1 a 50 caracteres
numeros:/^\d{7,10}$/, //Teléfonos solo números mínimo 7 y máximo 10 caracteres
correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/, //Correos
password:/^(?=.*\d)(?=.*[!#$@%&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
}

const inputs={
    numdoc:false,
    nombre:false,
    apellido:false,
    correo:false,
    telefono:false,
    password:false,
    password2:false
}

let validarCampos=(e)=>{
    //console.log("Se generó un evento sobre el input: ");
    //console.log(e.target.name);
let validarInput=(regla,grupo,input)=>{
    //console.log("El grupo es "+grupo);
    if(regla.test(input.value)){
        document.getElementById(`g-${grupo}`).classList.remove('error');
        document.getElementById(`g-${grupo}`).classList.add('success');
        document.querySelector(`#g-${grupo} .msn-error`).classList.remove('msn-error-visible');
        document.querySelector(`#g-${grupo} i`).classList.remove('fa-circle-exclamation');
        document.querySelector(`#g-${grupo} i`).classList.add('fa-circle-check');
        inputs[grupo]=true;
    }else{
        document.getElementById(`g-${grupo}`).classList.add('error'); 
        document.getElementById(`g-${grupo}`).classList.remove('success');
        document.querySelector(`#g-${grupo} .msn-error`).classList.add('msn-error-visible');
        document.querySelector(`#g-${grupo} i`).classList.add('fa-circle-exclamation');
        document.querySelector(`#g-${grupo} i`).classList.remove('fa-circle-check');
        inputs[grupo]=false;
    }
}
let verficarForm=(e)=>{

}

    switch(e.target.name){
        case "nombre":
            validarInput(reglas.textos,e.target.name,e.target);
        break;
        case "apellido":
            validarInput(reglas.textos,e.target.name,e.target);
        break;
        case "numdoc":   
            validarInput(reglas.numeros,e.target.name,e.target);
            verficarForm();
        break;
        case "telefono":
            validarInput(reglas.numeros,e.target.name,e.target);
        break;
        case "correo":
            validarInput(reglas.correo,e.target.name,e.target);
        break;
        case "password":
            validarInput(reglas.password,e.target.name,e.target);
        break;
        case "password2":
            validarPassword(e.target.name);
        break;
    }
}

campos.forEach((campo)=>{
    campo.addEventListener('keyup',validarCampos);
    campo.addEventListener('blur',validarCampos);
})
