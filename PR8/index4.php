<?php
// максимум і мінімум
$a = 15;
$b = 8;

if ($a > $b) {
    $max = $a;
    $min = $b;
} else {
    $max = $b;
    $min = $a;
}

echo "1. Максимум: $max<br>";
echo "1. Мінімум: $min<br><br>";

// cереднє арифметичне
$numbers = [10, 20, 30, 40, 50];

$sum = 0;
$count = count($numbers);

foreach ($numbers as $num) {
    $sum += $num;
}

$average = $sum / $count;

echo "2. Середнє арифметичне: $average<br>";

// студенти і їх бали
$students = [
    "Іван Петренко" => 85,
    "Марія Коваль" => 78,
    "Олег Сидоренко" => 92
];

echo "3. Студенти з балом > 80:<br>";

foreach ($students as $name => $grade) {
    if ($grade > 80) {
        echo "$name - $grade<br>";
    }
}

echo "<br>";

// кратність числа 3 або 5
$num = 12;

echo "4. Перевірка числа $num:<br>";

if ($num % 3 == 0 || $num % 5 == 0) {
    echo "Число кратне 3 або 5<br>";
} else {
    echo "Число НЕ кратне 3 або 5<br>";
}

echo "<br>";

// таблиця множення 
echo "5. Таблиця множення для 7:<br>";

for ($i = 1; $i <= 10; $i++) {
    echo "7 x $i = " . (7 * $i) . "<br>";
}
?>