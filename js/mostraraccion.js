window.onload = function(){
    leerMostrar();
}

function leerMostrar(){
    var zonadatos = document.getElementById('zonaaccion');
    zonadatos.innerHTML = '';
    for(i=0;i<localStorage.length;i++){
       
       
        clave = localStorage.key(i);
       var objetos =JSON.parse(localStorage.getItem(clave));
          
       var titulo_juego = objetos.titulo;
       var descrip_juego = objetos.descripcion;
       var portada_juego = objetos.portada;
       var categoria = objetos.categoria;

       
       if(categoria == 'Accion'){
        zonadatos.innerHTML += '<div class="row" id="juego">'+
        '<div class="col-md-6">'+
        '<a href="#">'+
        '<img class="img-fluid rounded mb-3 mb-md-0" src="'+portada_juego+'" alt="No se encontro la imagen...">'+
        '</a>'+
        '</div>'+
        '<div class="col-md-5">'+
        '<h3>'+titulo_juego+'</h3>'+
        '<p>'+descrip_juego+'</p>'+
        '</div>'+
        '</div>'+
        '<br>'+
        '<hr>';
       }
      
                         
   }  

}
