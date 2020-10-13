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

  $.getJSON('servicio-registrados.php', function(data){
    console.log(data);
    var fecha_registro=[];
    var cantidad_registro=[]; 

    for(var i=0; i< data.length; i++){
         fecha_registro[i]=data[i].fecha;
         cantidad_registro[i]=data[i].cantidad;
    }
  
     console.log(fecha_registro);
  
     console.log(cantidad_registro);

var areaChartData = {
  labels  : fecha_registro,
  datasets: [
    {
      label               : 'Registrados',
      backgroundColor     : 'rgba(60,141,188,0.9)',
      borderColor         : 'rgba(60,141,188,0.8)',
      pointRadius          : true,
      pointColor          : '#FFFFFF',
      pointStrokeColor    : '#FFFFFF',
      pointRadius         : '3',
      pointHighlightFill  : '#fff',
      pointHighlightStroke: '#FFFFFF',
      data                : cantidad_registro
    }
  ]
}

var areaChartOptions = {
  maintainAspectRatio : false,
  responsive : true,
  legend: {
    display: true
  },
  scales: {
    xAxes: [{
      gridLines : {
        display : false,
      }
    }],
    yAxes: [{
      gridLines : {
        display : true,
      }
    }]
  }
}

var lineChartCanvas = $('#lineChart').get(0).getContext('2d')
var lineChartOptions = jQuery.extend(true, {}, areaChartOptions)
var lineChartData = jQuery.extend(true, {}, areaChartData)
lineChartData.datasets[0].fill = false;
/* lineChartData.datasets[1].fill = false; */
lineChartOptions.datasetFill = false

var lineChart = new Chart(lineChartCanvas, { 
  type: 'line',
  data: lineChartData, 
  options: lineChartOptions
})

})