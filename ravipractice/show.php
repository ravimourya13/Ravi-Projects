<?php

include 'connection.php';
session_start();
if (!isset($_SESSION["username"])) {
    header("Location: login.php");
    exit();
}

$sql= " SELECT * FROM info";
$result = $conn->query($sql);
 

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Show</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <center>
    <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
        </tr>

        <?php
        
        if ($result->num_rows > 0) {
            

            while ($row = $result->fetch_assoc()) {
                echo "<tr>
                <td>{$row ['name']}</td>
                <td>{$row ['email']}</td>
                </tr>";

            }
            
        }else{
            echo "No data found";
        }
        $conn->close();
        
        
        ?>

    </table>
    </center>
</body>
</html>