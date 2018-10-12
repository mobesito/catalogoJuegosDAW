//se ejecutara si se hace click en el boton ingresar del admin
//llamar las funciones con el manejador de eventos...
$(document).ready(function(){
    $('#btn-ingresar').click(function() {

        if(validaringresos()==true){
        
            
            console.log(crearJuego(obtenerDatos()));
            
            guardarLocalStorage();
            console.log(obtenerObjeto().titulo);
            
            alert('datos ingresados');
            //leerMostrar();
            limpiarCampos();
            
        }
        //  getLocalStorage();
        });
});

//Funcion obtiene los datos del formulario y los almacena en una matriz.
function obtenerDatos() {
    
    var juegos = [];
   // juegos[0] = document.getElementById('id').value;
   juegos[0] = $('#id').val(); 
   juegos[1] = $('#nombre').val();
   juegos[2] = $('#descripcion').val();
   juegos[3] = $('#precio').val();
   juegos[4] = $('#fecha').val();
   try{
    filename = document.getElementById('portada').files[0].name;
    juegos[5] = "img/"+filename;
   }catch(error){
       alert('seleccione una imagen de portada');
   }
   juegos[6] = $('#categoria').val();
   checkbox = document.getElementById('postHome');
    if(checkbox.checked == true){
        juegos[7] = true;
    }else if(checkbox.checked == false){
        juegos[7] = false;
    }
   
    return juegos;

}


//clase juego
class ClaseJuego {
    //constructor obtiene parametro los campos del formulario
    constructor(juegos = []) {
        //this.id_juego = juegos[0];
        this.titulo = juegos[1];
        this.descripcion = juegos[2];
        this.precio = juegos[3];
        this.fecha_lanzamiento = juegos[4];
        this.portada = juegos[5];
        this.categoria = juegos[6];
        this.inicio = juegos[7];
    }

}
//funcion limpiar campos
function limpiarCampos(){
    $('#id').val('');
    $('#nombre').val('');
    $('#descripcion').val('');
    $('#precio').val('');
    $('#fecha').val('');
    $('#portada').val('');
   
}

//creamos objeto de tipo ClaseJuego que recibe como parametro los atributos de la clase juego y los datos del formulario
function crearJuego(juegos) {
    var juego1 = new ClaseJuego(juegos);
    return juego1;
       
}

//obtenemos del localstorage el objeto y lo devolvemos a su valor original para poder usar sus propiedades.
function obtenerObjeto(){
    var variable =JSON.parse(localStorage.getItem(getId()));
    return variable;
}


//guardar en el logal storage con la key que ingrese de id en el formulario
function guardarLocalStorage(){
    var idparametro = getId();
    localStorage.setItem(idparametro,JSON.stringify(crearJuego(obtenerDatos())));
    
}


//obtener el id que usaremos como key en el localstorage   
function getId(){
    indice = $('#id').val();
    return indice;
}

//funcion para validar los campos de texto al ingresar un nuevo juego
function validaringresos(){
    id = $('#id').val();
    nombre = $('#nombre').val();
    descripcion = $('#descripcion').val();   
    categoria = $('#categoria').val();

    if(id== ''){
        alert('Debe ingresar un id');
        $('#id').focus();
       $('#id').css('backgroundColor','#FCE2D0');//.backgroundColor = '#FCE2D0';
        
        
        return false;
    }else if(nombre == ''){
        alert('Debe ingresar un nombre');
       $('#nombre').focus();
        $('#nombre').css('backgroundColor','#FCE2D0');
        return false;
    }else if(descripcion ==''){
        alert('Debe ingresar una descripcion');
       $('#descripcion').focus();
        $('#descripcion').css('backgroundColor','#FCE2D0');
        return false;
    }
    
    if(id.length>4){
        alert('El id es muy largo');
        return false;
    }else if(nombre.length>35){
        alert('el nombre es muy largo');
        return false;
    }else if(descripcion.length>300){
        alert('La descripcion sobrepasa el limite de caracteres');
        return false;
    }else if(isNaN(id)){
        $('#id').focus();
        $('#id').css('backgroundColor','#FCE2D0');
        alert('el id debe ser de tipo numerico');
        return false;
    }else{
        $('#id').css('backgroundColor','white');
        $('#nombre').css('backgroundColor','white');
        $('#descripcion').css('backgroundColor','white');
        return true;
    }
    
    
}