
//buscador con jQuery
$(document).ready(function(){
    $("#buscador").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#contenedor-juegos #juego").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
  