// Drag & Drop
interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

interface DragTarget {
  // 有効なドロップ対象かどうかをブラウザに伝えるためのEventHandler(特定の処理をしなければドロップできない)
  dragOverHandler(event: DragEvent): void;
  // ここでデータの更新や画面の更新を行う[実際にドロップが起きた時に呼ばれるEventHandler(dragOverHandlerがドロップを許可したら最終的に呼ばれる)]
  dropHandler(event: DragEvent): void;
  // ビジュアル上のフィードバックを行う時に便利なEventHandler(ユーザーが何かをドラッグした時に背景色を変えたりする、キャンセルされた場合などに表示を元に戻すことができる)
  dragLeaveHandler(event: DragEvent): void;
}

// Project Type
enum ProjectStatus {
  Active,
  Finished,
}

class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public manday: number,
    public status: ProjectStatus
  ) {}
}

// Project State Management
type Listener<T> = (itmes: T[]) => void;

class State<T> {
  // protected：クラスの外部からはアクセスできないが、継承先のクラスでもアクセスすることができる
  protected listeners: Listener<T>[] = [];
  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

// Project State Management
class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, manday: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      manday,
      // デフォルトではアクティブ
      ProjectStatus.Active
    );
    this.projects.push(newProject);
    for (const listenerFn of this.listeners) {
      // プロジェクトのリストを管理ためのものなのでプロジェクトのリストコピーして返す  slice() : コピー
      listenerFn(this.projects.slice());
    }
  }
}

const projectState = ProjectState.getInstance();

// Validation
interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(validatableInput: Validatable) {
  // defaltをtrueに設定
  let isValid = true;
  // 入力必須をチェック
  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim().length !== 0;
  }
  // 最小文字数（文字列）
  if (
    validatableInput.minLength != null &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid && validatableInput.value.length >= validatableInput.minLength;
  }
  // 最大文字数（文字列）
  if (
    validatableInput.maxLength != null &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid && validatableInput.value.length <= validatableInput.maxLength;
  }
  // 最小文字数（数字）
  if (
    validatableInput.min != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value >= validatableInput.min;
  }
  // 最大文字数（数字）
  if (
    validatableInput.max != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value <= validatableInput.max;
  }
  return isValid;
}

// autobind decorator
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

// Component Class
// 抽象化クラス（インスタンス化できない）
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
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

// ProjectItem Class
class ProjectItem
  extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable
{
  private project: Project;

  // mandayを取得するGetter関数を設定
  get manday() {
    if (this.project.manday < 20) {
      return this.project.manday.toString() + "人日";
    } else {
      return (this.project.manday / 20).toString() + "人月";
    }
  }
  constructor(hostId: string, project: Project) {
    super("single-project", hostId, false, project.id);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  @Autobind
  dragStartHandler(event: DragEvent) {
    console.log(event);
  }

  dragEndHandler(_: DragEvent) {
    console.log("Drag終了");
  }

  configure() {
    // addEventListener: 特定のイベントが発生した時に指定された関数を呼び出すためのメソッド
    this.element.addEventListener("dragstart", this.dragStartHandler);
    this.element.addEventListener("dragend", this.dragEndHandler);
  }

  renderContent() {
    this.element.querySelector("h2")!.textContent = this.project.title;
    this.element.querySelector("h3")!.textContent = this.manday;
    this.element.querySelector("p")!.textContent = this.project.description;
  }
}

// ProjectList class
class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget
{
  assignedProjects: Project[];

  constructor(private type: "active" | "finished") {
    super("project-list", "app", false, `${type}-projects`);
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.assignedProjects = [];

    this.configure();
    this.renderContent();
  }

  @Autobind
  dragOverHandler(_: DragEvent) {
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.add("droppable");
  }

  dropHandler(_: DragEvent) {}

  // ドラッグ中に要素を離れた時に呼び出されるイベント
  @Autobind
  dragLeaveHandler(_: DragEvent) {
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.remove("droppable");
  }

  // publicメソッドは一般的にprivateメソッドの上に定義する
  configure() {
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("drop", this.dropHandler);
    this.element.addEventListener("dragleave", this.dragLeaveHandler);

    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((prj) => {
        if (this.type === "active") {
          return prj.status === ProjectStatus.Active;
        }
        return prj.status === ProjectStatus.Finished;
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  // idを設定、h2タグの文字列を設定
  renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type === "active" ? "実行中プロジェクト" : "完了プロジェクト";
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    )! as HTMLUListElement;
    // すでに追加したリストを再度表示されないようにする(毎回リストをクリアする)
    listEl.innerHTML = "";
    for (const prjItem of this.assignedProjects) {
      new ProjectItem(listEl.id, prjItem);
    }
  }
}

// ProjectInput class
class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
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

const proInput = new ProjectInput();
const activePrjList = new ProjectList("active");
const finishedPrjList = new ProjectList("finished");
