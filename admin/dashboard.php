<?php
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
                    <h1>Dashboard</h1>
                </div>
                <div class="col-sm-6">
                </div>
            </div>
        </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
        <h2 class="content-header">Graficas</h2>
        <div class="row">
            <div class="col-12">
                <div class="card card-info">
                    <div class="card-header">
                        <h3 class="card-title">Datos de registros</h3>
                    </div>
                    <div class="card-body">
                        <div class="chart">
                            <div class="chartjs-size-monitor">
                                <div class="chartjs-size-monitor-expand">
                                    <div class=""></div>
                                </div>
                                <div class="chartjs-size-monitor-shrink">
                                    <div class=""></div>
                                </div>
                            </div>
                            <canvas id="lineChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%; display: block; width: 333px;" width="333" height="250" class="chartjs-render-monitor"></canvas>
                        </div>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div><!-- /.col-12 -->
        </div><!-- /.row -->
</div><!-- /.card-body -->

<h2 class="page-header">Resumen de registros</h2>
<div class="row">
    <div class="col-lg-3 col-6">
        <?php
        $sql = " SELECT COUNT(ID_Registrado) AS registros FROM registrados ";
        $resultado = $conn->query($sql);
        $registrados = $resultado->fetch_assoc();
        ?>
        <!-- small card -->
        <div class="small-box bg-info">
            <div class="inner">
                <h3><?php echo $registrados['registros']; ?></h3>

                <p>Total Registrados</p>
            </div>
            <div class="icon">
                <i class="fas fa-user-plus"></i>
            </div>
            <a href="lista-registrados.php" class="small-box-footer">
                Mas informacion <i class="fas fa-arrow-circle-right"></i>
            </a>
        </div>
    </div>

    <div class="col-lg-3 col-6">
        <?php
        $sql = " SELECT COUNT(ID_Registrado) AS registros FROM registrados WHERE pagado = 1 ";
        $resultado = $conn->query($sql);
        $registrados = $resultado->fetch_assoc();
        ?>
        <!-- small card -->
        <div class="small-box bg-yellow">
            <div class="inner">
                <h3><?php echo $registrados['registros']; ?></h3>

                <p>Total pagados</p>
            </div>
            <div class="icon">
                <i class="fas fa-users"></i>
            </div>
            <a href="lista-registrados.php" class="small-box-footer">
                Mas informacion <i class="fas fa-arrow-circle-right"></i>
            </a>
        </div>
    </div>

    <div class="col-lg-3 col-6">
        <?php
        $sql = " SELECT COUNT(ID_Registrado) AS registros FROM registrados WHERE pagado = 0 ";
        $resultado = $conn->query($sql);
        $registrados = $resultado->fetch_assoc();
        ?>
        <!-- small card -->
        <div class="small-box bg-red">
            <div class="inner">
                <h3><?php echo $registrados['registros']; ?></h3>

                <p>Total no pagados</p>
            </div>
            <div class="icon">
                <i class="fas fa-user-times"></i>
            </div>
            <a href="lista-registrados.php" class="small-box-footer">
                Mas informacion <i class="fas fa-arrow-circle-right"></i>
            </a>
        </div>
    </div>

    <div class="col-lg-3 col-6">
        <?php
        $sql = " SELECT SUM(total_pagado) AS ganancias FROM registrados WHERE pagado = 1 ";
        $resultado = $conn->query($sql);
        $registrados = $resultado->fetch_assoc();
        ?>
        <!-- small card -->
        <div class="small-box bg-green">
            <div class="inner">
                <h3>$ <?php echo $registrados['ganancias']; ?></h3>

                <p>Ganancias totales</p>
            </div>
            <div class="icon">
                <i class="fas fa-money-bill-alt"></i>
            </div>
            <a href="lista-registrados.php" class="small-box-footer">
                Mas informacion <i class="fas fa-arrow-circle-right"></i>
            </a>
        </div>
    </div>
</div>

<h2 class="page-header">Regalos</h2>

<div class="row">
    <div class="col-lg-3 col-6">
        <?php
        $sql = " SELECT COUNT(total_pagado) AS etiquetas FROM registrados WHERE pagado = 1 AND regalo = 2 ";
        $resultado = $conn->query($sql);
        $regalo = $resultado->fetch_assoc();
        ?>
        <!-- small card -->
        <div class="small-box bg-maroon">
            <div class="inner">
                <h3><?php echo $regalo['etiquetas']; ?></h3>
                <p>Etiquetas</p>
            </div>
            <div class="icon">
                <i class="fas fa-gift"></i>
            </div>
            <a href="lista-registrados.php" class="small-box-footer">
                Mas informacion <i class="fas fa-arrow-circle-right"></i>
            </a>
        </div>
    </div>

    <div class="col-lg-3 col-6">
        <?php
        $sql = " SELECT COUNT(total_pagado) AS plumas FROM registrados WHERE pagado = 1 AND regalo = 3 ";
        $resultado = $conn->query($sql);
        $regalo = $resultado->fetch_assoc();
        ?>
        <!-- small card -->
        <div class="small-box bg-purple-active">
            <div class="inner">
                <h3><?php echo $regalo['plumas']; ?></h3>
                <p>Plumas</p>
            </div>
            <div class="icon">
                <i class="fas fa-gift"></i>
            </div>
            <a href="lista-registrados.php" class="small-box-footer">
                Mas informacion <i class="fas fa-arrow-circle-right"></i>
            </a>
        </div>
    </div>

    <div class="col-lg-3 col-6">
        <?php
        $sql = " SELECT COUNT(total_pagado) AS pulseras FROM registrados WHERE pagado = 1 AND regalo = 1 ";
        $resultado = $conn->query($sql);
        $regalo = $resultado->fetch_assoc();
        ?>
        <!-- small card -->
        <div class="small-box bg-teal">
            <div class="inner">
                <h3><?php echo $regalo['pulseras']; ?></h3>
                <p>Pulseras</p>
            </div>
            <div class="icon">
                <i class="fas fa-gift"></i>
            </div>
            <a href="lista-registrados.php" class="small-box-footer">
                Mas informacion <i class="fas fa-arrow-circle-right"></i>
            </a>
        </div>
    </div>
</div>
</section>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->

<?php
include_once 'templates/footer.php';
?>