import getProfile from "./profile";

export const isAuth = async () => {
    return (await getProfile()) !== null;
}

export const token = localStorage.getItem("access_token");
