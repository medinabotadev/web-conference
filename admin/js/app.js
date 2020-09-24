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
  });
