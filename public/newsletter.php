
<?php
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$message = 'I am the message';

$servername = "localhost";
$database = "u754894839_my_database";
$username = "u754894839_my_database";
$password = "My_database1";
 
// Create connection
 
$conn = mysqli_connect($servername, $username, $password, $database);

$sql = "INSERT INTO emmaskitchen (firstName, lastName, email) VALUES ('$firstName', '$lastName', '$email')";

mysqli_query($conn, $sql);

mysqli_close($conn);
?>

<?php
// Send email to Emma
$emailBody = "
    <html>
    <head>
    <title>$email is contacting you</title>
    </head>
    <body style=\"background-color:#fafafa;\">
    <div style=\"padding:20px;\">
    Form details: <span style=\"color:#888\"></span><br>
    <br>
    Name: <span style=\"color:#888\">$firstName $lastName</span>
    <br>
    Email: <span style=\"color:#888\">$email</span>
    <br>
    Message: <div style=\"color:#888\">$message</div>
    </div>
    </body>
    </html>
    ";
$headers = 	'From: Contact Form <emmafang@emmafang.com>' . "\r\n" .
"Reply-To: $email" . "\r\n" .
"MIME-Version: 1.0\r\n" .
"Content-Type: text/html; charset=iso-8859-1\r\n";
$to = '977784327@qq.com';
$subject = 'Form Submission';
mail($to, $subject, $emailBody, $headers)
?>

<?php
// Send email to users
$emailBody = "
    <html>
    <head>
    <title>Submission was successful</title>
    </head>
    <body style=\"background-color:#fafafa;\">
    <div style=\"padding:20px;\">
    Thank you for contacting me!<br>
    <br>
    Form details: <span style=\"color:#888\"></span>
    <br>
    Name: <span style=\"color:#888\">$firstName $lastName</span>
    <br>
    Email: <span style=\"color:#888\">$email</span>
    <br>
    Message: <div style=\"color:#888\">$message</div>
    </div>
    </body>
    </html>
    ";
$to = 'emmafang@emmafang.com';
$headers = 	'From: Contact Form <emmafang@emmafang.com>'. "\r\n" .
"Reply-To: $to" . "\r\n" .
"MIME-Version: 1.0\r\n" .
"Content-Type: text/html; charset=iso-8859-1\r\n";
$subject = 'Submission was successful';
mail($email, $subject, $emailBody, $headers)
?>
