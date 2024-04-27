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


// Consulta de todos los registros de la tabla usuarios
if (isset($_GET["consultar"])) {
    $sqlUsuarios = mysqli_query($conexionBD, "SELECT * FROM `mensajes` ORDER BY id DESC;");
    $usuarioscv = mysqli_fetch_all($sqlUsuarios, MYSQLI_ASSOC);
    echo json_encode($usuarioscv);
    exit();
}

//Inserta un nuevo registro y recepciona en método post los datos de nombre y correo
if(isset($_GET["insertar"])){
    $data = json_decode(file_get_contents("php://input"));

    $nombre=$data->nombre;
    $mensaje=$data->mensaje;
    $telefono=$data->telefono;
    $email=$data->email;
    $fecha=$data->fecha;
    

    // Comenzar una transacción
    if (empty($nombre) || empty($mensaje)) {
        echo json_encode(["error" => "Error: Todos los campos son obligatorios"]);
    } else {
        $conexionBD->begin_transaction();

        try {
           
                // El DNI no existe, insertar un nuevo registro
                $insert_sql = "INSERT INTO mensajes (nombre,mensaje,telefono,email,fecha) VALUES ('$nombre','$mensaje','$telefono','$email','$fecha')";
                $conexionBD->query($insert_sql);
                echo json_encode(["success" => 1, "message" => "Nuevo mensaje insertado"]);

            // Confirmar la transacción
            $conexionBD->commit();
        } catch (Exception $e) {
            // Si ocurre algún error, revertir la transacción
            $conexionBD->rollback();
            echo json_encode(["error" => "Error al procesar la solicitud: " . $e->getMessage()]);
        }
    
        exit();
    }
}

if (isset($_GET["borrar_mensaje"])) {

    $data = json_decode(file_get_contents("php://input"));
    
    $id = $data->id;

    $sqlUsuarios = mysqli_query($conexionBD, "DELETE FROM `mensajes` WHERE id='$id';");

     if($sqlUsuarios){
         echo json_encode(["success"=>1]);
         exit();
     }
     else{  echo json_encode(["success"=>0]); }
 }
// Cerrar conexión
$conexionBD->close();

?>