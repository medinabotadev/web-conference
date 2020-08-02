<?php
$conn = new mysqli('localhost', 'root', '751602', 'gdlwebcamp');

if($conn->$connect_error){
    if($conn->connect_error){
        echo $error->$conn->connect_error;
    }
}
?>