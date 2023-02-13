const getProfile = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem("access_token"));

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    try {
        const response = await fetch("https://hedspi.dev/user/profile", requestOptions);
        if (!response.ok) {
            throw new Error(response.status + "");
        }
        return await response.json();
    } catch (error) {
        return null;
    }
}
export default getProfile