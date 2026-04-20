<?php
// Вартість товрів
$item1 = 200; // товар 1
$item2 = 150; // товар 2
$item3 = 300; // товар 3

// загальна сума
$total = $item1 + $item2 + $item3;

echo "1. Загальна вартість покупки: $total грн<br>";

// масив фільмів
$movies = [
    "Inception",
    "Titanic",
    "Avatar",
    "Interstellar",
    "The Matrix"
];

echo "2. Улюблені фільми:<br>";

foreach ($movies as $film) {
    echo $film . "<br>";
}

echo "<br>";

// асоціативний масив даних користувача
$user = [
    "login" => "admin",
    "password" => "1234",
    "email" => "admin@gmail.com"
];

echo "3. Дані користувача:<br>";

foreach ($user as $key => $value) {
    echo "$key: $value<br>";
}

echo "<br>";

// знижка
echo "4. Підсумкова сума:<br>";

$finalTotal = $total;

if ($total > 500) {
    $discount = $total * 0.10; // 10% знижка
    $finalTotal = $total - $discount;

    echo "Застосовано знижку 10%<br>";
}

echo "До оплати: $finalTotal грн<br><br>";

// перевірка логіна і пароля
echo "5. Перевірка входу:<br>";

$inputLogin = "admin";
$inputPassword = "1234";

// правильні дані
$correctLogin = "admin";
$correctPassword = "1234";

if ($inputLogin == $correctLogin && $inputPassword == $correctPassword) {
    echo "Доступ дозволено\n";
} else {
    echo "Невірний логін або пароль\n";
}
?>