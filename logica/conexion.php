<?php
    $host ="localhost";
    $user = "root";
    $clave ="";
    $bd = "formulario";

    $conectar = new mysqli ($host,$user,$clave,$bd);
    if(!$conectar){
        echo "no conecto";
    }else{
        echo "si conecto";
    }
?>