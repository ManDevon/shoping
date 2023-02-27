import { CreateAxiosDefaults } from "axios";

export const ReqConfig: CreateAxiosDefaults<any> = {
  baseURL: "./",
  timeout: 3000,
  timeoutErrorMessage: "请求超时请重试...",
};
