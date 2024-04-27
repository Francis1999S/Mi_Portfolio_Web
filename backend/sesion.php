<?php
// Acceso restringido al backend-
//    $allowed_origin = "https://tinogasta.gob.ar";
//    header("Access-Control-Allow-Origin: $allowed_origin");

// Acceso sin restricción al backend-
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET,POST");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servidor = "localhost"; $usuario = "c19511_backend"; $contrasenia = "NBK0y3fLTiZc"; $nombreBaseDatos = "c19511_trabajo";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);

// Establecer la codificación de caracteres
mysqli_set_charset($conexionBD, "utf8mb4");

 if(isset($_GET['LogIn'])) {
    $data = json_decode(file_get_contents("php://input"));
    $user = $data->user;
    $pass = $data->pass;
    
    // Consulta SQL para verificar si el usuario existe en la tabla "credenciales"
    $sql = "SELECT * FROM credenciales WHERE user = '$user' LIMIT 1";
    $result = $conexionBD->query($sql);

    // Verificar si se encontró algún resultado
    if ($result->num_rows > 0) {
        // Obtener el primer registro
        $row = $result->fetch_assoc();
        // Comparar la contraseña proporcionada con la contraseña almacenada
        if ($row['pass'] === $pass) {
            // Usuario y contraseña coinciden
            echo json_encode(array("VOKuPiADBLSW5D2a60VKZWcF0wfCSY4vwjPric" => true));
        } else {
            // La contraseña no coincide
            echo json_encode(array("VOKuPiADBLSW5D2a60VKZWcF0wfCSY4vwjPric" => false));
        }
    } else {
        // El usuario no existe
        echo json_encode(array("VOKuPiADBLSW5D2a60VKZWcF0wfCSY4vwjPric" => false));
    }

}

// Cerrar conexión
$conexionBD->close();

?>