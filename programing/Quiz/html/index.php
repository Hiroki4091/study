<?php

require __DIR__ . '/../lib/functions.php';


$dataList = fetchAll()[0];

// !$dataがtrueだったらここでphpのスクリプトが終了する
if (!$dataList) {
    loadTemplate('404');
}

$questions = [];
foreach ($dataList as $data) {
    $questions[] = generateFormattedData($data);
}

$assignData = [
    'questions' => $questions,
];

// ファイルを読み込む
loadTemplate('index', $assignData);