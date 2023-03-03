import { Post, Get } from "./request";

export const Api = {
  login: (username: String, password: String) => {
    return Post({
      url: "/login",
      params: {
        username,
        password,
      },
    });
  },
  getMainList: () => {
    return Post({
      url: "/mainlist",
      params: {},
    });
  },

  getSellerList: (type: string) => {
    return Post({
      url: `/sellerlist`,
      params: {
        type,
      },
    });
  },
};
