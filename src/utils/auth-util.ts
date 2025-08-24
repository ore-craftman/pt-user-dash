import { getCookie, deleteCookie, setCookie } from "./cookies";
export const TOKEN_CONSTANTS = {
  ACCESS_TOKEN: "ACCESS_TOKEN_PT_USER",
  // REFRESH_TOKEN:"REFRESH_TOKEN"
};
export const authUtils = {
  getToken: () => {
    const token = getCookie(TOKEN_CONSTANTS.ACCESS_TOKEN);
    return token;
  },
  setToken: (token: string) => {
    setCookie({
      cname: TOKEN_CONSTANTS.ACCESS_TOKEN,
      cvalue: token,
      expInSeconds: 3 * 24 * 60 * 60,
    });

    setTimeout(() => {
      const verifyAccessToken = getCookie(TOKEN_CONSTANTS.ACCESS_TOKEN);
      if (!verifyAccessToken) {
        deleteCookie(TOKEN_CONSTANTS.ACCESS_TOKEN);
      }
    }, 50);
  },
  deleteToken: () => {
    deleteCookie(TOKEN_CONSTANTS.ACCESS_TOKEN);
  },
  isAuthenticated: () => {
    const token = getCookie(TOKEN_CONSTANTS.ACCESS_TOKEN);
    return !!token;
  },
};
