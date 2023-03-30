// import Vue from "vue";

// const loopNumber = Vue.directive("loopNumber", {
//   mounted: (el: HTMLElement, binding, vnode: VNode) => {
//     // console.log(el, "---", binding, "------", vnode);
//     if (typeof binding.value === "number") {
//       const parent = el.parentNode;
//       const children: Node[] = [];
//       const maxlength = el.getAttribute("maxlength");
//       const loopvalue = maxlength ? maxlength : binding.value;
//       for (let i = 0; i < loopvalue; i++) {
//         const child: Node = el.cloneNode();
//         child.textContent = (i + 1).toString();
//         children.push(child);
//       }
//       parent?.append(...children);
//       parent?.removeChild(el);
//     } else {
//       throw new Error("binding value must be number");
//     }
//   },
// });
// export default {
//   loopNumber,
// };
// declare module "fabric";
