import getProfile from "./profile";

export const isAuth = async () => {
    return (await getProfile()) !== null;
}