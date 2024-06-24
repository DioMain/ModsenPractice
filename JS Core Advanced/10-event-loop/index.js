import { Axios } from "axios";

async function getApiData() {
    const axios = new Axios({ method: "GET"});

    let timeout = false;
    let result = undefined;

    let tmobject = setTimeout(() => {
        timeout = true;
    }, 2000);

    while (result == undefined && timeout == false) {
        try {
            result = (await axios.get("https://www.youtube.com")).data;
    
            clearTimeout(tmobject);
        } catch (error) { }
    }

    if (timeout)
        throw "Timeout"

    return result;
}

try {
    console.log(await getApiData());
} catch (error) {
    console.log(error);
}