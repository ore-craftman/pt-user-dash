// I want to create a utility function to manage cookies
export const setCookie = ({cname,cvalue,expInSeconds,path="/"}:{cname:string,cvalue:string,expInSeconds:number,path?:string})=>{
    const d = new Date();
    d.setTime(d.getTime() + (expInSeconds * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = `${cname}=${cvalue};${expires};path=${path}`;
}

export const getCookie = (cname: string) => {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

export const deleteCookie = (cname: string, path: string = "/") => {
    document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`;
}
