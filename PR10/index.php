<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $login = $_POST["login"];
    $password = $_POST["password"];
    $confirm = $_POST["confirm_password"]; 

    if (!filter_var($login, FILTER_VALIDATE_REGEXP, [
        "options" => ["regexp" => "/^[a-zA-Z0-9]+$/"]
    ])) {
        echo "<p style='color:red;'>Логін може містити тільки букви і цифри!</p>";
        exit;
    }

    if ($password !== $confirm) {
        echo "<p style='color:red;'>Паролі не співпадають!</p>";
        exit;
    }

    if ($login != false && $password == $confirm) {
        echo "<p style='color:green;'>Реєстрація успішна!</p>";
    } 