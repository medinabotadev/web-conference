(function () {
  'use strict';

  console.log("DOM fully loaded and parsed");

  var regalo = document.getElementById('regalo');
  document.addEventListener('DOMContentLoaded', function () {

    if (document.getElementById('mapa')) {
    var map = L.map('mapa').setView([10.167943, -64.690901], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([10.167943, -64.690901]).addTo(map)
      .bindPopup('GDLWebCamp <br> Boletos ya disponibles')
      .openPopup();
    }
    // CAMPOS DATOS USUARIOS 
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');

    // CAMPOS PASES
    var pase_dia = document.getElementById('pase_dia');
    var pase_dosdias = document.getElementById('pase_dosdias');
    var pase_completo = document.getElementById('pase_completo');

    //BOTONES Y DIVs
    var calcular = document.getElementById('calcular');
    var errorDiv = document.getElementById('error');
    var btnRegistro = document.getElementById('btnRegistro');
    var lista_productos = document.getElementById('lista-productos');
    var suma = document.getElementById('suma-total');

    // EXTRAS

    var camisas = document.getElementById('camisa_evento');
    var etiquetas = document.getElementById('etiquetas');

    if(document.getElementById('calcular')){
    calcular.addEventListener('click', calcularMontos);

    pase_dia.addEventListener('blur', mostrarDias);
    pase_dosdias.addEventListener('blur', mostrarDias);
    pase_completo.addEventListener('blur', mostrarDias);

    nombre.addEventListener('blur', validarCampos);
    apellido.addEventListener('blur', validarCampos);
    email.addEventListener('blur', validarCampos);
    email.addEventListener('blur', validarMail);

    btnRegistro.disabled = true;

    function validarCampos() {
      if (this.value == '') {
        errorDiv.style.display = 'block';
        errorDiv.innerHTML = "Este campo es obligatorio";
        this.style.border = '1px solid red';
        errorDiv.style.border = '1px solid red';
        errorDiv.style.textAlign = 'center'
      } else {
        errorDiv.style.display = 'none';
        this.style.border = '1px solid #00ff00';
      };
    };

    function validarMail() {
      if (this.value.indexOf('@') > -1) {
        errorDiv.style.display = 'none';
        this.style.border = '1px solid #00ff00';
      } else {
        errorDiv.style.display = 'block';
        errorDiv.innerHTML = "Debe tener al menos un @";
        this.style.border = '1px solid red';
        errorDiv.style.border = '1px solid red';
        errorDiv.style.textAlign = 'center'
      };
    }


    function calcularMontos(event) {
      event.preventDefault();
      if (regalo.value === '') {
        alert("Debes elegir un regalo");
        regalo.focus();
      } else {
        var boletosDia = parseInt(pase_dia.value, 10) || 0,
          boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
          boletoCompleto = parseInt(pase_completo.value, 10) || 0,
          cantCamisas = parseInt(camisas.value, 10) || 0,
          cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

        var totalPagar = (boletosDia * 30) +
          (boletos2Dias * 45) +
          (boletoCompleto * 50) +
          ((cantCamisas * 10) * .93) +
          (cantEtiquetas * 2);


        var listadoProductos = [];

        if (boletosDia == 1) {
          listadoProductos.push(boletosDia + ' Pase por dia');
        } else if (boletosDia > 1) {
          listadoProductos.push(boletosDia + ' Pases por dia');
        }

        if (boletos2Dias == 1) {
          listadoProductos.push(boletos2Dias + ' Pase por 2 días');
        } else if (boletos2Dias > 1) {
          listadoProductos.push(boletos2Dias + ' Pases por 2 días');
        }

        if (boletoCompleto == 1) {
          listadoProductos.push(boletoCompleto + ' Pase completos');
        } else if (boletoCompleto > 1) {
          listadoProductos.push(boletoCompleto + ' Pases completos');
        }

        if (cantCamisas == 1) {
          listadoProductos.push(cantCamisas + ' Camisa');
        } else if (cantCamisas > 1) {
          listadoProductos.push(cantCamisas + ' Camisas');
        }

        if (cantEtiquetas == 1) {
          listadoProductos.push(cantEtiquetas + ' Etiqueta');
        } else if (cantEtiquetas > 1) {
          listadoProductos.push(cantEtiquetas + ' Etiquetas');
        };

        lista_productos.style.display = "block";
        lista_productos.innerHTML = '';
        for (var i = 0; i < listadoProductos.length; i++) {
          lista_productos.innerHTML += listadoProductos[i] + '<br/>'
        }

        suma.innerHTML = '$ ' + totalPagar.toFixed(2)

        btnRegistro.disabled = false;
        document.getElementById('total_pedido').value = totalPagar.toFixed(2)
      }
    }

    function mostrarDias() {
      var boletosDia = parseInt(pase_dia.value, 10) || 0,
        boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
        boletoCompleto = parseInt(pase_completo.value, 10) || 0;

      var diasElegidos = [];

      if (boletosDia > 0) {
        diasElegidos.push('viernes')
        console.log(diasElegidos)
      } else {
        viernes.style.display = 'none';
      }
      if (boletos2Dias > 0) {
        diasElegidos.push('viernes', 'sabado')
        console.log(diasElegidos)
      } else {
        sabado.style.display = 'none';
      }
      if (boletoCompleto > 0) {
        diasElegidos.push('viernes', 'sabado', 'domingo')
        console.log(diasElegidos)
      } else {
        domingo.style.display = 'none';
      }

      for (var i = 0; i < diasElegidos.length; i++) {
        document.getElementById(diasElegidos[i]).style.display = 'block';
      }

    }
  }
  }); //DOM CONTENT LOADED

})();


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