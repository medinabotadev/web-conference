<section class="seccion contenedor">
    <?php
    // Try catch para hacer conexcion a la base de datos
    try {
        require_once('includes/funciones/bd_conexion.php');
        $sql = " SELECT * FROM `invitados` ";
        $resultado = $conn->query($sql);
        //query es una funcion de php para hacer la consulta
    } catch (\Exception $e) {
        echo $e->getMessage();
    }
    ?>
    <section class="invitados contenedor seccion">
        <h2>Nuestros Invitados</h2>
        <ul class="lista-invitados clearfix">

            <?php while ($invitados = $resultado->fetch_assoc()) { ?>
                <li>
                    <div class="invitado">
                        <a class="invitado-info" href="#invitado<?php echo $invitados['invitado_id'] ?>">
                            <img src="img/invitados/<?php echo $invitados['url_imagen'] ?>" alt="invitado">
                            <p><?php echo $invitados['nombre_invitado'] . " " . $invitados['apellido_invitado'] ?></p>
                        </a>
                    </div>
                </li>
                <div style="display: none;">
                    <div class="invitado-info" id="invitado<?php echo $invitados['invitado_id'] ?>">
                        <h2><?php echo $invitados['nombre_invitado'] . " " . $invitados['apellido_invitado'] ?></h2>
                        <img src="img/invitados/<?php echo $invitados['url_imagen'] ?>" alt="invitado">
                        <p><?php echo $invitados['descripcion'] ?></p>
                    </div>
                </div>
            <?php } ?>

        </ul>
    </section>

    <?php
    $conn->close();
    ?>

</section>
<?php
// 1. Crear la conexion
// 2. Escribir la consulta en SQL
// 3. Realizar la consulta
// 4. Imprimir los resultados
// 5. Cerrar la conexion
?>