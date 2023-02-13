const getView = async () => {
    let requestOptions = {
        method: 'POST'
    };

    let result = (await fetch("https://hedspi.dev/post/view", requestOptions)).json();
    return (await result).data;
}

const addView = async () => {
    let requestOptions = {
        method: 'GET'
    };

    let result = (await fetch("https://hedspi.dev/post/view", requestOptions)).json();
    return result.message;
}

export default addView;
export {getView};