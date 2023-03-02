export interface Goods {
  src: string;
  name: string;
  title?: string;
  dec?: string;
  price: number;
  number: number;
  like: number;
  sellerNum: string;
  webAddress?: string;
}

export class IGoods implements Goods {
  src = "";
  name = "";
  dec = "";
  price = 99.5;
  number = 105;
  like = 1000;
  sellerNum = "XUN15945687452";
}
