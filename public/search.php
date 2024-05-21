<?php
$host = "localhost";
$user = "u754894839_blog";
$password = "My_blog1";
$db_name = "u754894839_blog";

$conn = mysqli_connect($host, $user, $password, $db_name);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM posts";
$result = mysqli_query($conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
  $items[] = $row;
}

echo json_encode($items);

$conn->close();
?>
