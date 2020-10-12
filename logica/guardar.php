<?php
    require 'conexion.php';

    $nombre = $_POST['nombre'];
    $unidad = $_POST["opciones"];
    $cantidad =$_POST["cantidad"];
    $costo=$_POST["costo"];

    
    $insertar = "INSERT INTO costos(concepto,cantidad,unidad,costo) VALUES('$nombre','$cantidad','$unidad','$costo')";

    $query = mysqli_query($conectar, $insertar);

    if($query){
        echo 'correcto';
        console.log($nombre);
        
    }else{
        echo "incorrecto";
    }
?>