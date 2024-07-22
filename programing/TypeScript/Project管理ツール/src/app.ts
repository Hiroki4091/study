class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  mandayInputElement: HTMLInputElement;

  // コンストラクタでは基本的に要素への参照を取得する作業を行う
  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    // .content: templateタグの内側のタグを参照する
    // importNode(, true)のtrueはdeep cloneするかどうかの引数（contentの中の階層も含めてインポートするかどうか）
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    // app.cssのidを指定することで装飾を適応する
    this.element.id = "user-input";
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
    this.attach();
  }

  // イベントのオブジェクトを受け取る
  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement.value);
  }

  // イベントリスナーの設定
  private configure() {
    this.element.addEventListener("submit", this.submitHandler.bind(this));
  }

  // 要素を追加
  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const proInput = new ProjectInput();