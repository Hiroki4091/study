<?php

require __DIR__ . '/../lib/functions.php';

$id = escape($_GET['id'] ?? '');
$data = fetchById($id)[0];

// !$dataがtrueだったらここでphpのスクリプトが終了する
if (!$data) {
    loadTemplate('404');
}

$formattedData = generateFormattedData($data);

$assignData = [
    'id' => $formattedData['id'],
    'question' => $formattedData['question'],
    'answers' => $formattedData['answers'],
];

// ファイルを読み込む
loadTemplate('question', $assignData);