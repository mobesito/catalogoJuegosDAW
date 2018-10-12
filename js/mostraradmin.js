//funcion anonima al cargar la pagina
window.onload=function(){
    //llamar a la funcion que muestra los juegos
    leerMostrar();

    //aqui eliminamos del session storage un item que usamos temporalmente, para que cuando se pulse el boton editar de algun juego
    //recupere los datos de ese juego en especifico, al cargar esta pagina se elimina para que se pueda actualizar al pulsar editar en otro juego... 
    sessionStorage.removeItem(0);


}

//funcion para borrar items(del local storage)
function borrarItem(clave){
    //si se pulsa aceptar en la siguiente alerta, se ejecuta el codigo dentro...      
    if(confirm('Seguro que desea eliminar este item?')){
        //removeitem sirve para eliminar un item del local o sessionstorage, en este caso del localstorage con la clave(key) que le pasamos como parametro...
        localStorage.removeItem(clave);
        //volvemos a llamar a la funcion que muestra los juegos para que se actualice despues de haber borrado un juego
        leerMostrar();
    }  
}

//esta funcion se ejecuta al pulsar el boton editar de un juego, y lo que hace es guardar en el sessionStorage la clave(key) del juego en el cual fue presionado su respectivo
//boton editar, para luego usar este key en la pagina editar y asi poder recuperar sus datos, ya que no es posible pasar variables entre paginas lo hacemos de esta forma...
function obtenerKey(clave){
    //la key de este item siempre sera 1 y el valor que contiene sera la key del juego donde fue presioando el boton editar...
    sessionStorage.setItem(0,clave);
    
}

//funcion que muestra los juegos
function leerMostrar(){
    //enlazamos a una etiqueta section con id zonadatos que se encuentra en su respectivo documento html... dentro de esta se mostraran los juegos
    zonadatos = document.getElementById('zonadatos');
    
    //aqui limpiamos para que no se repitan datos, por ejemplo al borrar un juego se vuelve a llamar la funcion, por lo que hay que volver a llamar la funcion...
    zonadatos.innerHTML = '';
    //un ciclo for que recorrera todos los juegos dentro del localstorage, con la propiedad .length 
    for(i=0;i<localStorage.length;i++){
       
       //asignamos a una variable el id(key) del juego que se esta recorriendo en este ciclo, para que cuando se presione borrar o editar envie la 
       //respectiva key del juego donde se necesite en este caso la funcion borrarItem() y obtenerKey().
         clave = localStorage.key(i);
        //asignamos a una variable el objeto el cual contiene los datos del juego que se esta recorriendo
        //aqui usamos el JSON.parse para que devuelva sus propiedades de objeto, ya que el localStorage no puede almacenar objetos se almacena como string
        //por lo tanto aqui devolvemos sus propiedades de objeto... 
        var objetos =JSON.parse(localStorage.getItem(clave));
        
        //asigamos a las respectivas variables los valores del juego que se esta recorriendo
        //aqui la variable 'objetos' ya tiene las propiedades de objeto, por lo que podemos acceder a ellas como si fuera un objeto.
        var titulo_juego = objetos.titulo;
        var descrip_juego = objetos.descripcion;
        var portada_juego = objetos.portada;

        
        
        zonadatos.innerHTML += '<div class="row" id="juego">'+
                          '<div class="col-md-6">'+
                          '<a href="#">'+
                          '<img class="img-fluid rounded mb-3 mb-md-0" src="'+portada_juego+'" alt="No se encontro la imagen...">'+
                          '</a>'+
                          '</div>'+
                          '<div class="col-md-5">'+
                          '<h3>'+titulo_juego+'</h3>'+
                          '<p>'+descrip_juego+'</p>'+
                          '<button type="button" onclick="borrarItem(\''+clave+'\')" class="btn btn-danger">Borrar</button>'+
                          '<a class="btn btn-primary"  href="modificar.html"  onclick="obtenerKey(\''+clave+'\')" >Editar</a>'+
                          '</div>'+
                          '</div>'+
                          '<br>'+
                          '<hr>';
                         
    }  

}