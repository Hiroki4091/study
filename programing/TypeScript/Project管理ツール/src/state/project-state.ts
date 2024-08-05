import { Project, ProjectStatus } from "../models/project";
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
export class ProjectState extends State<Project> {
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
    this.updateListeners();
  }

  // ドラッグ＆ドロップで今入っているリストから他のリストへ移動するメソッド
  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find((prj) => prj.id === projectId);
    // project.status !== newStatus ステータスが本当に切り替わった時だけプロジェクトのステータスを更新してupdateListener()を呼び出す
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }

  private updateListeners() {
    for (const listenerFn of this.listeners) {
      // プロジェクトのリストを管理ためのものなのでプロジェクトのリストコピーして返す  slice() : コピー
      listenerFn(this.projects.slice());
    }
  }
}

export const projectState = ProjectState.getInstance();
