$(document).ready(function(){
    $('#crear-admin').on('submit', function(e){
        e.preventDefault();

        var datos = $(this).serializeArray();
        
        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: datos,
            dataType: 'json',
            success: function (data) {
                var resultado = data;
                if(resultado.respuesta == 'exito'){
                    Swal.fire(
                        'Correcto',
                        'El administrador se creo correctamente',
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

    $('#login-admin').on('submit', function(e){
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
                if(resultado.respuesta == 'exitoso'){
                    Swal.fire(
                        'Login Correcto',
                        'Bienvenido(a) '+resultado.usuario+'!',
                        'success'
                      )
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Usuario o password incorrectos',
                        text: 'Something went wrong!'
                      })
                }
            }
        });
    });
});