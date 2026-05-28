<?php
if (isset($_POST['lang'])) {
    $lang = $_POST['lang'];
    setcookie("lang", $lang, time() + (86400 * 30), "/"); 
    $_COOKIE['lang'] = $lang;
} else {
    $lang = $_COOKIE['lang'] ?? 'uk';
}

switch ($lang) {
    case 'en':
        setlocale(LC_TIME, 'en_US.UTF-8');
        $label = "Current date and time:";
        break;
    case 'de':
        setlocale(LC_TIME, 'de_DE.UTF-8');
        $label = "Aktuelles Datum und Uhrzeit:";
        break;
    case 'fr':
        setlocale(LC_TIME, 'fr_FR.UTF-8');
        $label = "Date et heure actuelles:";
        break;
    default:
        setlocale(LC_TIME, 'uk_UA.UTF-8');
        $label = "Поточна дата і час:";
}
$date = strftime("%A, %d %B %Y %H:%M:%S");

$ip = $_SERVER['REMOTE_ADDR'];
?>

<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>PHP Cookie Language</title>
</head>
<body>

<h2>Вибір мови</h2>

<form method="post">
    <select name="lang">
        <option value="uk" <?= $lang == 'uk' ? 'selected' : '' ?>>Українська</option>
        <option value="en" <?= $lang == 'en' ? 'selected' : '' ?>>English</option>
        <option value="de" <?= $lang == 'de' ? 'selected' : '' ?>>Deutsch</option>
        <option value="fr" <?= $lang == 'fr' ? 'selected' : '' ?>>Français</option>
    </select>
    <button type="submit">Зберегти</button>
</form>

<hr>

<h3><?= $label ?></h3>
<p><b><?= $date ?></b></p>

<h3>IP користувача:</h3>
<p><?= $ip ?></p>

</body>
</html>