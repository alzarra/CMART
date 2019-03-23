<?php
ob_start();

//phpinfo();

$servername = "127.0.0.1";
$username = "root";
$Password = "csci427";
$dbname = "mysql";
// Create connection
$conn = new mysqli($servername, $username, $Password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

//$sql = "INSERT INTO mrTable (user, password)
//VALUES ('John', 'Doe')"; testing database to print out hard coded value

$sql = "INSERT INTO mrTable (user,password)
 Values('".$_POST["user"]."','".$_POST["password"]."')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
 //   echo  Values('".$_POST["user"]."','".$_POST["password"]."')"; printing out ne data from database
 header("Location:stats.html");

} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
    
}

$conn->close();

?>