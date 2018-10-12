var expregN = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{1}[a-zA-ZáéíóúÁÉÍÓÚñÑ|\s]{3,35}$/;
var expregE = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/
var boton  = document.getElementById('btn-enviar');


boton.addEventListener('click',function(){
			
			validar();
			
})




function validar()
{
	 valPais = document.getElementById("pais").value;
	 valorNombre = document.getElementById("nombre").value;
	 valorEmail = document.getElementById("email").value;
	 valorComent = document.getElementById("coment").value;

	if(expregN.test(valorNombre)){
		if(valPais != "ninguno"){
			if(expregE.test(valorEmail)){
				if(valorComent.length<500 && valorComent.length>0){
					getSession();
					alert("datos enviados...");


				}else{
					alert("ingrese un comentario valido...");
				}
			}else{
				alert("ingrese un email valido...");
			}
		}else{
			alert("Debe seleccionar un pais...");
		}

	}else{
		alert("ingrese correctamente su nombre");
	}
	
	
}
conta = 1;

function getSession(){
	
	var acumulador = sessionStorage.length;
	acumulador += 1;
	sessionStorage.setItem(acumulador,"NOMBRE: "+valorNombre+" PAIS: "+valPais+" EMAIL: "+valorEmail+" COMENTARIO: "+valorComent );
	
	
	
}

