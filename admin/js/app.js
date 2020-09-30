  $(function () {
    $("#registros").DataTable({
      "responsive": true,
      "autoWidth": false,
      "pageLength": 10,
      "language" : {
        paginate : {
            next: 'Siguiente',
            previous: 'Anterior',
            last: 'Ultimo',
            first: 'Primero'
        },
        info: 'Mostrando _START_ a _END_ de _TOTAL_ resultados',
        emptyTable: 'No hay registros',
        infoEmpty: '0 Registros',
        search: 'Buscar:'
      }
    });

    $('#crear_registro_admin').attr('disabled', true);

    $('#repetir_password').on('input', function(){
        var password_nuevo = $('#password').val();
        
        if ($(this).val() == password_nuevo ) {
          $('#resultado_password').text('Correcto');
          $('#resultado_password').parents('.form-group').addClass('has-success').removeClass('has-error');
          $('input#resultado').parents('.form-group').addClass('has-success').removeClass('has-error');
          $('#crear_registro_admin').attr('disabled', false);
        } else {
          $('#resultado_password').text('No son iguales');
          $('#resultado_password').parents('.form-group').addClass('has-error').removeClass('has-success');
          $('input#resultado').parents('.form-group').addClass('has-error').removeClass('has-success');
          $('#crear_registro_admin').attr('disabled', true);
        }
    });


    //Initialize Select2 Elements
    $('.select2').select2()

        //Initialize Select2 Elements
    $('.select2bs4').select2({
          theme: 'bootstrap4'
    })
 
    // Fecha Evento
    $('#fecha').datetimepicker({
        format: 'L'
    });
 
    // Hora
    $('#timepicker').datetimepicker({
        format: 'LT'
    });

    $('#reservationdate').datetimepicker({
      format: 'MM/DD/YYYY'
    });

    $('#icono').iconpicker();
  });
