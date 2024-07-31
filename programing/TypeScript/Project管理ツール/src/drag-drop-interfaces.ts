namespace App {
  export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
  }

  export interface DragTarget {
    // 有効なドロップ対象かどうかをブラウザに伝えるためのEventHandler(特定の処理をしなければドロップできない)
    dragOverHandler(event: DragEvent): void;
    // ここでデータの更新や画面の更新を行う[実際にドロップが起きた時に呼ばれるEventHandler(dragOverHandlerがドロップを許可したら最終的に呼ばれる)]
    dropHandler(event: DragEvent): void;
    // ビジュアル上のフィードバックを行う時に便利なEventHandler(ユーザーが何かをドラッグした時に背景色を変えたりする、キャンセルされた場合などに表示を元に戻すことができる)
    dragLeaveHandler(event: DragEvent): void;
  }
}
// Drag & Drop
