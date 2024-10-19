<?php
session_start();

$servername = "localhost";
$username = "root";     
$password = "";     
$dbname = "users";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$user_name = isset($_POST['username']) ? $_POST['username'] : '';
$phone = isset($_POST['phone']) ? $_POST['phone'] : '';
$errors = [];

if (empty($user_name)) {
    $errors['username'] = "Имя пользователя не может быть пустым";
}

if (empty($phone) || !preg_match('/^\+79\d{9}$/', $phone)) {
    $errors['phone'] = "Неправильный формат номера телефона";
}

$_SESSION['errors'] = $errors;

if (!empty($errors)) {
    header("Location: index.php");
    exit();
} else {
    $stmt = $conn->prepare("INSERT INTO users (username, phone) VALUES (?, ?)");
    $stmt->bind_param("ss", $user_name, $phone);

    if ($stmt->execute()) {
        header("Location: success.php");
        exit();
    } else {
        $_SESSION['errors'] = ['database' => "Ошибка базы данных: " . $stmt->error];
        header("Location: index.php");
        exit();
    }

    $stmt->close();
}

$conn->close();
