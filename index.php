<?php
$users = [
    ["name" => "Anna", "age" => 17, "email" => "anna@gmail.com"],
    ["name" => "Oleh", "age" => 20, "email" => "oleh@gmail.com"],
    ["name" => "Roman", "age" => 19, "email" => "roman@gmail.com"],
    ["name" => "Ira", "age" => 16, "email" => "ira@gmail.com"],
    ["name" => "Dmytro", "age" => 22, "email" => "dmytro@gmail.com"],
    ["name" => "Olha", "age" => 18, "email" => "olha@gmail.com"],
    ["name" => "Max", "age" => 15, "email" => "max@gmail.com"],
    ["name" => "Sofia", "age" => 21, "email" => "sofia@gmail.com"],
    ["name" => "Andrii", "age" => 23, "email" => "andrii@gmail.com"],
    ["name" => "Katya", "age" => 17, "email" => "katya@gmail.com"]
];

function filterAdults($users) {
    return array_filter($users, fn($u) => $u["age"] >= 18);
}

function compareByNameLength($a, $b) {
    return strlen($a["name"]) <=> strlen($b["name"]);
}

$filtered = filterAdults($users);
usort($filtered, "compareByNameLength");
?>

<table border="1" cellpadding="5">
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
    </tr>
    <?php foreach ($filtered as $user): ?>
    <tr>
        <td><?= $user["name"] ?></td>
        <td><?= $user["age"] ?></td>
        <td><?= $user["email"] ?></td>
    </tr>
    <?php endforeach; ?>
</table>