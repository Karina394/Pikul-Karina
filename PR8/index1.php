<?php
$name = "Анна"; // ім'я 
$age = 18; // вік
$is_student = true; // чи є студентом 

// Виведення у вигляді речення
echo "Мене звати $name, мені $age років. ";
if ($is_student) {
    echo "Я є студентом.<br>";
} else {
    echo "Я не є студентом.<br>";
}

$numbers = [1, 2, 3, 4, 5]; // створення масиву
$sum = 0; // змінна для збереження суми

// Перебір масиву і обчислення суми
foreach ($numbers as $num) {
    $sum += $num;
}
echo "Сума чисел від 1 до 5: $sum <br>";


// Асоціативний масив
$user = [
    "name" => "Анна",
    "email" => "anna@gmail.com",
    "phone" => "+380123456789"
];

// Виведення у вигляді HTML-списку
echo "<ul>";
foreach ($user as $key => $value) {
    echo "<li>$key: $value</li>";
}
echo "</ul>";


// Перевірка віку
if ($age > 18) {
    echo "Вам більше 18 років.<br>";
} else {
    echo "Вам 18 або менше років.<br>";
}


// Оцінка
$grade = 85;

if ($grade >= 90 && $grade <= 100) {
    echo "Відмінно";
} elseif ($grade >= 70) {
    echo "Добре";
} elseif ($grade >= 50) {
    echo "Задовільно";
} else {
    echo "Незадовільно";
}
?>