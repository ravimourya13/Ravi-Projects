<?php
session_start();
session_destroy();
header("Location:login.php");
?>
<a href="logout.php" class="btn btn-outline-danger">Logout</a>