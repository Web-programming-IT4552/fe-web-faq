const getListUser = async () => {
    let requestOptions = {
        method: 'GET'
    };

    let result = (await fetch("https://hedspi.dev/post/list", requestOptions)).json();
    return (await result).data;
}

export default getListUser;