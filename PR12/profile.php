<?php
session_start();
if (!isset($_SESSION['name']) || !isset($_SESSION['email'])) {
    header("Location: register.php");
    exit();
}

$name = $_SESSION['name'];
$email = $_SESSION['email'];

$cookie_email = isset($_COOKIE['user_email']) ? $_COOKIE['user_email'] : "немає";
?>

<!DOCTYPE html>
<html>
<head>
    <title>Профіль</title>
</head>
<body>

<h2>Профіль користувача</h2>

<p><strong>Ім'я:</strong> <?php echo $name; ?></p>
<p><strong>Email:</strong> <?php echo $email; ?></p>

<p>Ваш email запам'ятали: <?php echo $cookie_email; ?></p>

<br>
<a href="logout.php">
    <button>Вийти</button>
</a>

</body>
</html>