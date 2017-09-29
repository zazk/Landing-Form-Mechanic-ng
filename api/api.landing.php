<?php
// process.php
header('Access-Control-Allow-Origin: *');

// LESSQL

// Connection
error_reporting(E_ALL);
ini_set('display_errors', 1);
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

$statement = $result->insert( array(
  'nombres' => 'Prueba Nombres 1',
  'apellidopaterno' => 'Prueba Nombres 1',
  'apellidomaterno' => 'Prueba Nombres 1',
  'celular' => 'Prueba Nombres 1',
  'email' => 'Prueba Nombres 1',
  'fechanacimiento' => '2010-10-10',
  'telefonofijo' => 'Prueba Nombres 1',
  'distritovives' => 'Prueba Nombres 1',
  'educacion' => 'Prueba Nombres 1',
  ) );

print_r($db->mecanicos()->fetchAll() );

// Manage Data
$errors = array();  // array to hold validation errors
$data = array();        // array to pass back data
// validate the variables ========
if (empty($_POST['name']))
  $errors['name'] = 'Name is required.';

if (empty($_POST['superheroAlias']))
  $errors['superheroAlias'] = 'Superhero alias is required.';

// return a response ==============

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
