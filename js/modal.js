let button=document.querySelector("#enviar");


button.onclick=function modales(e){
    e.preventDefault()
    let UserChoice=document.getElementById("search1").value;


    UserChoice=parseInt(UserChoice);
    if(UserChoice=="52368795"){
        swal.fire({
            container: 'Luisa Fernandez',
            text: "CC:52368795",
            icon: 'info',
            iconColor: '#F3610E',
            html:
                    
            '<h3><h4>Nombres:</h4> Sebastian Quiroga</h3>, ' +
            '<h3><h4>Documento y #documento</h4>CC: 52368795</h3>',
           
            html:       
            '<h3><h4>Nombres:</h4> Sebastian Quiroga</h3>, ' +
            '<h3><h4>Documento y #documento</h4>CC: 1007203506</h3>' +
            '<div></h3> <h3><h4>Dosis:</h4> 1</h3> <h3><h4>Vacuna:</h4> Pfizer<h3><h4>fecha:</h4> 18/03/2022</h3></div>' ,
            showCancelButton: true,
            confirmButtonColor: '#F3610E',
            cancelButtonColor: '#A40101',
            confirmButtonText: 'Continue!',
            backdrop: `
            rgba(0,0,123,0.4)
            `
            
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href='../views/vacunacion.html'
            }
          })
    }else if (UserChoice=="1001235478"){ 
      swal.fire({
        container: 'Luisa Fernandez',
        text: "CC:52368795",
        icon: 'info',
        iconColor: '#F3610E',    
        html:       
        '<h3><h4>Nombres:</h4> Sebastian Quiroga</h3>, ' +
        '<h3><h4>Documento y #documento</h4>CC: 1001235478</h3>' +
        '<div><h3><h4>Dosis:</h4> 1 || 2</h3> <h3><h4>Vacunas:</h4>Sinovac || Sinovac</h3> <h3><h4>fechas:</h4> 18/09/2021 || 29/02/2022 </h3></div>',
        showCancelButton: true,
        confirmButtonColor: '#F3610E',
        cancelButtonColor: '#A40101',
        confirmButtonText: 'Continue!',
        backdrop: `
        rgba(0,0,123,0.4)
        `
        
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href='../views/vacunacion.html'
        }
      })
       
    }else if (UserChoice=="25413574"){
      swal.fire({
        container: 'Luisa Fernandez',
        text: "CC:52368795",
        icon: 'info',
        iconColor: '#F3610E',    
        html:       
        '<h3><h4>Nombres:</h4> Bibiana Cortes</h3>, ' +
        '<h3><h4>Documento y #documento</h4>CC: 25413574</h3>' +
        '<div><h3><h4>Dosis:</h4> 1  ||  2  ||  3</h3> <h3><h4>Vacunas:</h4>Sinovac  ||  Sinovac  ||  Pfizer</h3> <h3><h4>fechas:</h4> 01/08/2021  ||  29/12/2021  ||  14/04/2022</h3></div>',
        showCancelButton: true,
        confirmButtonColor: '#F3610E',
        cancelButtonColor: '#A40101',
        confirmButtonText: 'Continue!',
        backdrop: `
        rgba(0,0,123,0.4)
        `
        
      }).then((result) => {
        if (result.isConfirmed) {
          swal.fire(
            'Esquema completo!',
            'Paciente: Bibiana Cortes cuenta con las tres dosis'
          )
          
        }
      })
        
    }else if (UserChoice=="1007203506"){
      swal.fire({
        container: 'Sin información del paciente',
        icon: 'error',
        text: "Por favor registre al paciente",
        showCancelButton: true,
        confirmButtonColor: '#F3610E',
        cancelButtonColor: '#A40101',
        confirmButtonText: 'Continue!',
        backdrop: `
        rgba(0,0,123,0.4)
        `

    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href='../views/registro.html'
        
      }
    })
    }else{
        alert("No es un número existente")
    }

  }
