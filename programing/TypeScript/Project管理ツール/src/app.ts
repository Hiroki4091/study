// トリプルスラッシュ・ディレクティブ：TypeScriptへの特別な指示になる(ファイルの間の依存関係の宣言)
/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />

namespace App {
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
