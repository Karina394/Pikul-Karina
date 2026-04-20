<?php
// Арифметичні операції
$a = 5;
$b = 10;

// Обчислення
$sum = $a + $b; // сума
$diff = $a - $b; // різниця
$mult = $a * $b; // добуток
$div = $a / $b; // ділення

echo "1. Арифметика:<br>";
echo "Сума: $sum<br>";
echo "Різниця: $diff<br>";
echo "Добуток: $mult<br>";
echo "Ділення: $div<br><br>";

// Масив днів тижня
$days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// 3-й і 5-й день 
echo "2. Дні тижня:<br>";
echo "3-й день: " . $days[2] . "<br>";
echo "5-й день: " . $days[4] . "<br><br>";

// Асоціативний масив товарів
$products = [
    "Phone" => 15000,
    "Laptop" => 30000,
    "Headphones" => 2000
];
echo "3. Товари:<br>";

foreach ($products as $name => $price) {
    echo "$name - $price грн<br>";
}

echo "<br>";

// 4. Switch (день тижня)
$day = "Monday";
echo "4. Switch:<br>";

switch ($day) {
    case "Monday":
        echo "Початок тижня<br>";
        break;
    case "Friday":
        echo "Кінець робочого тижня<br>";
        break;
    case "Saturday":
    case "Sunday":
        echo "Вихідний<br>";
        break;
    default:
        echo "Звичайний день<br>";
}

// 5. Парне / непарне число
$x = 15;

echo "<br>5. Перевірка числа:<br>";

if ($x % 2 == 0) {
    echo "Число парне<br>";
} else {
    echo "Число непарне<br>";
}
?>