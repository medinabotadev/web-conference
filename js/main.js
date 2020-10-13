


$(function() {

  //LETTERING
  $('.nombre-sitio').lettering();

  // AGREGAR CLASE A MENU
  $('body.conferencia .navegacion-principal a:contains("Conferencia")').addClass('activo');
  $('body.calendario .navegacion-principal a:contains("Calendario")').addClass('activo');
  $('body.invitados .navegacion-principal a:contains("Invitados")').addClass('activo');
  //MENU FIJO
  var windowHeight = $(window).height();
  var barraAltura = $('.barra').innerHeight();

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();

    if(scroll > windowHeight){
      $('.barra-fondo').addClass('fixed');
      $('body').css({'margin-top': barraAltura+'px'})
    } else {
      $('.barra-fondo').removeClass('fixed');
      $('body').css({'margin-top': '0px'});
    }
  })

  // MENU RESPONSIVE
  $('.menu-movil').on('click', function(){
    $('.navegacion-principal').slideToggle();
  })


  // PROGRAMA DE CONFERENCIAS
  $('.programa-evento .info-curso:first').show();
  $('.menu-programa a:first').addClass('activo');

  $('.menu-programa a').on('click', function(){
    $('.menu-programa a').removeClass('activo')
    $('.ocultar').hide();
    $(this).addClass('activo');
    var enlace = $(this).attr('href');
    $(enlace).fadeIn(500);

    return false
  })

  // ANIMACION PARA LOS NUMEROS
  $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6 }, 2000);
  $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15 }, 2000);
  $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3 }, 2000);
  $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 9 }, 2000);

  // CUENTA REGRESIVA
  $('.cuenta-regresiva').countdown('2021/4/7 00:00:00', function(event){

    $('#dias').html(event.strftime('%D'));
    $('#horas').html(event.strftime('%H'));
    $('#minutos').html(event.strftime('%M'));
    $('#segundos').html(event.strftime('%S'));

  });

  // LLAMANDO PLUGIN DE COLORBOX

  $('.invitado-info').colorbox({
    inline: true,
    width: "50%",
  });
});