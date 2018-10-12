window.onload = function(){
    leerMostrar();
}

function leerMostrar(){
    var zonadatos = document.getElementById('zonainicio');
    zonadatos.innerHTML = '';
    for(i=0;i<localStorage.length;i++){
       
       
        clave = localStorage.key(i);
       var objetos =JSON.parse(localStorage.getItem(clave));
          
       var titulo_juego = objetos.titulo;
       var descrip_juego = objetos.descripcion;
       var portada_juego = objetos.portada;
       var categoria = objetos.categoria;
       var inicio = objetos.inicio;
       var precio = objetos.precio;

       
       if(inicio == true){
        zonadatos.innerHTML += '<div class="col-lg-4 col-md-6 mb-4" id="juego">'+
                                   '<div class="card h-100">'+
                                   '<a href="#"><img class="card-img-top" src="'+portada_juego+'" alt="no se encontro la imagen..."></a>'+
                                   '<div class="card-body">'+
                                   '<h4 class="card-title">'+
                                     '<a href="#">'+titulo_juego+'</a>'+
                                   '</h4>'+
                                   '<h5>'+'$'+precio+'</h5>'+
                                   '<p class="card-text">'+descrip_juego+'</p>'+
                                   '</div>'+
                                   '<div class="card-footer">'+
                                     '<small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>'+
                                   '</div>'+
                                   '</div>'+
                                   '</div>';  

       }
      
                         
   }  

}

