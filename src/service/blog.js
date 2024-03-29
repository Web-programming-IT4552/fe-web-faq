const getBlog = async (id) => {
    const myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer " + localStorage.getItem("access_token"));

    const requestOptions = {
        method: 'GET',
        // headers: myHeaders,
        redirect: 'follow'
    };
    try {
        const response = await fetch(`https://hedspi.dev/post/get/${id}` , requestOptions);
        if (!response.ok) {
            throw new Error(response.status + "");
        }
        return await response.json();
    } catch (error) {
        return null;
    }
}
export default getBlog