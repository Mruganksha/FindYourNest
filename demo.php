<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Check if the form is submitted
if (isset($_SERVER["REQUEST_METHOD"]) && $_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = trim($_POST['firstName']);
    $lastName = trim($_POST['lastName']);
    $gender = trim($_POST['gender']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    $number = trim($_POST['number']);

    // Validate required fields (You can add more validation as needed)
    if (empty($firstName) || empty($lastName) || empty($gender) || empty($email) || empty($password) || empty($number)) {
        die("All fields are required.");
    }

    // Database connection
    $conn = new mysqli('localhost', 'root', '', 'tests');

    // Check connection
    if ($conn->connect_error) {
        die("Connection Failed: " . $conn->connect_error);
    } else {
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        $stmt = $conn->prepare("INSERT INTO registrations (firstName, lastName, gender, email, password, number) VALUES (?, ?, ?, ?, ?, ?)");
        
        // Check if prepare() returns false
        if ($stmt === false) {
            die("Prepare failed: " . $conn->error);
        }

        // Bind parameters
        $stmt->bind_param("ssssss", $firstName, $lastName, $gender, $email, $hashed_password, $number);
        
        // Execute statement
        if ($stmt->execute()) {
            echo "Registration successful.";
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close statement and connection
        $stmt->close();
        $conn->close();
    }
} else {
    echo "Invalid request method.";
}

