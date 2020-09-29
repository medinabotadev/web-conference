$(document).ready(function(){
    $('#guardar-registro').on('submit', function(e){
        e.preventDefault();

        var datos = $(this).serializeArray();
        
        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: datos,
            dataType: 'json',
            success: function (data) {
                console.log(data);
                var resultado = data;
                if(resultado.respuesta == 'exito'){
                    Swal.fire(
                        'Correcto',
                        'Se guardo correctamente',
                        'success'
                      )
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!'
                      })
                }
            }
        });
    });

    // ELIMINAR UN REGISTRO
    $('.borrar_registro').on('click', function(e){
        e.preventDefault();

        var id = $(this).attr('data-id');
        var tipo = $(this).attr('data-tipo');

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            $.ajax({
                type: "post",
                url: "modelo-"+tipo+".php",
                data: {
                    'id' : id,
                    'registro' : 'eliminar'
                },
                success: function (data) {
                    console.log(data);
                    var resultado = JSON.parse(data);
                    jQuery('[data-id="'+resultado.id_eliminado+'"]').parents('tr').remove();
                    
            if (result.isConfirmed) {
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
              }
                }
            });
          })

    });
});