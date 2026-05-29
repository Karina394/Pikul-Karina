<?php

header("Content-Type: application/json");

$file = "users.json";

if (!file_exists($file)) {
    file_put_contents($file, "[]");
}

$users = json_decode(file_get_contents($file), true);

$method = $_SERVER['REQUEST_METHOD'];

$input = json_decode(file_get_contents("php://input"), true);

if ($method == "GET") {
    echo json_encode($users);
    exit;
}

if ($method == "POST") {

    if (!isset($input['name']) || !isset($input['email'])) {
        echo json_encode(["message" => "Name and email required"]);
        exit;
    }

    $newUser = [
        "id" => count($users) + 1,
        "name" => $input['name'],
        "email" => $input['email']
    ];

    $users[] = $newUser;

    file_put_contents($file, json_encode($users, JSON_PRETTY_PRINT));

    echo json_encode($newUser);
    exit;
}

if ($method == "PUT") {

    $url = explode('/', $_SERVER['REQUEST_URI']);
    $id = end($url);

    foreach ($users as &$user) {
        if ($user['id'] == $id) {

            if (isset($input['name'])) {
                $user['name'] = $input['name'];
            }

            if (isset($input['email'])) {
                $user['email'] = $input['email'];
            }

            file_put_contents($file, json_encode($users, JSON_PRETTY_PRINT));

            echo json_encode($user);
            exit;
        }
    }

    echo json_encode(["message" => "User not found"]);
    exit;
}

if ($method == "DELETE") {

    $url = explode('/', $_SERVER['REQUEST_URI']);
    $id = end($url);

    foreach ($users as $key => $user) {
        if ($user['id'] == $id) {

            unset($users[$key]);
            $users = array_values($users);

            file_put_contents($file, json_encode($users, JSON_PRETTY_PRINT));

            echo json_encode(["message" => "User deleted"]);
            exit;
        }
    }

    echo json_encode(["message" => "User not found"]);
    exit;
}

echo json_encode(["message" => "Invalid request"]);