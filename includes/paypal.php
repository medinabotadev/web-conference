<?php
require 'paypal/autoload.php';

define('URL_SITIO', 'http://localhost/gdlwebcamp-pract');
$apiContext = new \PayPal\Rest\ApiContext(
    new \PayPal\Auth\OAuthTokenCredential(
        'AdIhBSR6K9azk8GUprVnwWa9Aev_vSSPajsOLkSCfjXzeXEw2-9MhkWbySQNZ8z2G_2t5mBoJgxFV89Z', // CLIENTE ID
        'ECQ0l4wcItoAwyMiB3Bp_v3edK4WNEf4jM2hSrP1leptr9LFEDYrlf91bwNGaoWrO_pV_oJmFv7S4dik' // SECRET 
    )
);
?>