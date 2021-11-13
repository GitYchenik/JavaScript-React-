<?php
$_post = json_decode(file_get_contents("php://input"), true); //что бы работать с  json файлами
echo var_dump($_POST);      //что бы видеть пост команты (от клиент)
