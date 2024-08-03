// ファイル名の拡張子は.jsとする
import { Draggable } from "../models/drag-drop.js";
import { Project } from "../models/project.js";
import Component from "./base-component.js";
import { Autobind } from "../decorators/autobind.js";
// ProjectItem Class
export class ProjectItem
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
    // データを設定することができる(DragEventでデータを転送するためのプロパティ)
    event.dataTransfer!.setData("text/plain", this.project.id);
    // ブラウザ上でカーソルがどのように表示されるかをコントロールする
    event.dataTransfer!.effectAllowed = "move";
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
