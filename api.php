<?php 
header('Content-Type: application/json');

$tasks = file_get_contents("dati.json");

// se voglio modificare i dati json:
$tasksDati = json_decode( $tasks, true);

// $tasksDati[] = "ulteriore scritta";

$tasks = json_encode($tasksDati);

echo $tasks;

?>