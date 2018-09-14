
	var boton  = document.getElementById('btn-enviar');
	 var nombre = document.getElementById('nombre');
	 var pais = document.getElementById('pais');
	 var email = document.getElementById('email');
	 var coment = document.getElementById('coment');

	boton.addEventListener('click',function(){
			
			validarnombre();
			validaremail();
			validarcomentario();

	})




function validarnombre()
{
	 
	var valorNombre = document.getElementById("nombre").value;
	var expregN = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;

	if (!expregN.test(valorNombre))
   {
	   alert("Ingresar Correctamente el nombre");
	} 	
	email.focus();
}

function validaremail()
{	 	 
	var valorEmail = document.getElementById("email").value;
	var expregE = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

	if (!expregE.test(valorEmail))
   {
	   alert("Ingresar Correctamente el email");
	} 	
	coment.focus();


}

function validarcomentario()
{	 	 
	var valorComent = document.getElementById("coment").value;
	var expregC = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

	if (!expregC.test(valorComent))
   {
	   alert("comentario invalido");	
	} 	
	nombre.focus();


}