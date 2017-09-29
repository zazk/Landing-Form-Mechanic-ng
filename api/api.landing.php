<?php
// process.php
header('Access-Control-Allow-Origin: *');
 header('Access-Control-Allow-Headers: Content-Type');
 header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
// LESSQL

// Connection
require_once("./LessQL/Database.php");
require_once("./LessQL/Result.php");
require_once("./LessQL/Row.php");


$dsn = 'mysql:host=localhost;dbname=brushlee_mecanico';
$username = 'brushlee_mecanic';
$password = 'mecanico';
$options = array(
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
);

$pdo = new PDO($dsn, $username, $password, $options);

$db = new LessQL\Database( $pdo );
$result = $db->mecanicos();
$valid_fields = array(
  'nombres',
  'apellidopaterno',
  'apellidomaterno',
  'celular',
  'email',
  'fechanacimiento',
  'telefonofijo',
  'distritovives',
  'educacion',
  'distritotrabajas',
  'nombretaller',
  'direcciontaller',
  'cargotaller',
  'funcionestaller',
  );

//print_r( json_decode( $_POST['data'])  );
$statement = $result->insert( json_decode( $_POST['data'] , true) );


// Manage Data
$errors = array();  // array to hold validation errors
$data = array();        // array to pass back data
// validate the variables ========
if (empty($_POST['name']))
  $errors['name'] = 'Name is required.';

if (empty($_POST['superheroAlias']))
  $errors['superheroAlias'] = 'Superhero alias is required.';

// return a response ==============
$data['rows'] = $db->mecanicos()->fetchAll() ;
// response if there are errors
if ( ! empty($errors)) {

  // if there are items in our errors array, return those errors
  $data['success'] = false;
  $data['errors']  = $errors;
} else {

  // if there are no errors, return a message
  $data['success'] = true;
  $data['message'] = 'Success!';
}

// return all our data to an AJAX call
echo json_encode($data);
