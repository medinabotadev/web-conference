$(document).ready(function(){
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
                      setTimeout(function(){
                        window.location.href = 'admin-area.php';
                      }, 2000)
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
})