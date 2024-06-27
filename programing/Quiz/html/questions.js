const choicesList = document.querySelectorAll('ol.choices li');

choicesList.forEach(li => li.addEventListener('click', checkClickedChoice));


function checkClickedChoice(event) {
    // クリックされた答えの要素(liタグ)
    const clickedAnwerElement = event.currentTarget;

    console.log(clickedAnwerElement.dataset.answer);

    // 選択した答え(A, B, C, D)
    const selectedChoice = clickedAnwerElement.dataset.answer;

    // clickedAnswerElementの親の要素のなかにセレクターol.choicesと一致するものがあったらclosestで取得できる
    const questionId = clickedAnwerElement.closest('ol.choices').dataset.id;

    // フォームデータの入れ物を作る
    const formData = new FormData();

    // 送信したい値を追加
    formData.append('id', questionId);
    formData.append('selectedChoice', selectedChoice);

    // xhr = XMLHttpRequestの頭文字
    const xhr = new XMLHttpRequest();

    // HTTPメソッドをPOSTに指定、送信するURLを指定
    xhr.open('POST', 'answer.php');

    // フォームデータをサーバーに送信
    xhr.send(formData);

    // loadendはリクエストが完了したときにイベントが発生する
    xhr.addEventListener('loadend', function(event) {
        /** @type {XMLHttpRequest} */
        const xhr = event.currentTarget;

        // リクエストが成功したかステータスコードで確認
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.response);
            // 答えが正しいか判定
            const result = response.result;
            const correctAnswer = response.correctAnswer;
            const correctAnswerValue = response.correctAnswerValue;
            const explanation = response.explanation;

            // 画面表示
            displayResult(result, correctAnswer, correctAnswerValue, explanation);
        } else {
            // エラー
            alert('Error: 回答データの取得に失敗しました。')
        }
    });
}

function displayResult(result, correctAnswer, correctAnswerValue, explanation) {
    // メッセージを入れる変数を用意
    let message;

    // カラーコードを入れる変数を用意
    let answerColorCode;

    // 答えを判定
    if (result) {
        // 答えが正しかった
        message = '正解です！おめでとう';
        answerColorCode = '';
    } else {
        // 間違った答えだった時
        message = 'ざんねん！不正解です！'
        answerColorCode = 'red';
    }

    alert(message);

    // 正解の内容をHTMLに取り込む
    document.querySelector('span#answer').innerHTML = correctAnswer + '. ' + correctAnswerValue;
    document.querySelector('span#explanation').innerHTML = explanation;

    // 間違った時だけ色が変わる
    document.querySelector('#answer').style.color = answerColorCode;

    // 答え全体を表示
    document.querySelector('#section-correct-answer').style.display = 'block';
}