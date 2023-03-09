import ShopListStore from "@/store/ShopListStore";

export const ADD = "add";
export const DEL = "del";
export declare type actionType = typeof ADD | typeof DEL;

export declare type PagenationPropsType = {
  totalpage: number;
  start?: number;
  currentPage: number;
  maxLength: number;
  end?: number;
  elementId: string;
};
export interface IPagenation {
  //下一页渲染
  next: () => void;
  //上一页渲染
  prev: () => void;
  // 渲染页码
  render: () => void;
  // 添加页码事件
  bindClickEvent?: (...args: any[]) => void;
}

class BasePagenation {
  // [x: string]: any; //不确定参数类型
  totalpage: number = 0;
  start: number = 0;
  currentPage: number = 0;
  maxLength: number = 0;
  end: number = 0;
  elementId: string = "";
  constructor(props: PagenationPropsType) {
    this.totalpage = props.totalpage;
    this.start = props.start || 1;
    this.currentPage = props.currentPage;
    this.maxLength = props.maxLength || 10;
    this.end = props.maxLength || 10;
  }
}
export class Pagenation extends BasePagenation implements IPagenation {
  private constructor(props: PagenationPropsType) {
    super(props);
    if (!props.elementId) {
      return;
    }
    this.elementId = props.elementId;
    this.render();
  }

  static INIT = (
    totalpage?: number,
    currentPage?: number,
    maxLength?: number,
    elementId?: string
  ) => {
    return new Pagenation({
      totalpage: totalpage ? totalpage : 0,
      currentPage: currentPage ? currentPage : 0,
      maxLength: maxLength ? maxLength : 0,
      elementId: elementId ? elementId : "",
    });
  };
  setInitData(options: PagenationPropsType) {
    this.totalpage = options.totalpage;
    this.currentPage = options.currentPage;
    this.maxLength = options.maxLength;
    this.elementId = options.elementId;
  }
  private changePageLoopNumber(type: actionType) {
    switch (type) {
      case ADD:
        this.addChange();
        break;
      case DEL:
        this.delChange();
        break;
    }
  }
  private addChange() {
    if (this.currentPage >= this.totalpage) {
      return;
    }
    // 给下一个li添加样式病判断是否该重新渲染
    if (
      this.currentPage > 10 &&
      (this.currentPage - 1) % this.maxLength === 0
    ) {
      this.start = this.currentPage;
      this.end = this.currentPage - 1 + this.maxLength;
    }
    this.render();
  }
  private delChange() {
    if (this.currentPage >= 10 && this.currentPage % this.maxLength === 0) {
      this.end = this.currentPage;
      this.start = this.currentPage - this.maxLength + 1;
    }
    this.render();
  }
  next() {
    this.currentPage++;
    this.changePageLoopNumber(ADD);
    // this.toString();
  }
  prev() {
    if (this.currentPage <= 1) {
      return;
    }
    this.currentPage--;
    this.changePageLoopNumber(DEL);
    // this.toString();
  }
  /**
   */
  render() {
    const ul: HTMLElement | null = document.querySelector("#loop");
    const active: number = this.currentPage;
    while (ul?.firstChild) {
      ul.removeChild(ul.firstChild);
    }
    const children: Node[] = [];
    let loopvalue = this.end;
    for (let i = this.start - 1; i < loopvalue; i++) {
      const childEl: HTMLElement = document.createElement("li");
      childEl.setAttribute("class", "navli");
      childEl.textContent = (i + 1).toString();
      childEl.addEventListener("click", (e) => this.bindClickEvent(e, i + 1));
      if (active === i + 1) {
        childEl.setAttribute("class", "navli active");
      }
      children.push(childEl);
    }
    ul?.append(...children);
  }
  bindClickEvent(e: Event, currentId: number) {
    this.toString();
    const store = ShopListStore();
    const type = localStorage.getItem("type");
    store.getSellerList(type ? type : "pw", currentId);
    // this.render();
  }
  toString() {
    console.log(
      "pagenation",
      "currentPage",
      this.currentPage,
      "---",
      "start",
      this.start,
      "---",
      "end",
      this.end
    );
  }
}
