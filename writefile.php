<?php
// $myFile = "data.json";
// $fh = fopen($myFile, 'r+') or die("can't open file");
// $stringData = $_GET["data"];
// fwrite($fh, $stringData);
// fclose($fh);


$stringData = $_GET["data"];

$file = 'data.json';
$data = json_decode(file_get_contents($file), true);


$d = $stringData[0];
array_push($data, $d);
file_put_contents($file, json_encode($data));
?>