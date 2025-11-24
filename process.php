<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $fullname = htmlspecialchars($_POST['fullname']);
    $email = htmlspecialchars($_POST['email']);
    $mobile = htmlspecialchars($_POST['mobile']);
    $reason = htmlspecialchars($_POST['reason']);
    $findme = isset($_POST['findme']) ? implode(", ", $_POST['findme']) : "";

    $conn = new mysqli("localhost", "root", "", "contact_db");

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO messages (fullname, email, mobile, reason, findme) VALUES ('$fullname', '$email', '$mobile', '$reason', '$findme')";

    if ($conn->query($sql) === TRUE) {
        echo "<h2>Hello $fullname</h2>";
        echo "<p>Your request was sent</p>";
        echo "<p>I will contact you on $email</p>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>