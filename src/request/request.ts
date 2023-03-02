import axios from "axios";
import router from "../router/router";
import { ReqConfig } from "./req.config";
const env = "dev";
const request = axios.create({
  ...ReqConfig,
});
//请求白名单，如果请求在白名单里，将不会呗拦截权限校验
const whiteUrls = [
  "/login",
  "../src/assets/dummy/login.json",
  "/admin/register",
];

request.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json;charset=utf-8";

    //取出sessionStorage里面缓存的用户信息
    let userJSON = sessionStorage.getItem("user");
    // let tokenJSON=sessionStorage.getItem("token");
    const url: string = config.url || "";
    if (!whiteUrls.includes(url)) {
      //检验请求白名单那
      if (!userJSON) {
        router.push("/login");
      } else {
        let user = JSON.parse(userJSON);
        config.headers["token"] = user.token; //设置请求头
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// response 拦截器
// 可以在接口响应后统一处理结果
request.interceptors.response.use(
  (response) => {
    let res = response.data;
    // 如果是返回的文件
    if (response.config.responseType === "blob") {
      return res;
    }
    // 兼容服务端返回的字符串数据
    if (typeof res === "string") {
      res = res ? JSON.parse(res) : res;
    }
    //验证token
    if (res.code === "51" || res.code === "52") {
      console.error("token已经过期,请重新登入");
      router.push("/login");
    }
    return res;
  },
  (error) => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);
declare type PostParams<T extends object> = {
  url: string;
  sourceUrl?: string;
  params: T;
};
const dummyFun = (options: PostParams<any>) => {
  const newOptions: PostParams<any> = Object.assign({}, options);
  newOptions.sourceUrl = options.url;
  newOptions.url = `http://${location.host}/src/assets/dummy${options.url}.json`;
  return Get(newOptions);
};
export function Post(options: PostParams<any>) {
  if (env === "dev") {
    return dummyFun(options);
  }
  return new Promise((resolve, reject) => {
    request
      .post(options.url, JSON.stringify(options.params))
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err.data);
      });
  });
}
export function Get(options: PostParams<any>) {
  return new Promise((resolve, reject) => {
    request
      .get(options.url, { params: options.params })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject(err.data);
      });
  });
}
