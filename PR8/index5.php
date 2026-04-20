<<?php
// ім'я, прізвище, рік народження
$first_name = "Анна";
$last_name = "Іваненко";
$year_of_birth = 2007;

// поточний рік
$current_year = date("Y");

// обчислення віку
$age = $current_year - $year_of_birth;

$full_name = $first_name . " " . $last_name;

echo "1. Повне ім'я: $full_name<br>";
echo "1. Вік: $age<br><br>";

// масив країн
$countries = ["Україна", "Польща", "Німеччина", "Франція"];

echo "2. Країни:<br>";

echo "<ol>";
foreach ($countries as $country) {
    echo "<li>$country</li>";
}
echo "</ol>";

echo "<br>";

// міста і їх населення
$cities = [
    "Київ" => 3000000,
    "Львів" => 720000,
    "Берлін" => 3600000,
    "Варшава" => 1800000
];

echo "3. Міста з населенням > 1 млн:<br>";

foreach ($cities as $city => $population) {
    if ($population > 1000000) {
        echo "$city - $population<br>";
    }
}

echo "<br>";

// парне чи непарне
$number = 8;

echo "4. Число $number:<br>";

if ($number % 2 == 0) {
    echo "Парне<br>";
} else {
    echo "Непарне<br>";
}

echo "<br>";

// високосний рік
$year = date("Y");

echo "5. Перевірка року $year:<br>";

if ($year % 4 == 0) {
    echo "Високосний рік<br>";
} else {
    echo "Не високосний рік<br>";
}
?>