/// <reference path="base-component.ts" />

namespace App {
  // ProjectInput class
  export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    mandayInputElement: HTMLInputElement;

    // コンストラクタでは基本的に要素への参照を取得する作業を行う
    constructor() {
      super("project-input", "app", true, "user-input");

      // 入力項目への参照を取得する
      // inputタグのid(#title)
      this.titleInputElement = this.element.querySelector(
        "#title"
      ) as HTMLInputElement;
      this.descriptionInputElement = this.element.querySelector(
        "#description"
      ) as HTMLInputElement;
      this.mandayInputElement = this.element.querySelector(
        "#manday"
      ) as HTMLInputElement;
      this.configure();
    }

    // イベントリスナーの設定
    configure() {
      this.element.addEventListener("submit", this.submitHandler);
    }

    renderContent() {}

    private gatherUserInput(): [string, string, number] | void {
      const enteredTitle = this.titleInputElement.value;
      const enteredDescription = this.descriptionInputElement.value;
      const enteredManday = this.mandayInputElement.value;

      // バリデーション
      const titleValidatable: Validatable = {
        value: enteredTitle,
        required: true,
      };

      const descriptionValidatable: Validatable = {
        value: enteredDescription,
        required: true,
        minLength: 5,
      };

      const mandayValidatable: Validatable = {
        value: +enteredManday,
        required: true,
        min: 1,
        max: 1000,
      };

      // 1つでもfalseになればアラートが出る
      if (
        !validate(titleValidatable) ||
        !validate(descriptionValidatable) ||
        !validate(mandayValidatable)
      ) {
        alert("入力値が正しくありません。再度お試しください");
        return;
      } else {
        return [enteredTitle, enteredDescription, +enteredManday];
      }
    }

    private clearInputs() {
      this.titleInputElement.value = "";
      this.descriptionInputElement.value = "";
      this.mandayInputElement.value = "";
    }

    // イベントのオブジェクトを受け取る
    @Autobind
    private submitHandler(event: Event) {
      event.preventDefault();
      const userInput = this.gatherUserInput();
      // Array.isArray : 引数が配列かどうかをチェックする
      if (Array.isArray(userInput)) {
        const [title, desc, manday] = userInput;
        // プロジェクトを追加できるようにする
        projectState.addProject(title, desc, manday);
        this.clearInputs();
      }
    }
  }
}
