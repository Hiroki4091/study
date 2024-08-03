// Component Class
// 抽象化クラス（インスタンス化できない）
export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    // 任意の引数は常に最後に定義する必要がある
    newElementId?: string
  ) {
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementId)! as T;

    // .content: templateタグの内側のタグを参照する
    // importNode(, true)のtrueはdeep cloneするかどうかの引数（contentの中の階層も含めてインポートするかどうか）
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as U;
    if (newElementId) {
      // app.cssのidを指定することで装飾を適応する
      this.element.id = newElementId;
    }
    this.attach(insertAtStart);
  }

  // 継承した元クラスでこのメソッドを実装して利用可能にすることを強制する
  abstract configure(): void;
  abstract renderContent(): void;

  // 要素を追加
  private attach(insertAtBegining: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBegining ? "afterbegin" : "beforeend",
      this.element
    );
  }
}
