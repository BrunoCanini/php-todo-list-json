<?php 
header('Content-Type: application/json');

$tasks = file_get_contents("dati.json");

// se voglio modificare i dati json:
$tasksDati = json_decode( $tasks, true);

// $tasksDati[] = "ulteriore scritta";

if(isset($_POST["newTask"])){
    $tasksDati[] = $_POST["newTask"];

    file_put_contents("dati.json", json_encode($tasksDati));
}

$tasks = json_encode($tasksDati);

echo $tasks;

?>