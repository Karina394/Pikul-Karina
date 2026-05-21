<?php
$transactions = [
    ["amount" => 100, "type" => "in", "date" => "2024-01-01"],
    ["amount" => 50, "type" => "out", "date" => "2024-01-02"],
    ["amount" => 200, "type" => "in", "date" => "2024-01-03"],
    ["amount" => 75, "type" => "out", "date" => "2024-01-04"],
    ["amount" => 30, "type" => "out", "date" => "2024-01-05"],
    ["amount" => 150, "type" => "in", "date" => "2024-01-06"],
    ["amount" => 60, "type" => "out", "date" => "2024-01-07"],
    ["amount" => 90, "type" => "in", "date" => "2024-01-08"],
    ["amount" => 120, "type" => "out", "date" => "2024-01-09"],
    ["amount" => 40, "type" => "out", "date" => "2024-01-10"]
];

function calculateTotal($transactions, $filter) {
    $filtered = array_filter($transactions, $filter);
    $total = 0;
    foreach ($filtered as $t) {
        $total += $t["amount"];
    }
    return $total;
}

function isOutgoing($transaction) {
    return $transaction["type"] === "out";
}

$totalOut = calculateTotal($transactions, "isOutgoing");
?>

<table border="1" cellpadding="5">
    <tr>
        <th>Total Outgoing</th>
    </tr>
    <tr>
        <td><?= $totalOut ?></td>
    </tr>
</table>