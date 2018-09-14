//llamar las funciones con el manejador de eventos...
var boton = document.getElementById('btn-ingresar');
boton.addEventListener("click", function () {

if(validaringresos()==true){

    console.log(guardarJuegos(obtenerDatos()));
    console.log(crearJuego(obtenerDatos()));
    
    guardarLocalStorage();
    console.log(obtenerObjeto().titulo);
    
    alert('datos ingresados');
    leerMostrar();
    limpiarCampos();
    
}
//  getLocalStorage();
});

//Funcion obtiene los datos del formulario y los almacena en una matriz.
function obtenerDatos() {
    
    var juegos = [];
    juegos[0] = document.getElementById('id').value;
    juegos[1] = document.getElementById('nombre').value;
    juegos[2] = document.getElementById('descripcion').value;
    juegos[3] = document.getElementById('precio').value;
    juegos[4] = document.getElementById('fecha').value;
    juegos[5] = document.getElementById('portada').value;
    juegos[6] = document.getElementById('categoria').value;
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
    }

}
//funcion limpiar campos
function limpiarCampos(){
    document.getElementById('id').value='';
    document.getElementById('nombre').value='';
    document.getElementById('descripcion').value='';
    document.getElementById('precio').value='';
    document.getElementById('fecha').value='';
    document.getElementById('portada').value='';
}




//creamos objeto de tipo ClaseJuego que recibe como parametro los atributos de la clase juego y los datos del formulario
function crearJuego(juegos) {
    var juego1 = new ClaseJuego(juegos);
    return juego1;
       
}

//guardar en una matriz los objetos
var contenedor = [];
function guardarJuegos(juegos){
   
    contenedor.push(juegos);
    return contenedor;
}


//obtener el id que usaremos como key en el localstorage   
function getId(){
    indice = document.getElementById('id').value;
    return indice;
}


//obtenemos del localstorage el objeto y lo devolvemos a su valor original para poder usar sus propiedades.
function obtenerObjeto(){
    var variable =JSON.parse(localStorage.getItem(getId()));
    return variable;
}

//obtenemos los datos importantes del objeto para publicarlos luego en el documento.
function obtenerTitulo(){
var titulo = obtenerObjeto().titulo;
return titulo;
}

function obtenerDescripcion(){
var descripcion = obtenerObjeto().descripcion;
return descripcion;
}


function obtenerPrecio(){
var precio = obtenerObjeto().precio;
return precio;
}

function obtenerPortada(){
 var portada = obtenerObjeto().portada;
 return portada;
}

function obtenerCategoria(){
var categoria = obtenerObjeto().categoria;
return categoria;
}

//guardar en el logal storage con la key que ingrese de id en el formulario
function guardarLocalStorage(){
    var idparametro = getId();
    localStorage.setItem(idparametro,JSON.stringify(crearJuego(obtenerDatos())));
    
}

//funcion eliminar iteem
function borrarItem(clave){      
        if(confirm('Seguro que desea eliminar este item?')){
            localStorage.removeItem(clave);
            leerMostrar();
        }  
}


function leerMostrar(){
    var zonadatos = document.getElementById('zonadatos');
    zonadatos.innerHTML = '';
    for(i=0;i<localStorage.length;i++){
       var img = document.createElement('img');
       
        var clave = localStorage.key(i);
        var objetos =JSON.parse(localStorage.getItem(clave));
           
        var titulo_juego = objetos.titulo;
        var descrip_juego = objetos.descripcion;
        var portada_juego = objetos.portada;

        img.src = portada_juego;
        
        zonadatos.innerHTML += '<div class="row" id="juego">'+
                          '<div class="col-md-6">'+
                          '<a href="#">'+
                          '<img class="img-fluid rounded mb-3 mb-md-0" src=">'+img+'" alt="">'+
                          '</a>'+
                          '</div>'+
                          '<div class="col-md-5">'+
                          '<h3>'+titulo_juego+'</h3>'+
                          '<p>'+descrip_juego+'</p>'+
                          '<button type="button" onclick="borrarItem(\''+clave+'\')" class="btn btn-danger">Borrar</button>'+
                          '</div>'+
                          '</div>'+
                          '<br>'+
                          '<hr>';
                          
    }  

}


function validaringresos(){
    id = document.getElementById('id').value;
    nombre = document.getElementById('nombre').value;
    descripcion = document.getElementById('descripcion').value;   
    categoria = document.getElementById('categoria').value;

    if(id== ''){
        alert('Debe ingresar un id');
        document.getElementById('id').focus();
        document.getElementById('id').style.backgroundColor = '#FCE2D0';
        
        
        return false;
    }else if(nombre == ''){
        alert('Debe ingresar un nombre');
        document.getElementById('nombre').focus();
        document.getElementById('nombre').style.backgroundColor = '#FCE2D0';
        return false;
    }else if(descripcion ==''){
        alert('Debe ingresar una descripcion');
        document.getElementById('descripcion').focus();
        document.getElementById('descripcion').style.backgroundColor = '#FCE2D0';
        return false;
    }
    
    if(id.length>4){
        alert('El id es muy largo');
        return false;
    }else if(nombre.length>40){
        alert('el nombre es muy largo');
        return false;
    }else if(descripcion.length>300){
        alert('La descripcion sobrepasa el limite de caracteres');
        return false;
    }else if(isNaN(id)){
        alert('el id debe ser de tipo numerico');
        return false;
    }else{
        document.getElementById('id').style.backgroundColor = 'white';
        document.getElementById('nombre').style.backgroundColor = 'white';
        document.getElementById('descripcion').style.backgroundColor = 'white';
        return true;
    }
    
    
}