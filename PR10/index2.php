<?php
$name = htmlspecialchars(trim($_POST["name"]));
$age = htmlspecialchars(trim($_POST["age"]));
$gender = $_POST["gender"] ?? "Не вибрано";
$hobbies = $_POST["hobbies"] ?? [];
$description = htmlspecialchars(trim($_POST["description"]));

$error = "";
if (!is_numeric($age) || $age < 10 || $age > 100) {
    $error = "Вік має бути числом від 10 до 100!";
}
if ($error) {
    echo $error;
    echo "<br><a href='index.html'>Повернутись назад</a>";
} else {
    echo "Дані успішно отримано<br><br>";

    echo "Ім'я: $name <br>";
    echo "Вік: $age <br>";
    echo "Стать: $gender <br>";

    echo "Хобі: ";
    if (!empty($hobbies)) {
        echo implode(", ", array_map("htmlspecialchars", $hobbies));
    } else {
        echo "немає";
    }

    echo "<br>Опис: $description <br>";
}
