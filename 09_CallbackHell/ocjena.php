<?php

switch ($_POST["mjesto"]) {
    case "Osijek":
        echo 5;
        break;
    case "Zagreb":
        echo 4;
        break;
    default:
        echo 0;
        break;
}