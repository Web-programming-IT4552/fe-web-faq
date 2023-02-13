
const getProfile = () => {
    var myHeaders = new Headers();
    let result = ""
    myHeaders.append("Authorization", localStorage.getItem("access_token") || "");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    fetch("https://hedspi.dev/user/profile", requestOptions)
        .then(response => {
            if (response.statusCode === 200) {
                return response.json();
            } else {
                return {
                    message: "Invalid"
                }
            }


        })
        .then(r => {

            result = r;
            console.log(r)
        })
        .catch (error => console.log());
        return result;
}
export default getProfile