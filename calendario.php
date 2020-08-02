<?php include_once 'includes/templates/header.php'; ?>

<section class="seccion contenedor">
    <h2>Calendario de eventos</h2>

    <?php
    // Try catch para hacer conexcion a la base de datos
    try {
        require_once('includes/funciones/bd_conexion.php');
        $sql = " SELECT evento_id, nombre_evento, fecha_evento, hora_evento, cat_evento, icono, nombre_invitado, apellido_invitado ";
        $sql .= " FROM eventos ";
        $sql .= " INNER JOIN categoria_evento ";
        $sql .= " ON eventos.id_cat_evento = categoria_evento.id_categoria ";
        $sql .= " INNER JOIN invitados ";
        $sql .= " ON eventos.id_inv = invitados.invitado_id ";
        $sql .= " ORDER BY evento_id ";
        $resultado = $conn->query($sql);
        //query es una funcion de php para hacer la consulta
    } catch (\Exception $e) {
        echo $e->getMessage();
    }
    ?>

    <div class="calendario">
        <?php
        $calendario = array();
        // Fetch assoc es una funcion que imprime los resultados
        while ($eventos = $resultado->fetch_assoc()) {

            // Obtiene la fecha del arreglo
            $fecha = $eventos['fecha_evento'];

            $evento = array(
                'titulo' => $eventos['nombre_evento'],
                'fecha' => $eventos['fecha_evento'],
                'hora' => $eventos['hora_evento'],
                'categoria' => $eventos['cat_evento'],
                'icono' => 'fa' . " " . $eventos['icono'],
                'invitado' => $eventos['nombre_invitado'] . " " . $eventos['apellido_invitado']
            );

            $calendario[$fecha][] = $evento;

        ?>

        <?php } //While 
        ?>

        <?php
        // Imprime todo los eventos
        foreach ($calendario as $dia => $lista_eventos) { ?>
            <h3>
                <i class="fa fa-calendar"></i>
                <?php
                setlocale(LC_TIME, 'spanish.UTF-8');
                echo strftime("%A, %d de %B del %Y", strtotime($dia));
                ?>
            </h3>

            <?php foreach ($lista_eventos as $evento) { ?>
                <div class="dia">
                    <p class="titulo"><?php echo $evento['titulo']; ?></p>

                    <p class="hora"><i class="fa fa-clock-o" aria-hidden="true"></i>
                        <?php echo $evento['fecha'] . " " . $evento['hora']; ?>
                    </p>

                    <p>
                        <i class="<?php echo $evento['icono'] ?>" aria-hidden="true"></i>
                        <?php echo $evento['categoria']; ?></p>

                    <p>
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <?php echo $evento['invitado']; ?></p>
                    </p>
                </div>    
            <?php } //fin foreach eventos?>
        <?php } //fin foreach por dias ?>
    </div>
<?php
$conn->close();
//Esto sirve para cerrar la conexion con la base de datos
?>
</section>

<?php
// 1. Crear la conexion
// 2. Escribir la consulta en SQL
// 3. Realizar la consulta
// 4. Imprimir los resultados
// 5. Cerrar la conexion
?>
<?php include_once 'includes/templates/footer.php'; ?>