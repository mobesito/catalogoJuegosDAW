var botonguardar = document.getElementById('btn-guardar');
   
   indice = sessionStorage.getItem(0);
   var variable =JSON.parse(localStorage.getItem(indice));
   var titulo = variable.titulo;
   var descripcion = variable.descripcion;
   var precio = variable.precio;
   var fecha = variable.fecha_lanzamiento;
   var portada = variable.portada;
   var categoria = variable.categoria;
   var inicio = variable.inicio;
   botonguardar.onclick = function(){
    console.log(crearJuego2(obtenerDatos2()));
    if(confirm('Desea guardar los cambios realizados?')){
        guardarLocalStorage();
    }  
   

}   //llenamos los campos con sus valores predeterminados para modificarlos facilmente...
   document.getElementById('modnombre').setAttribute('value',titulo);
   document.getElementById('moddescripcion').value = descripcion;
   document.getElementById('modprecio').setAttribute('value',precio);
   document.getElementById('modfecha').setAttribute('value',fecha);
   //document.getElementById('modportada').setAttribute('value',portada);
   document.getElementById('modcategoria').value = categoria;
   if(inicio == true){
       document.getElementById('modPostHome').checked = true;
   }else if(inicio == false){
       document.getElementById('modPostHome').checked = false;
   }
    
 //guardar en el logal storage con la key que ingrese de id en el formulario
function guardarLocalStorage(){
    var idparametro = indice;
    localStorage.setItem(idparametro,JSON.stringify(crearJuego2(obtenerDatos2())));
    
}  
  

 function obtenerDatos2() {
    var juegos = [];
    juegos[0] = indice;
    juegos[1] = $('#modnombre').val();
    juegos[2] = $('#moddescripcion').val();
    juegos[3] = $('#modprecio').val();
    juegos[4] = $('#modfecha').val();

    try{
        juegos[5]  = "img/"+document.getElementById('modportada').files[0].name;

    }catch{
        juegos[5] = portada;    
    }

    juegos[6] = $('#modcategoria').val();
    checkbox = document.getElementById('modPostHome');
    if(checkbox.checked == true){
        juegos[7] = true;
    }else if(checkbox.checked == false){
        juegos[7] = false;
    }
    return juegos;

}
//clase juego
class ClaseJuego {
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

function crearJuego2(juegos) {
    var juego1 = new ClaseJuego(juegos);
    return juego1;
}


