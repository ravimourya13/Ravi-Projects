<?php

$servername ="localhost";
$username="root";
$password="";
$dbname="car";
$conn= mysqli_connect($servername , $username , $password , $dbname);
if (!$conn) {
    echo"Error" .$mysqli_connect_error();
}else{
    echo "";
}

?>
