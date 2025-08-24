import { redirect } from "react-router-dom";
import { getCookie } from "./utils/cookies";
import { TOKEN_CONSTANTS } from "./utils/auth-util";
export const getToken = () => getCookie(TOKEN_CONSTANTS.ACCESS_TOKEN);

export const requireAuth = () => {
  const token = getToken();
  if (!token || token.length < 1) {
   throw redirect("/");
  }
  return null;

};


export const checkAuthForLogin = () => {
  const token = getToken();
  if (token) {
   throw redirect("/dashboard");
  }
  return null;
};