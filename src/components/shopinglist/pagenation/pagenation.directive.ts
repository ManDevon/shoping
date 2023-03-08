import ShopListStore from "@/store/ShopListStore";
import { Directive, Ref, render, VNode } from "vue";
declare type loopNumType = {
  totalpage: number;
  currentPage: Ref<number>;
  maxLength: Ref<number>;
};
export let vLoopNumber: Directive = {
  mounted: (el: HTMLElement, binding, vnode: VNode) => {
    // const options: loopNumType = binding.value;
    // console.log("-------dir:mounted----", options);
    // const store = ShopListStore();
    // const ul = document.querySelector("#loop");
    // const maxlength: Ref<number> = options.maxLength;
    // const active: Ref<number> = options.currentPage;
    // while (ul?.firstChild) {
    //   ul.removeChild(ul.firstChild);
    // }
    // const children: Node[] = [];
    // let loopvalue = options.totalpage;
    // let start = store.pageLoopStart;
    // if (maxlength) {
    //   loopvalue = maxlength.value;
    //   if (active.value % maxlength.value === 0) {
    //     start = active.value - 1;
    //     loopvalue = loopvalue + maxlength.value;
    //   }
    // } else {
    //   loopvalue = options.totalpage;
    // }
    // for (let i = start; i < loopvalue; i++) {
    //   const childEl: HTMLElement = document.createElement("li");
    //   childEl.setAttribute("class", "navli");
    //   childEl.textContent = (i + 1).toString();
    //   if (active.value === i + 1) {
    //     childEl.setAttribute("class", "navli active");
    //   }
    //   children.push(childEl);
    // }
    // ul?.append(...children);
    // } else {
    //   throw new Error("binding value must be number");
    // }
  },
  beforeMount: (el, binding, vnode) => {
    console.log("-------dir:beforeMount----");
  },
  unmounted: () => {
    console.log("-------dir:unmounted----");
  },
  updated: (el, binding, vnode) => {
    console.log("-------dir----");

    render(vnode, el, false);
  },
};
