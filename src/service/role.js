import getProfile from "./profile";

export const isAdmin = async () => {
    const profile = await getProfile();
    if (!profile) {
        return false;
    } else {
        return profile.user.role === "1";
    }
}
