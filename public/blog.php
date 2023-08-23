<?php
header("Access-Control-Allow-Origin: http://localhost:64582");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$database = "u754894839_my_database";
$username = "u754894839_my_database";
$password = "My_database1";

// Connect to the database
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Retrieve posts from the database
$sql = "SELECT * FROM posts";
$result = mysqli_query($conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
  $items[] = $row;
}

echo json_encode($items);
// Close connection
mysqli_close($conn);
?>
