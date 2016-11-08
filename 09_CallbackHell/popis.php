<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE);

$mjesta = json_decode(file_get_contents("popis_naselja_u_republici_hrvatskoj.json"));

foreach ($mjesta as $mjesto) {
    if($mjesto->ID===$_GET["ID"]){
        echo json_encode($mjesto);
        break;
    }
}