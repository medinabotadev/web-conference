<?php
  $id = $_GET['id'];

  if (!filter_var($id, FILTER_VALIDATE_INT)) {
    die("Error!");
  }
include_once 'funciones/sesiones.php';
include_once 'funciones/funciones.php';
include_once 'templates/header.php';
include_once 'templates/barra.php';
include_once 'templates/navegacion.php';
?>

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>Editar Categorias de eventos</h1>
                </div>
                <div class="col-sm-6">
                </div>
            </div>
        </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">

        <!-- Default box -->
        <!-- general form elements -->
        <div class="card card-primary">
            <div class="card-header">
                <h3 class="card-title">Editar categorias de eventos</h3>
            </div>
            <!-- /.card-header -->
            <?php
                $sql = " SELECT * FROM categoria_evento WHERE id_categoria = $id ";
                $resultado = $conn->query($sql);
                $categoria = $resultado->fetch_assoc();
            ?>
            <!-- form start -->
            <form role="form" name="guardar-registro" id="guardar-registro" method="POST" action="modelo-categoria.php">
                <div class="card-body">
                    <div class="form-group">
                        <label for="nombre_categoria">Nombre categoria:</label>
                        <input type="text" class="form-control" id="nombre_categoria" name="nombre_categoria" placeholder="Categoria" value="<?php echo $categoria['cat_evento']; ?>">
                    </div>
                    <div class="form-group">
                        <label>Icono</label>
                        <div class="input-group">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <i class="fas fa-address-book"></i>
                                </div>
                            </div>
                            <input type="text" id="icono" name="icono" class="form-control pull-right" placeholder="fa-icon" value="<?php echo $categoria['icono']; ?>">
                        </div>
                    </div>
                    <!-- /.card-body -->

                    <div class="card-footer">
                        <input type="hidden" name="registro" value="actualizar">
                        <input type="hidden" name="id_registro" value="<?php echo $id ?>">
                        <button type="submit" class="btn btn-primary" id="crear_registro">Añadir</button>
                    </div>
            </form>
        </div>
</div>
<!-- /.card -->

</section>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->

<?php
include_once 'templates/footer.php';
?>