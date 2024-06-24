import { Axios } from "axios";

async function getDataFrom(urlfrom, urlto) {
    const axios = new Axios({ method: "GET" });

    let datafrom = (await axios.get(urlfrom)).data;

    let result = (await axios.get(urlto + `/${datafrom.substring(0, 20)}`)).data;

    return result;
}
            
console.log(await getDataFrom("https://learn.javascript.ru", "https://www.youtube.com"));