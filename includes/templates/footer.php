<footer class="site-footer">
    <div class="flexbox-footer contenedor">
      <div class="footer-informacion">
        <h3>Sobre <span>GdlWebCamp</span></h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque incidunt ducimus quas officia iusto rem
          soluta. Quaerat natus eum et odio reiciendis! Mollitia optio nostrum odit ea aliquam. Esse, quae!
        </p>
      </div>

      <div class="ultimos-tweets">
        <h3>Ultimos <span>Tweets</span></h3>
        <a class="twitter-timeline" data-lang="es" data-height="400" href="https://twitter.com/chuitojemb?ref_src=twsrc%5Etfw">Tweets by chuitojemb</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>

      <div class="menu">
        <h3>Redes <span>Sociales</span></h3>
        <nav class="redes-sociales">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-pinterest"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </nav>
      </div>
    </div>

    <p class="copyright">
      Todos los Derechos Reservados 2020 &copy;
    </p>
  </footer>

  <script src="js/jquery.js"></script>
  <script src="js/vendor/modernizr-3.11.2.min.js"></script>
  <script src="js/plugins.js"></script>
  <script src="js/jquery.animateNumber.min.js"></script>
  <script src="js/jquery.countdown.min.js"></script>
  <script src="js/jquery.lettering.js"></script>
  <script src="js/cotizador.js"></script>
  <?php
        $archivo = basename($_SERVER['PHP_SELF']);
        $pagina = str_replace(".php", "", $archivo);
        if($pagina == 'invitados' || $pagina == 'index'){
            echo '<script src="js/jquery.colorbox.js"></script>';
        } else if ($pagina == 'conferencia') {
           echo '<script src="js/lightbox.js"></script>';
        }
    ?>
  <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"></script>
  <script src="js/main.js"></script>

  <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
  <script>
    window.ga = function () {
      ga.q.push(arguments)
    };
    ga.q = [];
    ga.l = +new Date;
    ga('create', 'UA-XXXXX-Y', 'auto');
    ga('set', 'anonymizeIp', true);
    ga('set', 'transport', 'beacon');
    ga('send', 'pageview');

  </script>
  <script src="https://www.google-analytics.com/analytics.js" async></script>
</body>

</html>